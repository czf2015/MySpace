const http = require('http')
const fs = require('fs')

const server = http.createServer(async (req, res) => {
  let [titles, tmpl] = await Promise.all([
    readFile('./titles.json'),
    readFile('./tmpl.html')
  ])

  let html = tmpl.replace('%', titles.join('</li><li>'))

  res.writeHead(200, {
    'Content-Type': 'text/html'
  })

  res.end(html)
})

server.listen(3012)

function readFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) return reject(err)
      if (fileName.indexOf('json') > -1) {
        resolve(JSON.parse(data.toString()))
      } else {
        resolve(data.toString())
      }
    })
  })
}