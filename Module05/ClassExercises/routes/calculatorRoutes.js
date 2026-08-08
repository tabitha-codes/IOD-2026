const express = require('express');
const router = express.Router();

// new route for adding two numbers
router.get('/add', (req, res) => {
res.send('Add')
})
module.exports = router;

// import all calculator routes (up the top)
const calculatorRoutes =
require('./routes/calculatorRoutes');

// map the calculator routes to our app
app.use('/calculator', calculatorRoutes);