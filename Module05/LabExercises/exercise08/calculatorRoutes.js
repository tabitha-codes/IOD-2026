const express = require('express');
const router = express.Router();
const calculatorController = require('./calculatorController');

router.get('/add', (req, res) => {
    calculatorController.addNumbers(req, res)
})

router.get('/subtract', (req, res) => {
    calculatorController.subtractNumbers(req, res)
})

router.get('/multiply', (req, res) => {
    calculatorController.multiplyNumbers(req, res)
})

router.get('/divide', (req, res) => {
    calculatorController.divideNumbers(req, res)
})



// functional add route performing addition on request parameters
// router.get('/add', (req, res) => {
// let number1 = parseInt(req.query.num1);
// let number2 = parseInt(req.query.num2);
// let sum = number1 + number2
// console.log(sum)
// res.status(200)
// res.json({result:sum})
// })

// functional subtraction route performing subtraction on request parameters
// router.get('/subtract', (req, res) => {
// let number1 = parseInt(req.query.num1);
// let number2 = parseInt(req.query.num2);
// let difference = number1 - number2
// console.log(difference)
// res.status(200)
// res.json({result:difference})
// })

// functional multiply route performing multiplication on request parameters
// router.get('/multiply', (req, res) => {
// let number1 = parseInt(req.query.num1);
// let number2 = parseInt(req.query.num2);
// let product = number1 * number2
// console.log(product)
// res.status(200)
// res.json({result:product})
// })

// functional division route performing division on request parameters
// router.get('/divide', (req, res) => {
// let number1 = parseInt(req.query.num1);
// let number2 = parseInt(req.query.num2);
// let quotient = number1 / number2
// console.log(quotient)
// res.status(200)
// res.json({result:quotient})
// })

module.exports = router;