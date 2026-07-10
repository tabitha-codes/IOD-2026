/* 5. Rewrite the following function using: 
a) function expression syntax, and 
b) arrow function syntax. 
Test each version to make sure they work the same. */

// function getGreeting(name) {
// return 'Hello ' + name + '!';
// }


const getGreeting = (name) =>{
  return 'Hello ' + name + '!';  
}
console.log(getGreeting("Tabitha"));

getGreeting("Tabitha")





/* 
MY ANSWER FOR A):
const getGreeting = function(name){
  return 'Hello ' + name + '!';  
}
console.log(getGreeting("Tabitha"));

getGreeting("Tabitha")

Output: Hello Tabitha!

======================
MY ANSWER FOR b):
const getGreeting = (name) =>{
  return 'Hello ' + name + '!';  
}
console.log(getGreeting("Tabitha"));

getGreeting("Tabitha")

Output: Hello Tabitha!

======================
Notes: Below I'm just showing my work.

WRONG ANSWERS FOR A)
function getGreeting(name) => {'Hello ' + name + '!'};
console.log();
}

getGreeting()

======================
WRONG ANSWERS FOR A)
const getGreeting = function(){
  return 'Hello ' + name + '!';  
  console.log(getGreeting("Tabitha"));
}

getGreeting("Tabitha")

======================
WRONG ANSWERS FOR A)
const getGreeting = function(name){
  return 'Hello ' + name + '!';  
  console.log(getGreeting("Tabitha"));
}

getGreeting("Tabitha")

======================
WRONG ANSWERS FOR B) Lol - none.
*/