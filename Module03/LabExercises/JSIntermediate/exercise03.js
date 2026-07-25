/* 
3. Use the following animals array for the below tasks. Test each one by printing the result to
the console. Review the following link for tips:

https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Array

a) Add 2 new values to the end
b) Add 2 new values to the beginning
c) Sort the values alphabetically
d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
middle of the animals array with newValue
e) Write a function findMatchingAnimals(beginsWith) that returns a new array
containing all the animals that begin with the beginsWith string. Try to make it work
regardless of upper/lower case. */


const animals = ['Tiger', 'Giraffe']
console.log(animals)


/*
MY ANSWERS:

A] const animals = ['Tiger', 'Giraffe']
animals.push("Chickens", "Cats");
console.log(animals)

OUTPUT: [ 'Tiger', 'Giraffe', 'Chickens', 'Cats']
=====================================
B] const animals = ['Tiger', 'Giraffe']
animals.unshift("Lion", "Pig", "Monkeys");
console.log(animals)

OUTPUT: [ 'Lion', 'Pig', 'Monkeys', 'Tiger', 'Giraffe' ]
=====================================
C] const animals = ['Tiger', 'Giraffe']
animals.push("Chickens", "Cats");
animals.unshift("Lion", "Pig", "Monkeys");
animals.sort();
console.log(animals);

OUTPUT: ['Cats', 'Chickens', 'Giraffe','Lion', 'Monkeys','Pig', 'Tiger']
=====================================
D] const animals = ['Tiger', 'Giraffe', 'Chicken']

animals.push("Chickens", "Cats");

animals.unshift("Lion", "Pig", "Monkeys");

animals.sort();

function replaceMiddleAnimal(newValue) {

const middleIndex = Math.floor(animals.length / 2);

animals[4] = (newValue);

};

replaceMiddleAnimal('Dolphin');

console.log(animals);


OUTPUT: Before - ['Cats', 'Chickens', 'Giraffe', 'Lion', 'Monkeys','Pig', 'Tiger']
After -  ['Cats', 'Chickens', 'Giraffe', 'Dolphin', 'Monkeys','Pig', 'Tiger']
replaced Lion (4) with Dolphin
=====================================
E] const animals = ['Tiger', 'Giraffe', 'Chicken']

animals.push("Chickens", "Cats");

animals.unshift("Lion", "Pig", "Monkeys");

animals.sort();

function findMatchingAnimals(beginsWith) {
return animals.filter(animal => animal.startsWith(beginsWith))
  }

console.log(findMatchingAnimals('C'));


OUTPUT: [ 'Cats', 'Chicken', 'Chickens' ]
=====================================
*/
