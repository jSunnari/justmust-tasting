var Member = require('../models/Member');
var restful = require('node-restful');
var mongoose = restful.mongoose;

var voteSchema = new mongoose.Schema({
  voter: {type: String, ref: 'Member'},
  foam: Number,
  color: Number,
  scent: Number,
  bubbles: Number,
  sweetness: Number,
  taste: Number,
  comment: String
});

module.exports = restful.model('Vote', voteSchema);
