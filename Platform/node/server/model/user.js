const mongoose = require('mongoose'),
      bcrypt = require('bcrypt'),
      Schema = mongoose.Schema,
      SALT_WORK_FACTOR = 10,
      MAX_LOGIN_ATTEMPTS = 5,
      LOCK_TIME = 2 * 60 * 60 * 1000;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    index: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  loginAttempts: {
    type: Number,
    required: true,
    default: 0
  },
  role: {
    type: String,
    default: 'user'
  },
  lockUntil: Number,
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  }
})

//增加虚拟字段
userSchema.virtual('isLocked').get(function () {
  return !!(this.lockUntil && this.lockUntil > Date.now());
});

userSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createdAt = this.meta.updatedAt = Date.now();
  } else {
    this.meta.updatedAt = Date.now();
  }

  next();
})

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(this.password, salt, (error, hash) => {
      if (error) {
        return next(error);
      }

      this.password = hash;
      next();
    });
  });
});

userSchema.methods = {
  comparePassword: (_password, password) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(_password, password, (err, isMatch) => {
        if (!err) {
          resolve(isMatch);
        } else {
          reject(err);
        }
      });
    });
  },
  incLoginAttepts: user => {
    return new Promise((resolve, reject) => {
      if (this.lockUntil && Date.now() > this.lockUntil) {
        this.update({
          $set: {
            loginAttempts: 1
          },
          $unset: {
            lockUntil: 1
          }
        }, err => {
          if (!err) {
            resolve(true);
          } else {
            reject(err);
          }
        });
      } else {
        let updates = {
          $inc: {
            loginAttempts: 1
          }
        };

        if (this.loginAttempts + 1 >= MAX_LOGIN_ATTEMPTS && !this.isLocked) {
          updates.$set = {
            lockUntil: Date.now() + LOCK_TIME
          };
        }

        this.update(updates, err => {
          if (!err) {
            resolve(true);
          } else {
            reject(err);
          }
        });
      }
    });
  }
}

module.exports = mongoose.model('User', userSchema);