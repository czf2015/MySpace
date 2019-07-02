const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

let cache = {};

function send404(res) {
	res.writeHead(404, {'Content-Type': 'text/plain'});
	res.end('Error 404: resource not found');
}

function sendFile(res, filePath, fileContents) {
	res.writeHead(200, {'Content-Type': mime.getType(path.basename(filePath))});
	res.end(fileContents);
}

function serverStatic(res, cache, absPath) {
	if (cache[absPath]) {
		sendFile(res, absPath, cache[absPath]);
	} else {
		fs.exists(absPath, function (exists) {
			if (exists) {
				fs.readFile(absPath, function (err, data) {
					if (err) {
						send404(res);
					} else {
						sendFile(res, absPath, data);
						
						cache[absPath] = data;
					}
				})
			} else {
				send404(res);
			}
		});
	}
}

const server = http.createServer(function (req, res) {
	let filePath = false;

	if (req.url == '/') {
		filePath = 'public/index.html';
	} else {
		filePath = 'public' + req.url;
	}

	let absPath = './' + filePath;

	serverStatic(res, cache, absPath);
});

server.listen(3000, function () {
	console.log('Server started on port 3000');
});

// const chatServer = require('./lib/chat_server');
// chatServer.listen(server);