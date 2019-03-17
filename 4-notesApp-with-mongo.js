// import modules
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

// create web server application
var app = express();

// repository
var notesCollection = undefined;
MongoClient.connect('mongodb://localhost:27017', {
  useNewUrlParser: true
}).then(function (connection) {
  var db = connection.db('awesome-js');
  notesCollection = db.collection('notes');
});

// register middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// register route handlers
app.post('/notes', async function (req, res) {
  await notesCollection.insertOne({
    title: req.body.title,
    message: req.body.message
  });
  res.end();
});
app.get('/notes', async function (req, res) {
  var notes = await notesCollection.find({}).toArray();
  res.json(notes);
});

// start listening for incoming connections
var port = 8080;
app.listen(port, function () {
  console.log('magic happens on port ', port);
});
