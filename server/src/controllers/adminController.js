const Employee = require("../model/employee.model");

const addEmployee = async (req, res) => {
    try {
        const { empId, name, email, designation } = req.body;
        if (!empId) {
            return res.status(400).send("empId is required");
        }

        const existingEmployee = await Employee.findOne({ empId });
        if (existingEmployee) {
            return res.status(400).send("Employee with this empId already exists");
        }

        const newEmployee = new Employee({ empId, name, email, designation });
        console.log(newEmployee);
        await newEmployee.save();
        res.status(201).send('Employee Added Successfully');
    } catch (error) {
        res.status(400).send("Error In Adding Employee " + error);
    }
}

module.exports = { addEmployee }