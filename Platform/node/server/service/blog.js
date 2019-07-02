const http = require('http')
const fs = require('fs')
const ejs = require('ejs')


//读取并解析文件
function getEntries() {
	let entries = []
	let entriesRaw = fs.readFileSync('./entries.txt', 'utf8').split('---')

	entriesRaw.map(function (entryRaw) {
		let entry = {}
		let lines = entryRaw.split('\n')

		lines.map(function (line) {
			if (line.indexOf('title: ') === 0) {
				entry.title = line.replace('title: ', '')
			} else if (line.indexOf('date: ') === 0) {
				entry.date = line.replace('date: ', '')
			} else {
				entry.body = entry.body || ''
				entry.body += line
			}
		})

		entries.push(entry)
	})

	return entries
}


//加载与渲染模板
function blogPage(entries) {
	let values = {entries: entries}
	let template = fs.readFileSync('./page.ejs', 'utf8')

	return ejs.render(template, {locals: values})
}


//启动并监听服务器
const server = http.createServer(function (req, res) {
	let entries = getEntries()
	let output = blogPage(entries)
	
	res.writeHead(200, {'Content-Type': 'text/html'})
	res.end(output)	
})

server.listen(8000)