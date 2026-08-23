const express = require("express");
const app = express();
const calculatorRoutes = require('./calculatorRoutes');
app.use(express.static(__dirname));
app.use('/calculator', calculatorRoutes);


module.exports = app;
