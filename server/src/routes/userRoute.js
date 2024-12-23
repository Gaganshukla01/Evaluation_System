const express = require('express');
const { userRegister, userLogin } = require('../controllers/userController');
const router = express.Router();

// registration route
router.route('/register').post(userRegister);

//login route
// router.route("/login").get(userLogin)
router.route('/login').post(userLogin);

module.exports = router;
