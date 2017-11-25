var Vote = require('../models/Vote');
var restful = require('node-restful');
var mongoose = restful.mongoose;

var drinkSchema = new mongoose.Schema({
  name: String,
  voteStats: [{type: String , ref: 'Vote'}]
});

module.exports = restful.model('Drink', drinkSchema);
