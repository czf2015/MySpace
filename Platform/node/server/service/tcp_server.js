// 创建一个简单的echo服务器，并在出现各种事件时在终端窗口中输出日志。
const net = require('net')

const server = net.createServer(socket => {
  socket.setEncoding('utf8') 
   
  console.log('socket connected!')

  socket.on('data', data => {
    console.log('"data" event', data)
  })

  socket.on('end', () => {
    console.log('"end" event')
  })
  // 当按下Ctrl-C杀掉进程，而不是Ctrl-D干净地关闭连接时，不会激发end事件。
  socket.on('close', () => {
    console.log('"close" event')
  })

  socket.on('error', e => {
    console.log('"error" event', e)
  })

  socket.pipe(socket)
})

server.listen(1337)