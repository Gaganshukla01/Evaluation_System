const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  username: String,
  password: String,
  email: {
    type: String,
    unique: true,
    required: true,
    match: /.+\@.+\..+/
  },
  role: String,
});

module.exports = mongoose.model('User', UserSchema);
