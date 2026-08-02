/*8. Using the following starter code, create a decorator function to validate function arguments
as strings. Test it by decorating the given orderItems function below.
function orderItems(itemName) {
return `Order placed for: ${itemName}`;
}
// create a decorated version of the original function
const validatedOrderItem = validateStringArg(orderItems);
console.log(validatedOrderItem("Apple Watch")); // should run the function
console.log(validatedOrderItem(123)); // should throw an error
a) Create a decorator function validateStringArg(fn) which will validate an
argument passed to fn to ensure that it is a string, throwing an error if not
b) Extend orderItems to use the ... rest operator, allowing multiple item name
arguments, and include them all in the returned string
c) Extend the decorator function to validate as strings all arguments passed to fn
d) When testing the decorated function, use try-catch blocks to handle errors thrown for
non-string arguments*/

function orderItems(itemName) {
return `Order placed for: ${itemName}`;
}
// create a decorated version of the original function
const validatedOrderItem = validateStringArg(orderItems);
console.log(validatedOrderItem("Apple Watch")); // should run the function
console.log(validatedOrderItem(123)); // should throw an error


/* MY ANSWERS:

A] function randomDelay() {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 20) + 1;   
    setTimeout(() => {
      if (delay % 2 === 0) resolve();                 
      else reject();                                  
    }, delay * 1000);                                
  });
}

randomDelay().then(() => console.log('There appears to have been a delay.'));node 


Output: UnhandledPromiseRejection ... The promise rejected with the reason "undefined".
=========================
B] function randomDelay() {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 20) + 1;   
    setTimeout(() => {
      if (delay % 2 === 0) resolve(delay);           
      else reject(delay);                             
    }, delay * 1000);
  });
}

randomDelay().then((d) => console.log(`Success after ${d}s (even).`));


Output: node:internal/process/promises:392
new UnhandledPromiseRejection(reason);
UnhandledPromiseRejection: This error originated either by throwing inside of an async fun
ction without a catch block, or by rejecting a promise which was not handled with .catch()
. The promise rejected with the reason "13".
=========================
C]function randomDelay() {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 20) + 1;   
    setTimeout(() => {
      if (delay % 2 === 0) resolve(delay);            
      else reject(delay);                             
    }, delay * 1000);
  });
}

randomDelay()
  .then((d) => console.log('There appears to have been a delay.'))
  .catch((d) => console.log('The delay failed (odd number).'));


Output: There appears to have been a delay.
=========================
D] function randomDelay() {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 20) + 1;
    setTimeout(() => {
      if (delay % 2 === 0) resolve(delay);   
      else reject(delay);                    
    }, delay * 1000);
  });
}

randomDelay()
  .then((d) => console.log(`Success — there was a delay of ${d}s (even).`))
  .catch((d) => console.log(`Failed — delay was ${d}s (odd).`));


Output: Success — there was a delay of 12s (even).
=========================
*/