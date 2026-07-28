/*8. The following code creates a new Map object for storing names beginning with A, B, or C
with their phone numbers.
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')
a) Create a new phoneBookDEF Map to store names beginning with D, E or F
b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
c) Update the phone number for Caroline
d) Write a function printPhoneBook(contacts) that prints the names and phone
numbers in the given Map
e) Combine the contents of the two individual Maps into a single phoneBook Map
f) Print out the full list of names in the combined phone book */


const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

/*
MY ANSWERS:

A]const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = Map ()

=====================================
B]const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map ([
    ['Dewayne', '3476235218'],
    ['Elizabeth', '5013692509'],
    ['Frank', '9016895245']
])


for (let name of phoneBookDEF.keys()) {
console.log(name)
}

OUTPUT:Dewayne
Elizabeth
Frank
=====================================
C] const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map ([
    ['Dewayne', '3476235218'],
    ['Elizabeth', '5013692509'],
    ['Frank', '9016895245']
])

for (let name of phoneBookDEF.keys()) {
console.log(name)
}

phoneBookABC.set('Caroline', '5552526396')
console.log(phoneBookABC.get('Caroline'))

OUTPUT: Dewayne
Elizabeth
Frank
5552526396
=====================================
D]const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map ([
    ['Dewayne', '3476235218'],
    ['Elizabeth', '5013692509'],
    ['Frank', '9016895245']
])

phoneBookABC.set('Caroline', '5552526396')

function printPhoneBook(contacts){
      for (let [name, number] of contacts) {
        console.log(`${name}: ${number}`);
    }
}
printPhoneBook(phoneBookABC);

OUTPUT: Annabelle: 0412312343
Barry: 0433221117
Caroline: 5552526396
=====================================
E]const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map ([
    ['Dewayne', '3476235218'],
    ['Elizabeth', '5013692509'],
    ['Frank', '9016895245']
])

phoneBookABC.set('Caroline', '5552526396')

function printPhoneBook(contacts){
      for (let [name, number] of contacts) {
        console.log(`${name}: ${number}`);
    }
}
printPhoneBook(phoneBookABC);

const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
 console.log(phoneBook) 

OUTPUT: Annabelle: 0412312343
Barry: 0433221117
Caroline: 5552526396
Map(6) {
  'Annabelle' => '0412312343',
  'Barry' => '0433221117',
  'Caroline' => '5552526396',
  'Dewayne' => '3476235218',
  'Elizabeth' => '5013692509',
  'Frank' => '9016895245'
}
=====================================
F]const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map ([
    ['Dewayne', '3476235218'],
    ['Elizabeth', '5013692509'],
    ['Frank', '9016895245']
])

phoneBookABC.set('Caroline', '5552526396')

function printPhoneBook(contacts){
      for (let [name, number] of contacts) {
        console.log(`${name}: ${number}`);
    }
}

// printPhoneBook(phoneBookABC);
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
// console.log(phoneBook) 
printPhoneBook(phoneBook);

OUTPUT: Annabelle: 0412312343
Barry: 0433221117
Caroline: 5552526396
Dewayne: 3476235218
Elizabeth: 5013692509
Frank: 9016895245
=====================================
*/