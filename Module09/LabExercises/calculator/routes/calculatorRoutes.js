const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculatorController');

router.get('/add', calculatorController.addNumbers);
router.get('/subtract', calculatorController.subtractNumbers);
router.get('/multiply', calculatorController.multiplyNumbers);
router.get('/divide', calculatorController.divideNumbers);

module.exports = router;