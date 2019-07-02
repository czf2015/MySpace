const express = require('express')
const res = express.response//express.response对象是Express给响应对象用的原型，向这个对象添加属性意味着所有中间件和路由都能访问它们。

//把消息添加到来自任何Express请求的会话变量中
res.message = function (msg, type) {
	type = type || 'info'
	let session = this.req.session
	session.messages = session.messages || []
	session.messages.push({type: type, string: msg})
}

//将类型为error的消息添加到消息队列中
res.error = function (msg) {
	return this.message(msg, 'error')
}

module.exports = function (req, res, next) {
	res.locals.messages = req.session.messages || []//把消息高效的输出到所有要渲染的模板上
	res.locals.removeMessages = function () {
		req.session.messages = []
	}
	next()
}