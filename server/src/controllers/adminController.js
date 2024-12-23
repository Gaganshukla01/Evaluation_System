// const Employee = require('../model/employee.model');

// const addEmployee = async (req, res) => {
//     try {

//         const { empId, name, email, designation } = req.body;
        
//         const newEmployee = new Employee({ empId, name, email, designation });
        

//         await newEmployee.save();
//         res.status(201).send('Employee Added Successfully');
//     } catch (error) {
//         res.status(400).send("Error In Adding Employee " + error);
//     }
// }


// module.exports = { addEmployee }

// const displayDetails=async (req,res)=> {
//     try {
//         const employees = await Employee.find({}, 'empId name email').sort({ empId: 1 });
//         res.status(200).json(employees);
//     } catch (error) {
//         res.status(400).send("Error In Fetching Employee Details: " + error);
//     }
// }

// module.exports = { addEmployee , displayDetails}

const Employee = require('../model/employee.model');

const addEmployee = async (req, res) => {

  try {
    const { name, email, designation } = req.body;
    const lastUserID = await getLastID();
    const newUserID = lastUserID + 1;
    // const designation = "Trainee";
    // console.log(newUserID)
    const newEmployee = new Employee({
      empId: newUserID,
      name,
      email,
      designation,
    });

  //   
  await newEmployee.save();
    res.status(201).json({ message: 'Employee Added Successfully' }); // Change to JSON response
  } catch (error) {
    res.status(400).json({ message: 'Error In Adding Employee', error: error.message }); // Change to JSON response
  }
};

const displayDetails = async (req, res) => {
  try {
    const employees = await Employee.find({}, 'empId name email').sort({
      empId: 1,
    });
    res.status(200).json(employees);
  } catch (error) {
    res.status(400).send('Error In Fetching Employee Details: ' + error);
  }
};

//Last ID From database
const getLastID = async () => {
  try {
    const lastUser = await Employee.findOne().sort({ empId: -1 });
    return lastUser ? lastUser.empId : 100;
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
};

module.exports = { addEmployee, displayDetails };