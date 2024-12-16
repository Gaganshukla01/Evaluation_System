const express = require("express");
const { userRegister } = require("../controllers/userController"); 
const router = express.Router();

// registration route
router.route("/register").post(userRegister);

module.exports = router;