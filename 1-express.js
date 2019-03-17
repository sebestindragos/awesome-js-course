// import express module
var express = require('express');

// create web server application
var app = express();

// register route handling
app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send('Hello world!');
});

// start listening for incoming connections
var port = 8080;
app.listen(port, function () {
  console.log('magic happens on port ', port);
});
