const express = require('express');
const path = require('path');
const swaggerUi = require('swagger-ui-express');

const calculatorRoutes = require('./routes/calculatorRoutes');
const swaggerDocument = require('./swagger.json');

const app = express();


app.use(express.static(path.join(__dirname, 'views')));
app.get('/', (req, res) => res.redirect('/calculator.html'));
app.use('/calculator', calculatorRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;