const express = require('express');
const { addEmployee ,displayDetails} = require('../controllers/adminController');
const router = express.Router();

router.route('/addEmployee').post(addEmployee);

router.route('/details').get(displayDetails);

module.exports = router