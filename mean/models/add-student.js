var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
  rollNo: String,
  firstName: String,
  lastName: String,
  emailId: String,
  standard: String,
  subject: String,
  test:String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Student', studentSchema);
