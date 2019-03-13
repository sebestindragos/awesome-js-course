// import http module
var http = require('http') ;

// static content
var content =
`<html>
  <head>
    <title>Hello from Node.js</title>
  </head>
  <body>
    <h1>My awesome website</h1>
  </body>
<html>`;

// create a new server instance
var server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(content);
});

// start listening for incoming connections
var port = 8080;
server.listen(port, function () {
  console.log('magic happens on port', port);
});
