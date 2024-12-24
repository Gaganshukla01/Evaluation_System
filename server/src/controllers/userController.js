const User = require('../model/user.model');
const Evaluation = require('../model/feedback.model');
const bcrypt = require('bcryptjs');
const feedbackModel = require('../model/feedback.model');

// for registring user
const userRegister = async (req, res) => {
  const { id, username, email, password, role } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      id,
      username,
      email,
      password: hashPassword,
      role,
    });
    await newUser.save();
    res.status(201).send('User Registered Sucesfully');
  } catch (error) {
    res.status(400).send('Error on registring user!! ' + error.message);
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  
  if (email === 'admin@yash.com' && password === 'admin') {
    return res.status(201).send({ message: 'Success', redirect: 'admin' });
  }
  // console.log(email);
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).send('User  not found');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    // return res.status(400).send('Invalid Password');
    return res.status(400).send({ message: 'Invalid email or password' });
  }

  res.status(201).send({ message: 'Success', redirect: 'user' });
};

const feedbackController = async (req, res) => {
  const { forEmployee, fromuser, rating, interviewType, feedback, technology } = req.body;

  try {
    const newFeedback = new Evaluation({
      forEmployee,
      fromuser,
      rating,
      interviewType,
      feedback,
      technology,
    });
    await newFeedback.save();
    res.status(201).send('Thankyou For your Feedback');
  } catch (error) {
    res.status(400).send('Error on Giving Feedback !! ' + error.message);
  }
};



const displayFeedback = async (req, res) => {
  // Access fromuser directly from req.body (if needed)
  const fromUser  = req.body.fromuser;
  console.log(fromUser ); // This should print the value of fromuser

  try {
    // Fetch and sort feedback based on forEmployee
    const feedback = await feedbackModel.find({}, 'forEmployee fromuser rating interviewType feedback').sort({
      forEmployee: 1, // 1 for ascending order, -1 for descending order
    });
    console.log(feedback);
    
    
    // Send the sorted feedback as a response
    res.status(200).json(feedback);
  } catch (error) {
    res.status(400).send('Error In Fetching Employee Feedback: ' + error);
  }
};





module.exports = { userRegister, userLogin, feedbackController, displayFeedback };