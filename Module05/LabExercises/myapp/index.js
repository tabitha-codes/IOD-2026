// Module 04 - Lab Exercise 01

//require the express package
const express = require("express");

//create an app using the express package
const app = express();
app.use('/', express.static('public'))
const app1 = express();
const app2 = express();


// set the port to 3000
const port = 3000;
const port1 = 80;
const port2 = 2000;

//app
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});








//1
app1.get("/", (req, res) => {
  res.send("Hello World!");
});

app1.listen(port1, () => {
  console.log(`Example app listening at http://localhost:${port1}`);
});

//2
app2.get("/", (req, res) => {
  res.send("Hello World!");
});

app2.listen(port2, () => {
  console.log(`Example app listening at http://localhost:${port2}`);
});