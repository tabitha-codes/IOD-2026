/*2. The following delayMsg function is intended to be used to delay printing a message until
some time has passed.
a) What order will the four tests below print in? Why?
b) Rewrite delayMsg as an arrow function
c) Add a fifth test which uses a large delay time (greater than 10 seconds)
d) Use clearTimeout to prevent the fifth test from printing at all. */


function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')


/* MY ANSWERS:

A] It's be displayed in this order - 4,3,2,1
4 has no delay and will display instantly.  (Synchronous)

This is asynchronous. 
Synchronous lines run immediately.
JavaScript reads each line of code, but because it's 'delayed' JS doesn't wait, it moves on to the next line of code.
Number 4 is the only one that doesn't have a delay (setTimeout) so it runs that line of code instantly. (Synchronous)
Once the synchronous line is done, the timers run in delay order: 3 (0ms), 2 (20ms), 1 (100ms). (asynchronous)

Output: This message will be printed after a delay: #4: Not delayed at all
This message will be printed after a delay: #3: Delayed by 0ms
This message will be printed after a delay: #2: Delayed by 20ms
This message will be printed after a delay: #1: Delayed by 100ms
=========================
B]const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`)
}

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')


Output: This message will be printed after a delay: #4: Not delayed at all
This message will be printed after a delay: #3: Delayed by 0ms
This message will be printed after a delay: #2: Delayed by 20ms
This message will be printed after a delay: #1: Delayed by 100ms
=========================
C]const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`)
}

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')
setTimeout(delayMsg, 15000, '#5: Delayed by 15000ms'); 


Output: This message will be printed after a delay: #4: Not delayed at all
This message will be printed after a delay: #3: Delayed by 0ms
This message will be printed after a delay: #2: Delayed by 20ms
This message will be printed after a delay: #1: Delayed by 100ms
This message will be printed after a delay: #5: Delayed by 15000ms
=========================
D] const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`)
    
}

let timerId = setTimeout(delayMsg, 15000, '#5: Delayed by 15000ms')

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')
// setTimeout(delayMsg, 15000, '#5: Delayed by 15000ms');  

clearTimeout(timerId);


Output: This message will be printed after a delay: #4: Not delayed at all
This message will be printed after a delay: #3: Delayed by 0ms
This message will be printed after a delay: #2: Delayed by 20ms
This message will be printed after a delay: #1: Delayed by 100ms
=========================
*/