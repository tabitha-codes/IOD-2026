const Calculator = require('./calculator');
const Logger = require('./Logger');
let myCalc = new Calculator()
let myLogger = new Logger()

const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.add(number1, number2)
    myLogger.log(myCalc.id, sum)
    res.json({result:sum})
}

const subtractNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let difference = myCalc.subtract(number1, number2)
    myLogger.log(myCalc.id, difference)
    res.json({result:difference})
}

const multiplyNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let product = myCalc.multiply(number1, number2)
    myLogger.log(myCalc.id, product)
    res.json({result:product})
}

const divideNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let quotient = myCalc.divide(number1, number2)
    myLogger.log(myCalc.id, quotient)
    res.json({result:quotient})
}

module.exports = { addNumbers, subtractNumbers, multiplyNumbers, divideNumbers}