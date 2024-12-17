const User = require('../model/user.model');
const Evaluation = require('../model/feedback.model');
const Employee = require('../model/employee.model')
const bcrypt = require('bcryptjs');

// for registring user
const userRegister = async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    const lastEmployeeID = await getLastID();
    const newEmployeeID = lastEmployeeID + 1;

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ id: newEmployeeID, username, email, password: hashPassword, role });
    await newUser.save();
    res.status(201).send('User Registered Sucesfully');
  } catch (error) {
    res.status(400).send('Error on registring user!!' + error.message);
  }
};

// for user login
const userLogin = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).send('User  not found');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send('Invalid Password');
  }
  res.status(201).send('Success');
};

//Last ID From database
const getLastID = async () => {
  try {
    const lastEmployee = await User.findOne().sort({ id: -1 });
    return lastEmployee ? lastEmployee.id : 100;
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
}

module.exports = { userRegister, userLogin };
