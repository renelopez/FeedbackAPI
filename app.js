var express = require('express');
var appConfig=require('./config/app.config');
var dbConfig=require('./config/db.config');
var expressConfig = require('./config/express.config.js');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var configSettings=appConfig[env];

expressConfig(app);

dbConfig(configSettings);

module.exports = app;
