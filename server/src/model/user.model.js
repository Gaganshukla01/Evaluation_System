const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: {
    type: String,
    index: { unique: true },
  },
  role: String,
});

module.exports = mongoose.model('User', UserSchema);
