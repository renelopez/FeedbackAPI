'use strict';

var mongoose = require('mongoose');
var feedbackModel=require('../models/Feedback');

module.exports=function(config){
  mongoose.connect(config.db);
  var db=mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error....'));
  db.once('open', function callback() {
    console.log('Feedback db opened');
  });
};


feedbackModel.createDefaultFeedbacks();
