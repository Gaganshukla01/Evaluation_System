const mongoose = require('mongoose');
const EmployeeSchema = new mongoose.Schema({
    employeeID: { type: Number, unique: true, required: true },
    name: String,
    designation: String
});

module.exports = mongoose.model('Employees', EmployeeSchema);
