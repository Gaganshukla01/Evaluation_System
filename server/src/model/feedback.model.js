const mongoose = require('mongoose');
const FeedbackSchema = new mongoose.Schema({
  foruser: String,
  fromuser: String,
  rating: Number,
  feedback: String,
});

module.exports = mongoose.model('Evaluation', FeedbackSchema);
