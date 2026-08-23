const request = require("supertest");
const app = require("./app");
describe("Calculator Routes", () => {

let number1 = 30;
let number2 = 25;

test('GET /calculator/add => sum of numbers', () => {
  return request(app)
    .get(`/calculator/add?num1=${number1}&num2=${number2}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body).toEqual({
        result: (number1 + number2)
      });
    });
});

test('GET /calculator/subtract => difference of numbers', () => {
  return request(app)
    .get(`/calculator/subtract?num1=${number1}&num2=${number2}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body).toEqual({
        result: (number1 - number2)
      });
    });
});

test('GET /calculator/multiply => product of numbers', () => {
  return request(app)
    .get(`/calculator/multiply?num1=${number1}&num2=${number2}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body).toEqual({
        result: (number1 * number2)
      });
    });
});

test('GET /calculator/divide => quotient of numbers', () => {
  return request(app)
    .get(`/calculator/divide?num1=${number1}&num2=${number2}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body).toEqual({
        result: (number1 / number2)
      });
    });
});

});

/* OutPut: 

let number1 = 10;
let number2 = 12;

$ npm test

> myapp@1.0.0 test
> jest

 PASS  exercise06/app.test.js (9.454 s)
  Calculator Routes
    √ GET /calculator/add => sum of numbers (34 ms)
    √ GET /calculator/subtract => difference of numbers (6 ms)
    √ GET /calculator/multiply => product of numbers (5 ms)
    √ GET /calculator/divide => quotient of numbers (8 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        10.689 s
Ran all test suites.


let number1 = 20;
let number2 = 15;


$ npm test

> myapp@1.0.0 test
> jest

 PASS  exercise06/app.test.js
  Calculator Routes
    √ GET /calculator/add => sum of numbers (41 ms)
    √ GET /calculator/subtract => difference of numbers (16 ms)
    √ GET /calculator/multiply => product of numbers (5 ms)
    √ GET /calculator/divide => quotient of numbers (5 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        0.785 s, estimated 10 s
Ran all test suites.

let number1 = 30;
let number2 = 25;

$ npm test

> myapp@1.0.0 test
> jest

 PASS  exercise06/app.test.js
  Calculator Routes
    √ GET /calculator/add => sum of numbers (44 ms)
    √ GET /calculator/subtract => difference of numbers (17 ms)
    √ GET /calculator/multiply => product of numbers (7 ms)
    √ GET /calculator/divide => quotient of numbers (5 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        0.787 s, estimated 1 s
Ran all test suites.

*/