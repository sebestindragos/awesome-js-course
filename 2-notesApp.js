// import modules
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

// create web server application
var app = express();

// repository
var notes = [];

// register middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// register route handlers
app.post('/notes', function (req, res) {
  // add code here
});
app.get('/notes', function (req, res) {
  // add code here
});

// start listening for incoming connections
var port = 8080;
app.listen(port, function () {
  console.log('magic happens on port ', port);
});
