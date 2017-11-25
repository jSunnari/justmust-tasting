var Member = require('../models/Member');
var Drink = require('../models/Drink');
var restful = require('node-restful'); //Info: https://github.com/baugarten/node-restful
var mongoose = restful.mongoose;

var tastingSession = new mongoose.Schema({
  members: [{type: String , ref: 'Member'}],
  drinks: [{type: String , ref: 'Drink'}],
  creator: {type: String , ref: 'Member'},
  isActive: Boolean
});

module.exports = restful.model('TastingSession', tastingSession);
