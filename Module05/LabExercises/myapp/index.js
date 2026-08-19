//require the express package
const express = require("express");

// import all calculator routes (up the top)
const calculatorRoutes =
require('./routes/calculatorRoutes');

//create an app using the express package
const app = express();

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



//importing routes
// const testRoutes =
// require('./routes/myTestRoutes');

//create an app using the express package
// const app = express();
// const app1 = express();
// const app2 = express();

//app.use('/', express.static('public'))
// binding to app
// app.use('/mytest', testRoutes);


// set the port to 3000
// const port = 3000;
// const port1 = 80;
// const port2 = 2000;

//app
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/test", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

//1
// app1.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app1.listen(port1, () => {
//   console.log(`Example app listening at http://localhost:${port1}`);
// });

//2
// app2.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app2.listen(port2, () => {
//   console.log(`Example app listening at http://localhost:${port2}`);
// });