/*6. Use the Function prototype to add a new delay(ms) function to all functions, which can
be used to delay the call to that function by ms milliseconds.
function multiply(a, b) {
console.log( a * b );
}
multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
a) Use the example multiply function below to test it with, as above, and assume that all
delayed functions will take two parameters
b) Use apply to improve your solution so that delayed functions can take any number of
parameters
c) Modify multiply to take 4 parameters and multiply all of them, and test that your
delay prototype function still works. */



function multiply(a, b) {
   
console.log( a * b );
}

multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
                           


/* MY ANSWERS:
A] Function.prototype.delay = function(ms) {
  let originalFn = this;        
  return function(a, b) {       
    setTimeout(function() {
      originalFn(a, b);         
    }, ms);
  };
};

function multiply(a, b) { console.log(a * b); }
multiply.delay(500)(5, 5);      // prints 25 after 500ms


Output:25
=========================
B] Function.prototype.delay = function(ms) {
  let originalFn = this;
  return function(...args) {          
    setTimeout(function() {
      originalFn.apply(this, args);   
    }, ms);
  };
};

function multiply(a, b) { console.log(a * b); }
multiply.delay(500)(5, 5);            // still prints 25 after 500ms


Output: 25
=========================
C] Function.prototype.delay = function(ms) {
  let originalFn = this;
  return function(...args) {
    setTimeout(function() {
      originalFn.apply(this, args);
    }, ms);
  };
};

function multiply(a, b, c, d) { console.log(a * b * c * d); }   
multiply.delay(500)(2, 3, 4, 5);  


Output:120
=========================
*/