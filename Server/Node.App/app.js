'use strict';
//var debug = require('debug')('my express app');
var express = require('express');
//var path = require('path');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongo = require('mongodb');
var mongoose = require('mongoose');


//var routes = require('./routes/index');
var users = require('./routes/user');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//app.use('/', routes);
app.use('/users', users);

//DB connection


const url = 'mongodb://localhost:27017/userdb';

mongoose.connect(url, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.on('open', function () {
    console.log('DB connected');
})

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port: ' + server.address().port);
});
