const http = require('http')
const fs = require('fs')
const parse = require('url').parse
const join = require('path').join
const root = __dirname

const server = http.createServer(function (req, res) {
	const url = parse(req.url)
	const path = join(root, url.pathname)

	fs.stat(path, function (err, stat) {
		if (err) {
			if (err.code == 'ENOENT') {
				res.statusCode = 404
				res.end('Not Found')
			} else {
				res.statusCode = 500
				res.end('Internal Server Error')
			}
		} else {
			res.setHeader('Content-Length', stat.size)

			const stream = fs.createReadStream(path)

			stream.pipe(res)
			
			stream.on('error', function (err) {
				res.statusCode = 500
				res.end('Internal Server Error')
			})
		}
	})
})

server.listen(4000)