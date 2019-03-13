// import http module
var http = require('http') ;

// create a new server instance
var server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  switch (req.url) {
    case '/':
      res.end('index page');
      break;
    case '/contact':
      res.end('contact page');
      break;
    default:
      res.end('page not found');
  }
});

// start listening for incoming connections
var port = 8080;
server.listen(port, function () {
  console.log('magic happens on port', port);
});
