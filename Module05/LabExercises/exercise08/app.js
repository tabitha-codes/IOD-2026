const express = require("express");
const app = express();
const calculatorRoutes = require('./calculatorRoutes');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(express.static(__dirname));
app.use('/calculator', calculatorRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;


/*
(master)
$ node index.js
Example app listening at http://localhost:3000
[Calculator :707648]:11
[Caller 707648]: result = 11
[Calculator :707648]:80
[Caller 707648]: result = 80
[Calculator :707648]:7500
[Caller 707648]: result = 7500
[Calculator :707648]:7.5
[Caller 707648]: result = 7.5

*/