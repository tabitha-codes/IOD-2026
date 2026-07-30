/* 1. makeCounter below is a decorator function which creates and returns a function that
increments a counter.
a) Create a second counter counter2 using the makeCounter function and test to see if
it remains independent to counter1
b) Modify makeCounter so that it takes an argument startFrom specifying where the
counter starts from (instead of always starting from 0)
c) Modify makeCounter to take another argument incrementBy, which specifies how
much each call to counter() should increase the counter value by.*/


function makeCounter() {
let currentCount = 0;
return function() {
currentCount++;
console.log(currentCount)
return currentCount;
};
}
let counter1 = makeCounter();
counter1(); // 1
counter1(); // 2


/* MY ANSWERS:

A] function makeCounter() {
let currentCount = 0;
return function() {
currentCount++;
console.log(currentCount)
return currentCount;
};
}
let counter1 = makeCounter();
let counter2 = makeCounter();
counter1(); // 1
counter1(); // 2
counter2(); // 1
counter2(); // 2


Output: 1
2
1
2
=========================
B] function makeCounter(startFrom) {
let currentCount = startFrom;


return function() {
console.log(currentCount)
currentCount++;
return currentCount;
};
}

let counter1 = makeCounter(5);
let counter2 = makeCounter(100);

counter1(); // 1
counter1(); // 2
counter2(); // 1
counter2(); // 2


Output: 5
6
100
101
=========================
C]function makeCounter(startFrom, incrementBy) {
let currentCount = startFrom;

return function() {
console.log(currentCount)
currentCount += incrementBy;
return currentCount;
};
}
// let counter1 = makeCounter();
let counter1 = makeCounter(5, 10);
let counter2 = makeCounter(3, 3);

counter1();
counter2();
counter1();
counter2();

Output: 5
3
15
6
=========================
*/