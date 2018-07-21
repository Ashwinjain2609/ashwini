var mongoose = require('mongoose');

var TestSchema = new mongoose.Schema({
  question:String ,
  answer:String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Test', TestSchema);
