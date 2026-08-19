//require the express package
const express = require("express");
//create an app using the express package
const app = express();
// import all calculator routes (up the top)
const calculatorRoutes = require('./calculatorRoutes');
// Serve static files (like calculator.html) from this same folder
//__dirname instead of 'public': __dirname is a built-in Node variable 
//that always equals "the folder this file is physically in"
app.use(express.static(__dirname));
// map the calculator routes to our app - binding to app
app.use('/calculator', calculatorRoutes);

// set the port to 3000
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});