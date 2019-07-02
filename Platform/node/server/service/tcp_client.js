// 模仿netcat命令
const net = require('net')
const host = process.argv[2]
const port = Number(process.argv[3])

const socket = net.connect(port, host)

socket.on('connect', () => {
  process.stdin.pipe(socket)
  
  socket.pipe(process.stdout)
	//在stdin上调用resume()，开始读取数据
  process.stdin.resume()

  socket.on('end', () => {
    process.stdin.pause()
  })
})