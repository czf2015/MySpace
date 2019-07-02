const net = require('net')

const chatServer = net.createServer()
chatServer.listen(9000)

let clientList = []

chatServer.on('connection', function (client) {
	client.name = `${client.remoteAddress} : ${client.remotePort}`
	clientList.push(client)
	client.write(`Hi ${client.name}!\n`)
	client.on('data', function (data) {
		broadcast(data, client)
	})
	client.on('end', function () {
		console.log(`${client.name} quite`)
		clientList.splice(clientList.indexOf(client), 1)
	})
	client.on('error', function (e) {
		console.log(e)
	})
})

function broadcast(message, client) {
	let cleanup = []

	for (let i = 0; i < clientList.length; i++) {
		if (clientList[i] !== client) {
			//检查socket的可写状态
			if (clientList[i].writable) {
				clientList[i].write(`${client.name} says ${message}\n`)
			} else {
				cleanup.push(clientList[i])
				clientList[i].destroy()
			}
		}
	}

	//在写入循环中删除死节点，清除垃圾索引
	for (let i = 0; i < cleanup.length; i++) {
		clientList.splice(clientList.indexOf(cleanup[i]), 1)
	}
}