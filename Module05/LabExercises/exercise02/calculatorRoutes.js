const express = require('express');
const router = express.Router();

// functional add route performing addition on request parameters
router.get('/add', (req, res) => {
let number1 = parseInt(req.query.num1);
let number2 = parseInt(req.query.num2);
let sum = number1 + number2
console.log(sum)
res.status(200)
res.json({result:sum})
})

// functional subtraction route performing subtraction on request parameters
router.get('/subtract', (req, res) => {
let number1 = parseInt(req.query.num1);
let number2 = parseInt(req.query.num2);
let subtract = number1 - number2
console.log(subtract)
res.status(200)
res.json({result:subtract})
})

// functional multiply route performing multiplication on request parameters
router.get('/multiply', (req, res) => {
let number1 = parseInt(req.query.num1);
let number2 = parseInt(req.query.num2);
let multiply = number1 * number2
console.log(multiply)
res.status(200)
res.json({result:multiply})
})

// functional division route performing division on request parameters
router.get('/divide', (req, res) => {
let number1 = parseInt(req.query.num1);
let number2 = parseInt(req.query.num2);
let divide = number1 / number2
console.log(divide)
res.status(200)
res.json({result:divide})
})


module.exports = router;