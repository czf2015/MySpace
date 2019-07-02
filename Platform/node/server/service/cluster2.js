const cluster = require('cluster'),
	http = require('http'),
	numCPUs = require('os').cpus().length

if (cluster.isMaster) {
	for (let i = 0; i < numCPUs; i++) {
		cluster.fork()
	}

	cluster.on('exit', function (worker, code, signal) {
		console.log('worker ' + worker.process.pid + ' died')
	})
} else {
	http.createServer(function (req, res) {
		res.writeHead(200)
		res.end('hello world!')
	}).listen(8000)
}