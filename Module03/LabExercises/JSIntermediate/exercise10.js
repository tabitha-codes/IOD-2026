/* 10.The following code uses the Date object to print the current time and the number of hours
that have passed today so far. Extend the code to do the following:
const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')
a) Print the total number of minutes that have passed so far today
b) Print the total number of seconds that have passed so far today
c) Calculate and print your age as: 'I am x years, y months and z days old'
d) Write a function daysInBetween(date1, date2) which calculates and returns the
amount of days in between the two given dates.*/


/*MY ANSWERS:
A] const today = new Date();

console.log('Current time is ' + today.toLocaleTimeString())

console.log(today.getHours() + ' hours have passed so far today')
// console.log(today.getMinutes() + ' minutes have passed so far today')
console.log(today.getHours() * 60 + today.getMinutes() + ' minutes have passed so far today')
// console.log(today.getUTCSeconds() + ' seconds have passed so far today')
console.log(today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds() + ' seconds have passed so far today')


OUTPUT: Current time is 3:10:46 PM
15 hours have passed so far today
910 minutes have passed so far today
54646 seconds have passed so far today
=====================================
B] const today = new Date();

console.log('Current time is ' + today.toLocaleTimeString())

console.log(today.getHours() + ' hours have passed so far today')
// console.log(today.getMinutes() + ' minutes have passed so far today')
console.log(today.getHours() * 60 + today.getMinutes() + ' minutes have passed so far today')
// console.log(today.getUTCSeconds() + ' seconds have passed so far today')
console.log(today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds() + ' seconds have passed so far today')

OUTPUT: Current time is 3:10:46 PM
15 hours have passed so far today
910 minutes have passed so far today
54646 seconds have passed so far today
=====================================
C]const today = new Date();

console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')
console.log(today.getHours() * 60 + today.getMinutes() + ' minutes have passed so far today')
console.log(today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds() + ' seconds have passed so far today')

const birthday = new Date(1993, 11, 7);
const years = today.getFullYear() - birthday.getFullYear();
const months = today.getMonth() - birthday.getMonth();
const days = today.getDate() - birthday.getDate();

console.log(`I am ${years} years, ${months} months and ${days} days old`);

OUTPUT: Current time is 3:21:44 PM
15 hours have passed so far today
921 minutes have passed so far today
55304 seconds have passed so far today
I am 33 years, -5 months and 21 days old
=====================================
D]const today = new Date();

console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')
console.log(today.getHours() * 60 + today.getMinutes() + ' minutes have passed so far today')
console.log(today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds() + ' seconds have passed so far today')

const birthday = new Date(1993, 11, 7);
const years = today.getFullYear() - birthday.getFullYear();
const months = today.getMonth() - birthday.getMonth();
const days = today.getDate() - birthday.getDate();

console.log(`I am ${years} years, ${months} months and ${days} days old`);

function daysInBetween(date1, date2) {
    const differenceMs = date2 - date1;             
    const oneDayMs = 1000 * 60 * 60 * 24;            
    return Math.round(differenceMs / oneDayMs);      
}

console.log(daysInBetween(new Date(2024, 0, 1), new Date(2024, 0, 15))); 

OUTPUT: Current time is 3:27:23 PM
15 hours have passed so far today
927 minutes have passed so far today
55643 seconds have passed so far today
I am 33 years, -5 months and 21 days old
14
=====================================
*/