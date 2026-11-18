const Calculator = require('../models/calculator');
const Logger = require('../utils/Logger');

const myCalc = new Calculator();
const myLogger = new Logger();

// Checks one query value is a real number (not missing, empty, or text)
const isValidNumber = (raw) =>
  typeof raw === 'string' && raw.trim() !== '' && Number.isFinite(Number(raw));

// One shared function does the work for all 4 operations (DRY)
const calculate = (req, res, operation) => {
  const { num1, num2 } = req.query;

  if (!isValidNumber(num1) || !isValidNumber(num2)) {
    return res.status(400).json({ error: 'num1 and num2 must both be valid numbers' });
  }

  const number1 = Number(num1);
  const number2 = Number(num2);

  if (operation === 'divide' && number2 === 0) {
    return res.status(400).json({ error: 'Cannot divide by zero' });
  }

  const result = myCalc[operation](number1, number2);
  myLogger.log(myCalc.id, result);
  res.status(200).json({ result });
};

const addNumbers = (req, res) => calculate(req, res, 'add');
const subtractNumbers = (req, res) => calculate(req, res, 'subtract');
const multiplyNumbers = (req, res) => calculate(req, res, 'multiply');
const divideNumbers = (req, res) => calculate(req, res, 'divide');

module.exports = { addNumbers, subtractNumbers, multiplyNumbers, divideNumbers };