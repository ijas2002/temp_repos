const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('heollo server');
    }
    if(req.url==='/about'){
        res.end('heollo about');
    }
// res.write('hello I\'m in server');
// res.end();
})

server.listen(5000);