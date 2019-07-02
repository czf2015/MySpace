const http = require('http'),
      fs = require('fs'),
      url = require('url'); 
 
// 创建服务器
http.createServer((req, res) => {
   // 解析请求，包括文件名
   const pathname = url.parse(req.url).pathname;   
   // 输出请求的文件名
   console.log("Request for " + pathname + " received.");
   
   // 从文件系统中读取请求的文件内容
   fs.readFile(pathname.substr(1), (err, data) => {
      if (err) {
         console.log(err);
         // HTTP 状态码: 404 : NOT FOUND
         res.writeHead(404, {'Content-Type': 'text/html; charset="utf-8"'});
      } else {
         // HTTP 状态码: 200 : OK
         res.writeHead(200, {'Content-Type': 'text/html; charset="utf-8"'});         
         // 响应文件内容
         res.write(data.toString());        
      }

      //  发送响应数据
      res.end();
   });   
}).listen(8080);
 
// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8080/');