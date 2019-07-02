const redis = require('redis')
const bcrypt = require('bcrypt')
const db = redis.createClient()

//用户模型
function User(obj) {
	for (let key in obj) {
		this[key] = obj[key]
	}
}

User.prototype.save = function (fn) {
	if (this.id) {//用户已存在
		this.update(fn)
	} else {
		let that = this
		//创建唯一ID
		db.incr('user:ids', function (err, id) {
			if (err) {
				return fn(err)
			}
			that.id = id//设定ID，以便保存
			//密码哈希
			that.hashPassword(function (err) {
				if (err) {
					return fn(err)
				}
				that.update(fn)//保存用户属性
			})
		})
	}
}

User.prototype.update = function (fn) {
	let that = this
	let id = that.id
	db.set('user:id:' + that.name, id, function (err) {//用名称索引用户
		if (err) {
			return fn(err)
		}
		db.hmset('user:' + id, that, function (err) {//用mongodb哈希存储数据
			fn(err)
		})
	})
}

User.prototype.hashPassword = function (fn) {
	let that = this
	bcrypt.genSalt(12, function (err, salt) {//生成有12个字符的盐
		if (err) {
			return fn(err)
		}
		that.salt = salt//设定盐以便保存
		//生成哈希
		bcrypt.hash(that.pass, salt, function (err, hash) {
			if (err) {
				return fn(err)
			}
			that.pass = hash//设定哈希以便保存
			fn()
		})
	})
}

User.getByName = function (name, fn) {
	User.getId(name, function (err, id) {
		if (err) {
			return fn(err)
		}
		User.get(id, fn)
	})
}

User.getId = function (name, fn) {
	db.get('user:id' + name, fn)
}

User.get = function(id, fn) {
	db.hgetall('user:' + id, function (err, user) {
		if (err) {
			return fn(err)
		}
		fn(null, new User(user))
	})
}

User.authenticate = function (name, pass, fn) {
	User.getByName(name, function (err, user) {
		if (err) {
			return fn(err)
		}
		if (!user.id) {
			return fn()
		}
		bcrypt.hash(pass, user.salt, function (err, hash) {
			if (err) {
				return fn(err)
			}
			if (hash == user.pass) {
				return fn(null, user)
			}
			fn()
		})
	})
}

User.prototype.toJSON = function () {
	return {
		id: this.id,
		name: this.name
	}
}

module.exports = User

let tobi = new User({
	name: 'Tobi',
	pass: 'im a ferret',
	age: '2'
})

tobi.save(function (err) {
	if (err) {
		throw err
	}
	console.log('user id %d', tobi.id)
})