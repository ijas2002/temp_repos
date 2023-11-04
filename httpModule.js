const http = require('http');

const server = http.createServer((req,res)=>{
res.write('hello I\'m in server');
res.end();
})

server.listen(5000);