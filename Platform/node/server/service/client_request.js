const http = require('http');
 
// 用于请求的选项
let options = {
   host: 'www.runoob.com',
   port: '80',
   path: '/nodejs/nodejs-web-module.html'  
};
 
// 向服务端发送请求
const req = http.request(options, (response) => {
   // 不断更新数据
   let body = '';
   
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // 数据接收完成
      console.log(body);
   });
});

req.end();