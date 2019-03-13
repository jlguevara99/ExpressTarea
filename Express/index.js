const http = require('http');

http.createServer((req, res) =>{
    res.end('Hola Mundo');
}).listen(3000);