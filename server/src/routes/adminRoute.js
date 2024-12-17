const express = require('express');
const { addEmployee } = require('../controllers/adminController');
const router = express.Router();

router.route('/addEmployee').post(addEmployee);

module.exports = router