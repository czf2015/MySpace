const parse = require('url').parse

module.exports = function route(obj) {
	return function (req, res, next) {
		if (!obj[req.method]) {
			next()

			return
		}

		let routes = obj[req.method]
		let url = parse(req.url)
		let paths = Object.keys(routes)

		for (let i = 0; i < paths.length; i++) {
			let path = paths[i]
			let fn = routes[path]

			path = path.replace(/\//g, '\\/').replace(/:(\w+)/g, '([^\\/]+)')

			let re = new RegExp('^' + path + '$')
			let captures = url.pathname.match(re)

			if (captures) {
				let args = [req, res].concat(captures.slice(1))

				fn.apply(null, args)

				return
			}
		}
		next()
	}
}