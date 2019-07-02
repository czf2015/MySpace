const net = require('net')
const redis = require('redis')

const server = net.createServer(function (socket) {
	let subscriber
	let publisher

	socket.on('connect', function () {
		subscriber = redis.createClient()
		subscriber.subscriber('main_chat_room')
		subscriber.on('message', function (channel, message) {
			socket.write('Channel ' + channel + ': ' + message)
		})
		publisher = redis.createClient()
	})

	socket.on('data', function (data) {
		publisher.publish('main_chat_room', data)
	})
	
	socket.on('end', function () {
		subscriber.unsubscribe('main_chat_room')
		subscriber.end()
		publisher.end()
	})
})

server.listen(3000)