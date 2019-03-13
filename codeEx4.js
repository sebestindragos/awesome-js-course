// import http module
var http = require('http');
var fs = require('fs');
var path = require('path');

// create a new server instance
var server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  switch (req.url) {
    case '/index.html': {
      var filePath = path.join(__dirname, 'index.html');
      fs.readFile(filePath, 'utf8', function (err, content) {
        if (err) {
          res.statusCode = 404;
          res.end();
        } else {
          res.setHeader('Content-Type', 'text/html');
          res.end(content);
        }
      });
      break;
    }
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
