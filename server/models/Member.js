var restful = require('node-restful');
var mongoose = restful.mongoose;

var memberSchema = new mongoose.Schema({
  name: String,
});

module.exports = restful.model('Member', memberSchema);
