// 5. Decimal number operations in JavaScript can lead to unexpected results, as in the
// following:
// let twentyCents = 0.20
// let tenCents = 0.10
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004
// We can sometimes avoid this using the toFixed function to force the number of decimal
// places as below, but it’s not always useful:
// let fixedTwenty = twentyCents.toFixed(2);
// let fixedTen = tenCents.toFixed(2);
// console.log(fixedTwenty + fixedTen) //why is this not working?
// a) Explain why the above code returns the wrong answer
// b) Create a function currencyAddition(float1, float2) which safely adds the two
// decimal numbers float1 and float2 and returns the correct float result.
// c) Create a function currencyOperation(float1, float2, operation) which
// safely performs the given operation (either +, -, / or *) on the two numbers and returns

// the correct float result. https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Statements/switch may be useful.

// d) (Extension) Extend the above function to include a fourth argument numDecimals
// which allows the operation to support different amounts of decimal places from 1 to 10.
// HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
// different values as well as the below:
// console.log(0.3 == currencyAddition(0.1, 0.2)) // true
// console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true


/* MY ANSWERS:
A]
let twentyCents = 0.20
let tenCents = 0.10
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);

console.log(fixedTwenty + fixedTen) // not working
console.log(typeof (0.20).toFixed(2))

toFixed(2) Is returning the wrong answer because it's a string. 
It's returning a string not a number. 
When you add a + on two strings concatenates instead of adding the numbers together.

OUTPUT:
0.200.10
string
=====================================
B]let twentyCents = 0.20
let tenCents = 0.10
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);

function currencyAddition(float1, float2){
    const cents1 = Math.round(float1 * 100);
    const cents2 = Math.round(float2 * 100);
    return (cents1 + cents2) / 100;
}

console.log(fixedTwenty + fixedTen)
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
console.log(0.3 == currencyAddition(0.1, 0.2)) // true

OUTPUT:0.200.10
0.2 + 0.1 = 0.30000000000000004
true
=====================================
C]
let twentyCents = 0.20
let tenCents = 0.10
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);

function currencyOperation(float1, float2, operation){
    const cents1 = Math.round(float1 * 100);
    const cents2 = Math.round(float2 * 100);
     switch (operation) {
        case '+':
        return (cents1 + cents2) / 100;
        case '-':
        return (cents1 - cents2) / 100;
        case '*':
        return (cents1 * cents2) / 10000;
        case '/':
        return (cents1 / cents2);
}}

console.log(fixedTwenty + fixedTen)
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
console.log(0.3 == currencyOperation(0.1, 0.2, '+')) 
console.log(currencyOperation(0.1, 0.2, '+'))   
console.log(currencyOperation(0.3, 0.1, '-'))   
console.log(currencyOperation(0.2, 3,   '*'))  
console.log(currencyOperation(1,   4,   '/'))   

OUTPUT: 0.200.10
0.2 + 0.1 = 0.30000000000000004
true
0.3
0.2
0.6
0.25
=====================================
D]
let twentyCents = 0.20
let tenCents = 0.10
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);

function currencyOperation(float1, float2, operation, numDecimals){
    const cents1 = Math.round(float1 * 100);
    const cents2 = Math.round(float2 * 100);
    const validDecimals = Math.min(Math.max(numDecimals, 1), 10);
    let result;
     switch (operation) {
        case '+':
        result = (cents1 + cents2) / 100;
        break;
        case '-':
        result = (cents1 - cents2) / 100;
        break;
        case '*':
        result = (cents1 * cents2) / 10000;
        break;
        case '/':
        result = (cents1 / cents2);
        break;
     }
        return Number(result.toFixed(validDecimals));
}

console.log(fixedTwenty + fixedTen)
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
console.log(0.3 == currencyOperation(0.1, 0.2, '+'))
console.log(currencyOperation(0.1, 0.2, '+'))
console.log(currencyOperation(0.3, 0.1, '-'))
console.log(currencyOperation(0.2, 3,   '*'))
console.log(currencyOperation(1,   4,   '/'))
console.log(currencyOperation(0.1, 0.2, '+'))
console.log(currencyOperation(1, 3, '/', 4))

OUTPUT: 0.200.10
0.2 + 0.1 = 0.30000000000000004
false
0
0
1
0
0
0.3333
=====================================
*/
