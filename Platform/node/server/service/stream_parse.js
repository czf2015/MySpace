const http = require('http')
const formidable = require('formidable')

function show(req, res) {
	let html = '<form method="post" action"/" enctype="multipart/form-data">'
		+ '<p><input type="text" name="name"/></p>'
		+ '<p><input type="file" name="file"/></p>'
		+ '<p><input type="submit" name="upload"/></p>'
		+ '</form>'

	res.setHeader('Content-Type', 'text/html')
	res.setHeader('Content-Length', Buffer.byteLength(html))
	res.end(html)
}

function isFormData(req) {
	const type = req.headers['content-type'] || ''

	return type.indexOf('multipart/form-data') == 0
}

function upload(req, res) {
	if (!isFormData(req)) {
		res.statusCode = 400
		res.end('Bad Request: expecting multipart/form-data')

		return
	}

const form = new formidable.IncomingForm()

	// form.on('field', function (field, value) {
	// 	console.log(field)
	// 	console.log(value)
	// })

	// form.on('file', function (name, file) {
	// 	console.log(name)
	// 	console.log(file)
	// })

	// form.on('end', function () {
	// 	res.end('upload completed')
	// })

	form.parse(req, function (err, fields, files) {
		console.log(fields)
		console.log(files)

		res.end('upload completed')
	})

	form.on('progress', function (bytesReceived, bytesExpected) {
		const percent = Math.floor(bytesReceived / bytesExpected * 100)
		
		console.log(percent)
	})
}

const server = http.createServer(function (req, res) {
	switch (req.method) {
		case 'GET':
			show(req, res)
			break

		case 'POST':
			upload(req, res)
			break

		default:
			res.end('Bad Request')
	}
})

server.listen(8888)