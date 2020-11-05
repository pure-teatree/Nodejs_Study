const http = require('http'); //http라는 모듈 요구. 상수에 담음
 
const hostname = '127.0.0.1';
const port = 1337;
 
http.createServer((req, res) => { 
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Hello World\n');
}).listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});

var server = http.createServer(); //http 객체가 가지고 있는 함수 실행
server.listen(port, hostname,function(){}); //server 객체가 listen 함수 실행 완료되었을 때 function실행.(콜백함수)

