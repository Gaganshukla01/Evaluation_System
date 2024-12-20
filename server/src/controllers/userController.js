const User = require('../model/user.model');
const Evaluation = require('../model/feedback.model');
const bcrypt = require('bcryptjs');

// for registring user
const userRegister = async (req, res) => {
  const { id, username, email, password, role } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      id: newUserID,
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

// for user login
// const userLogin = async (req, res) => {
//   const { username, password } = req.body;

//   const user = await User.findOne({ username });
//   if (!user) {
//     return res.status(400).send('User  not found');
//   }

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) {
//     // return res.status(400).send('Invalid Password');
//     return res.status(400).send({ message: 'Invalid username or password' });
//   }
//   res.status(201).send('Success');
// };

const userLogin = async (req, res) => {
  const { email, password } = req.body;

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
  res.status(201).send('Success');
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
module.exports = { userRegister, userLogin, feedbackController };
