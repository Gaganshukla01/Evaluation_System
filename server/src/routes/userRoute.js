const express = require('express');
const { userRegister, userLogin,feedbackController, displayFeedback } = require('../controllers/userController');
const router = express.Router();

// registration route
router.route('/register').post(userRegister);

//login route
// router.route("/login").get(userLogin)
router.route('/login').post(userLogin);

//feedback route 
router.route('/feedback').post(feedbackController);

router.route('/feedbackDetails').get(displayFeedback);

module.exports = router;
