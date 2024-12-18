const Employee = require('../model/employee.model');

const addEmployee = async (req, res) => {
    try {
<<<<<<<<< Temporary merge branch 1
        const { id, name, email, designation } = req.body;
        const newEmployee = new Employee({ id, name, email, designation });
=========
        const { empId, name, email, designation } = req.body;
        
        const newEmployee = new Employee({ empId, name, email, designation });
        
>>>>>>>>> Temporary merge branch 2
        await newEmployee.save();
        res.status(201).send('Employee Added Successfully');
    } catch (error) {
        res.status(400).send("Error In Adding Employee " + error);
    }
}

<<<<<<<<< Temporary merge branch 1
module.exports = { addEmployee }
=========
const displayDetails=async (req,res)=> {
    try {
        const employees = await Employee.find({}, 'empId name email').sort({ empId: 1 });
        res.status(200).json(employees);
    } catch (error) {
        res.status(400).send("Error In Fetching Employee Details: " + error);
    }
}

module.exports = { addEmployee , displayDetails}
>>>>>>>>> Temporary merge branch 2
