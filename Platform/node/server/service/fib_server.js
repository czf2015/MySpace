@ http : require('http')
@ cp : require('child_process')

@ server : http.createServer((req, res) => {
  @ child : cp.fork('./fib_calc.js', [req.url.substring(1)])
  
  child.on('message', m => res.end(m.result + '\n'))
})

server.listen(8000)