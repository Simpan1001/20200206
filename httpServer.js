let http = require('http');

let requestListener = function (req, res) {
    res.writeHead(200);
    res.end('Hello world!');
}

let server = http.createServer(requestListener);
server.listen(8080);