/* 10. The following constructor function creates a new Person object with the given name and
age values.

a) Create a new person using the constructor function and store it in a variable

b) Create a second person using different name and age values and store it in a separate
variable

c) Print out the properties of each person object to the console

d) Rewrite the constructor function as a class called PersonClass and use it to create a
third person using different name and age values. Print it to the console as well.

e) Add a canDrive method to both the constructor function and the class that returns true
if the person is old enough to drive.

*/


function Person(name, age) {
this.name = name;
this.age = age;
this.human = true;
}

/* My Answers:

A] 
let person1 = new Person("Tabitha", 32);
let person2 = new Person("Brittany", 40);

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
}
console.log(person1);
console.log(person2);

Output:
Person { name: 'Tabitha', age: 32, human: true }
Person { name: 'Brittany', age: 40, human: true }
============================
B]
let person1 = new PersonClass("Tabitha", 32);
let person2 = new PersonClass("Brittany", 40);
let person3 = new PersonClass("Susan", 15);

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
}

console.log(person1);
console.log(person2);
console.log(person3);


============================
C]
console.log(person1);
console.log(person2);
console.log(person3);


============================
D]
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
}

class PersonClass {
  constructor(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  }
}

let person1 = new PersonClass("Tabitha", 32);
let person2 = new PersonClass("Brittany", 40);
let person3 = new PersonClass("Susan", 15);

console.log(person1);
console.log(person2);
console.log(person3);
============================
E]
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = function() {
    return this.age >= 16;
  }
}

class PersonClass {
  constructor(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  }
  canDrive() {
    return this.age >= 16;
  }
}

let person1 = new PersonClass("Tabitha", 32);
let person2 = new PersonClass("Brittany", 40);
let person3 = new PersonClass("Susan", 15);

console.log(person1.canDrive());
console.log(person2.canDrive());
console.log(person3.canDrive());

Output: 
true
true
false 
*/