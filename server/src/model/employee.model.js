const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  empId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: /.+\@.+\..+/
  },
  designation: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});


module.exports = mongoose.model('Employee', EmployeeSchema);