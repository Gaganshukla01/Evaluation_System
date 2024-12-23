const mongoose = require('mongoose');
const FeedbackSchema = new mongoose.Schema({
  forEmployee: String,
  fromuser: String,
  rating: String,
  interviewType: String,
  feedback: String,
  technology: String
  
});

module.exports = mongoose.model('Evaluation', FeedbackSchema);
