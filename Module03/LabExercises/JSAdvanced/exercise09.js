/*9. We can delay execution of a function using setTimeout, where we need to provide both
the callback function and the delay after which it should execute.
a) Create a promise-based alternative randomDelay() that delays execution for a
random amount of time (between 1 and 20 seconds) and returns a promise we can use
via .then(), as in the starter code below
b) If the random delay is even, consider this a successful delay and resolve the promise,
and if the random number is odd, consider this a failure and reject it
c) Update the testing code to catch rejected promises and print a different message
d) Try to update the then and catch messages to include the random delay value
function randomDelay() {
// your code
}
randomDelay().then(() => console.log('There appears to have been a delay.'));*/


function randomDelay() {
// your code
}
randomDelay().then(() => console.log('There appears to have been a delay.'));



/* MY ANSWERS:

A]  function randomDelay() {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 20) + 1;   
    setTimeout(() => {
      resolve();                                       
    }, delay * 1000);                                  
  });
}

randomDelay().then(() => console.log('There appears to have been a delay.'));


Output: There appears to have been a delay.
=========================
B]function randomDelay() {
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
      ^

UnhandledPromiseRejection: This error originated either by throwing inside of an async fun
ction without a catch block, or by rejecting a promise which was not handled with .catch()
. The promise rejected with the reason "15".
=========================
C] function randomDelay() {
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


Output: Failed — delay was 11s (odd).
=========================
*/