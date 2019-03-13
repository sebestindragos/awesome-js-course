// import http module
var http = require('http') ;

// create a new server instance
var server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

// start listening for incoming connections
var port = 8080;
server.listen(port, function () {
  console.log('magic happens on port', port);
});
