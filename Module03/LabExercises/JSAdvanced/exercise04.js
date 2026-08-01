/* 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
sequence is the sum of the previous 2.
e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
a) Write a function printFibonacci() using setInterval that outputs a number in
the Fibonacci sequence every second.
b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
calls to do the same thing
c) Extend one of the above functions to accept a limit argument, which tells it how many
numbers to print before stopping.

5. The following car object has several properties and a method which uses them to print a
description. When calling the function normally this works as expected, but using it from
within setTimeout fails. Why? */


/* MY ANSWERS:

A] function printFibonacci(){
 let a = 1, b = 1; 
    setInterval(() => {
 console.log(a);
 let next = a + b;  
 a = b;
 b = next;
  }, 1000); 
}

printFibonacci(); 


Output:1
1
2
3
5
8
13
=========================
B]function printFibonacciTimeouts(){
 let a = 1, b = 1; 
     function next() {                 
    console.log(a);
    let sum = a + b;
    a = b;
    b = sum;
    setTimeout(next, 1000);         
  }
  next();                         
}
printFibonacciTimeouts();


Output:1
1
2
3
5
8

=========================
C]function printFibonacciTimeouts(limit){
 let a = 1, b = 1; 
  let count = 0;
     function next() {                 
     console.log(a);
    count++; 
    let sum = a + b;
    a = b;
    b = sum;
if (count < limit) { 
    setTimeout(next, 1000);         
  }
}
  next();                         
}
printFibonacciTimeouts(5);
printFibonacciTimeouts(8);


Output:1
1
2
3
5
Output: 1
1
2
3
5
8
13
21
=========================
*/