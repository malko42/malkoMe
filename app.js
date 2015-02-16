var app = require('http');

var server = app.createServer(function(req, res, err) {
console.log(req)
res.writeHead(200)
res.end('Soon.')
})
server.listen(8080);
