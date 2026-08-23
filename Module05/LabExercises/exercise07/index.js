const calculatorRoutes = require('./calculatorRoutes');
const app = require("./app");
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
