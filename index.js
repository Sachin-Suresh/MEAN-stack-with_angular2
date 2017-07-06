var express = require('express');
var app = express();
var mongoose = require('mongoose'); // Mongoose Config
var config =require('./config/database')
var path = require('path'); // NodeJS Package for file paths

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log('Could NOT connect to database: ', err);
  } else {
      //console.log(config.secret);
    console.log('Connected to database: ' + config.db);
  }
});

// Provide static directory for frontend
app.use(express.static(__dirname + '/client/dist/'));

// Connect server to Angular 2 Index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});


app.listen(3000, ()=>  {
    console.log('Listenin to port 3000!!')
});