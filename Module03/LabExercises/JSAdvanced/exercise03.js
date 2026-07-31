/*'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
similar requests until there's a brief pause, then only executing the most recent of those
requests. See https://www.techtarget.com/whatis/definition/debouncing
It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
requests being initiated if a user clicks repeatedly on a button.
Using the following code to test and start with:
a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
pause, the most recent call to func should be executed and any others ignored.
b) Extend the debounce decorator function to take a second argument ms, which defines the
length of the period of inactivity instead of hardcoding to 1000ms
c) Extend debounce to allow the original debounced function printMe to take an argument
msg which is included in the console.log statement.
*/



function printMe() {
console.log('printing debounced message')
}

function debounce(func){
    let timerId;

    return function(timerId) {
          clearTimeout(timerId);  
          timerId = setTimeout(printMe, 1000, 'Delayed by 1000ms');
    }
}

printMe = debounce(printMe);  

setTimeout( printMe, 100);
setTimeout( printMe, 200);
setTimeout( printMe, 300);





/* MY ANSWERS:

A]  function printMe() {
console.log('printing debounced message')
}


function debounce(func){
    let timerId;   

    return function() {
       
    }
}

printMe = debounce(printMe); 

setTimeout( printMe, 100);
setTimeout( printMe, 200);
setTimeout( printMe, 300);


Output: printing debounced message
printing debounced message
printing debounced message
=========================
B] function printMe() {
console.log('printing debounced message')
}


function debounce(func){
    let timerId;

    return function(timerId) {
    
    }
}

printMe = debounce(printMe); 
setTimeout( printMe, 100);
setTimeout( printMe, 200);
setTimeout( printMe, 300);


Output: printing debounced message
printing debounced message
printing debounced message
=========================
C] function printMe() {
console.log('printing debounced message')
}

function debounce(func){
    let timerId;

    return function(timerId) {
          clearTimeout(timerId);  
          timerId = setTimeout(printMe, 1000, 'Delayed by 1000ms');
    }
}

printMe = debounce(printMe);  

setTimeout( printMe, 100);
setTimeout( printMe, 200);
setTimeout( printMe, 300);

Output: I was struggling witht yhis one.

node:internal/errors:542
      throw error;
      ^

TypeError [ERR_INVALID_ARG_TYPE]: The "callback" argument must be of type function. Received type number (1000)
    at setTimeout (node:timers:116:3)
    at Timeout._onTimeout (C:\Users\tabit\OneDrive\Desktop\IOD-2026\Module03\LabExercises\JSAdvanced\exercise03.js:28:
21)
    at listOnTimeout (node:internal/timers:605:17)
    at process.processTimers (node:internal/timers:541:7) {
  code: 'ERR_INVALID_ARG_TYPE'
}

Node.js v24.12.0

=========================
*/