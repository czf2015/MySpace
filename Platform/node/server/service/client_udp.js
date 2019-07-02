const dgram = require('dgram')
const client = require('dgram').createSocket('udp4')

let message = new Buffer('深入浅出Node.js')

client.send(message, 0, message.length, 41234, 'localhost', function (err, bytes) {
	client.close()
})
