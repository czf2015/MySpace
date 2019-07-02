//引入模块
const fs = require('fs')
const EventEmitter = require('events')

//定义常量
const watchDir = './watch'
const processedDir = './done'

//创建类继承事件发射器
//构造器-属性
function Watcher(watchDir, processedDir) {
	this.watchDir = watchDir
	this.processedDir = processedDir
}
//继承
Watcher.prototype = new EventEmitter()
//添加watch方法
Watcher.prototype.watch = function () {
	let watcher = this

	fs.readdir(this.watchDir, function (err, files) {
		if (err) throw err

		for (let index in files) {
			watcher.emit('process', files[index])
		}
	})
}
//添加start方法
Watcher.prototype.start = function () {
	let watcher = this
	
	fs.watchFile(watchDir, function () {
		watcher.watch()
	})
}

//实例化
const watcher = new Watcher(watchDir, processedDir)

//监听
watcher.on('process', function process (file) {
	let watchFile = this.watchDir + '/' + file
	let processedFile = this.processedDir + '/' + file.toLowerCase()

	fs.rename(watchFile, processedFile, function (err) {
		if (err) throw err
	})
})

//启动
watcher.start()