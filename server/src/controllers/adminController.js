const Employee = require("../model/employee.model");

const addEmployee = async (req, res) => {
    try {
        const { id, name, email, designation } = req.body;
        const newEmployee = new Employee({ id, name, email, designation });
        await newEmployee.save();
        res.status(201).send('Employee Added Successfully');
    } catch (error) {
        res.status(400).send("Error In Adding Employee " + error);
    }
}

module.exports = { addEmployee }