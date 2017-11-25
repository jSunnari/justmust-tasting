"use strict";

//Dependencies:
let path = require('path');
let fs = require('fs');
let https = require('https');
let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

let app = express();
let port = 3000
//MongoDB:
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/julmust');

//Express config:
app.use(function(req, res, next){
  //Websites allowed to connect:
  res.setHeader('Access-Control-Allow-Origin', '*');

  //Request methods allowed:
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH');

  //Request headers allowed:
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  //Include cookies in the requests sent to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  //Pass to next layer of middleware
  next();
});

// Serve reacts static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use('/', express.static("../../dist"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//Routes:
app.use('/api', require('./routes/api'));

app.listen(port, function() {
  console.log('listening on port ' + port);
});

module.exports = app;
