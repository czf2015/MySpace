const http = require('http')

const server = http.createServer(function (req, res) {
	let url = 'http://baidu.com'
	let body = '<p>Redirecting to <a href="' + url + '">' + url +'</a></p>'
	
	res.setHeader('Location', url)
	res.setHeader('Content-Type', 'text/html')
	res.setHeader('Content-Length', body.length)
	res.statusCode = 302
	res.write(body)
	res.end()
})

server.listen(3000)