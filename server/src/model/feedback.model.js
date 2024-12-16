const mongoose = require('mongoose');
const FeedbackSchema = new mongoose.Schema({
  foruser: String,
  fromuser: String,
  feedback: String,
});

module.exports = mongoose.model('Evaluation', FeedbackSchema);
