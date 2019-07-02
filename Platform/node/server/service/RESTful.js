const http = require('http')
const url = require('url')

let items = []

const server = http.createServer(function (req, res) {
	switch (req.method) {
		case 'POST':
			let item = ''

			req.setEncoding('utf8')

			req.on('data', function (chunk) {
				item += chunk
			})

			req.on('end', function () {
				items.push(item)

				res.end('OK')
			})
			break

		case 'GET':
			let body = items.map(function (item, i) {
				return i + ') ' + item
			}).join('\n')

			res.setHeader('Content-Length', Buffer.byteLength(body))
			res.setHeader('Content-Type', 'text/plain; charset="utf-8"')
			res.end(body)
			break

		case 'DELETE':
			let path = url.parse(req.url).pathname
			let i = parseInt(path.slice(1), 10)

			if (isNaN(i)) {
				res.statusCode = 400
				res.end('Invalid item id')
			} else if (!items[i]) {
				res.statusCode = 404
				res.end('Item not found')
			} else {
				items.splice(i, 1)

				res.end('OK')
			}
			break

		case 'PUT':
			let path = url.parse(req.url).pathname
			let i = parseInt(path.slice(1), 10)

			if (isNaN(i)) {
				res.statusCode = 400
				res.end('Invalid item id')
			} else if (!items[i]) {
				res.statusCode = 404
				res.end('Item not found')
			} else {
			  let item = ''

			  req.setEncoding('utf8')

			  req.on('data', function (chunk) {
				  item += chunk
			  })
			  
			  req.on('end', function () {
				  items[i] = item

				  res.end(i + ') ' + item)
			  })
			}
		  break
	}
})

server.listen(3000)