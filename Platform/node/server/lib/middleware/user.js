const User = require('../user')

module.exports = function (req, res, next) {
	if (req.remoteUser) {//basicAuth中间件把数据存在req.remoteUser
		res.locals.user = req.remoteUser
	}
	let uid = req.session.uid
	if (!uid) {
		return next()
	}
	User.get(uid, function (err, user) {
		if (err) {
			return next(err)
		}
		req.user = res.locals.user = user
		next()
	})
}