// Notes Ref: https://www.w3schools.com/JS/js_random.asp
// function rollDice (sides) {
//   Math.floor(Math.random() * sides + 1);  
//     return(sides)
// }

// console.log()

// Dice Function
function rollDice (sides) {
    let result = Math.floor(Math.random() * sides + 1);
    return result;
}

console.log(rollDice(6))
console.log(rollDice(10))
console.log(rollDice(20))