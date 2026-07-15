/* 8. The object below represents a single city.

a) Write a function that takes an object as an argument and uses a for...in loop to access
and print to the console each of those object properties and their values. Test it using
the sydney object below.

b) Create a new object for a different city with different properties and call your function
again with the new object.
*/

const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

/* My Answer:
a)
const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

function printCity(city) { 
for (let key in city) { // iterates over each property in the phone object, stores in ‘key’ variable
console.log('key: ' + key); // prints each object property name (key) in turn
console.log('value: ' + city[key]); // prints each object value in turn
}
}
printCity(sydney);

Output: 
key: state
value: NSW
key: founded
value: 26 January 1788
key: timezone
value: Australia/Sydney
==================================================
b) 

const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

const memphis = {
  name: "Memphis",
  population: 610_000,
  state: "USA",
  founded: "22 May 1819",
  timezone: "Central Standard Time",
};

function printCity(city) { 
for (let key in city) { // iterates over each property in the phone object, stores in ‘key’ variable
console.log('key: ' + key); // prints each object property name (key) in turn
console.log('value: ' + city[key]); // prints each object value in turn
}
}
printCity(sydney);
printCity(memphis);

Output: 
key: state
value: NSW
key: founded
value: 26 January 1788
key: timezone
value: Australia/Sydney
key: name
value: Memphis
key: population
value: 610000
key: state
value: USA
key: founded
value: 22 May 1819
key: timezone
value: Central Standard Time
*/