const http = require('http')
const qs = require('querystring')

let items = []

function show(res) {
	let html = '<html><head><title>Todo List</title></head><body>'
	         + '<h1>Todo List</h1>'
	         + '<ul>'
	         + items.map(function (item) {
		         	return '<li>' + item + '</li>'
		         }).join('')
	         + '</ul>'
	         + '<form method="post" action="/">'
	         + '<p><input type="text" name="item"/></p>'
	         + '<p><input type="submit" value="Add Item"/></p>'
	         + '</form></body></html>'

	res.setHeader('Content-Type', 'text/html')
	res.setHeader('Content-Length', Buffer.byteLength(html))
	res.end(html)
}

function add(req, res) {
	let body = ''

	req.setEncoding('utf8')
	req.on('data', function (chunk) {
		body += chunk
	})
	req.on('end', function () {
		const obj = qs.parse(body)
		items.push(obj.item)
		show(res)
	})
}

function notFound(res) {
	res.statusCode = 404
	res.setHeader('Content-Type', 'text/plain')
	res.end('Not Found')
}

function badRequest(res) {
	res.statusCode = 400
	res.setHeader('Content-Type', 'text/plain')
	res.end('Bad Request')
}

const server = http.createServer(function (req, res) {
	if (req.url == '/') {
		switch (req.method) {
			case 'GET':
				show(res)
				break

			case 'POST':
					add(req, res)
					break
					
			default:
				badRequest(res)
		}
	} else {
		notFound(res)
	}
})

server.listen(5000)