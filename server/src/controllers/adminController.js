const Employee = require('../model/employee.model');

const addEmployee = async (req, res) => {
  try {
    const { empId, name, email, designation } = req.body;
    const existingEmployee = await Employee.findOne({ empId });

    if (existingEmployee) {
      return res
        .status(400)
        .send('Error: Employee with this empId already exists.');
    }

    const newEmployee = new Employee({ empId, name, email, designation });

    await newEmployee.save();

    res.status(201).send('Employee Added Successfully');
  } catch (error) {
    console.error('Error in adding employee:', error);
    res.status(400).send('Error In Adding Employee: ' + error.message);
  }
};

module.exports = { addEmployee };
