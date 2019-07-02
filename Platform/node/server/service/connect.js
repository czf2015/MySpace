const connect = require('connect')
const url = require('url')

function rewrite(req, res, next) {
	const path = url.parse(req.url).pathname
	let match = path.match(/^\/blog\/posts\/(.+)/)

	if (match) {
		findPostIdBySlug(match[1], function (err, id) {
			if (err) {
				return next(err)
			}

			if (!id) {
				return next(new Error('User not found'))
			}

			req.url = '/blog/posts/' + id

			next()
		})
	} else {
		next()
	}
}


function logger(req, res, next) {
	console.log('%s %s', req.method, req.url)

	next()
}

function restrict(req, res, next) {
	let authorization = req.headers.authorization

	if (!authorization) {
		return next(new Error('Unauthorized'))
	}

	let parts = authorization.split(' ')
	let scheme = parts[0]
	let auth = new Buffer(parts[1], 'base64').toString().split(':')
	let user = auth[0]
	let pass = auth[1]

	authenticateWithDatabase(user, pass, function (err) {
		if (err) {
			return next(err)
		}

		next()
	})
}

function admin(req, res, next) {
	switch (req.url) {
		case '/':
			res.end('try /users')
			break

		case '/users':
			res.setHeader('Content-Type', 'application/json')
			res.end(JSON.stringify(['tobi', 'loki', 'jane']))
			break
	}
}

let users = {
	tobi: 'foo',
	loki: 'bar',
	jane: 'baz'
}

connect()
	.use(logger)
	.use(connect.basicAuth(function (user, pass) {
		return users[user] === pass
	}))
	.use('/admin', restrict)
	.use('/admin', admin)
	.listen(3000)
