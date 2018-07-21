var mongoose = require('mongoose');

var StudentsSchema = new mongoose.Schema({
  rollno: String,
  fname: String,
  lname: String,
  standard: String,
  subject: String,
  test: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Student', StudentsSchema);
