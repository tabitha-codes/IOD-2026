const express = require('express');
const router = express.Router();

// new route for adding two numbers
// router.get('/add', (req, res) => {
// res.send('Add')
// })

// router.get('/add', (req, res) => {

// console.log(req.query)
// res.send(req.query)
// })

// functional add route performing addition on request parameters
router.get('/add', (req, res) => {
let number1 = parseInt(req.query.num1);
let number2 = parseInt(req.query.num2);
let sum = number1 + number2
console.log(sum)
res.status(200)
res.json({result:sum})
})

module.exports = router;