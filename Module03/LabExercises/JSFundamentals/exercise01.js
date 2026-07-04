// 1. What are the results of these expressions? (answer first, then use console.log() to check)
// "" + 1 + 0
// My Answer: 10
// Output: 10
// Notes: "" is a string.
// console.log("" + 1 + 0)

// "" - 1 + 0
// My Answer: 1
// Output: -1
// console.log("" - 1 + 0)

// true + false
// My Answer: Boolean
// Output: 1
// Notes: True = 1 and False = 0 so 1 + 0 = 1
//  console.log(true + false)

/* !true */
// My Answer: false
// Output: false
// Notes: ! = not 
// console.log(!true)

// 6 / "3"
// My Answer: 63
// Output: 2
/* Notes: "3" is a string. 
+ is the only operator that glues strings. 
- Every other math operator (-, *, /) does pure math.
- JS sees /. Division has no string-gluing behavior — it only does math.
- So it coerces "3" into the number 3.
- 6 / 3 = 2 (a number).*/
// console.log(6 / "3")

//  "2" * "3"
// My Answer: 6
// Output: 6
// Notes: "2" is a string and so is "3" but there is no +
// console.log( "2" * "3")

// 4 + 5 + "px"
// My Answer: 9px
// Output: 4+5 are numbers and a regular mathematical equation. 
// "px" is a string and + glues the numbers and strings together.
// console.log(4 + 5 + "px")

// "$" + 4 + 5
// My Answer: $9
// Output: $45
// Notes: "$" is a string. + glues the numbers and strings together.
// "$" + 4 = "$4" + (glue again) 5 becomes "5"
//  the result is "$45"
// I messed up becuyase I didn't start from left to right.
//console.log("$" + 4 + 5)

// "4" - 2
// My Answer: 2
// Output: 2
// Notes: no + so it's regular math.
// console.log("4" - 2)

//"4px" - 2
// My Answer: 2px
// Output: NaN
// Notes: JS can only convert a string to a number if the entire string is a valid number.
// "3" → converts cleanly to 3. 
//"4px" → cannot convert. The px letters aren't numeric. 
//console.log("4px" - 2)

//" -9 " + 5
// My Answer: -4
// Output: -9 5
// Notes: I was moving too fasr and didn't pay attention.
// " -9" has a space and the sppace stays.
// + (the glue) attaches the string and number making it -9 5
//console.log(" -9 " + 5)

// " -9 " - 5
// My Answer: -14
// Output: -14
// - does math, so it converts " -9 " to a number.
// - JS trims the spaces → "-9" → converts to -9 (a valid number).
// - -9 - 5 = -14.
//  -14 (a number).
//  console.log(" -9 " - 5)

// null + 1
// My Answer: 2
// Output: 1
// Notes: null converts to 0
// + with no string present → math mode. Both sides get converted to numbers.
// null → 0. The 1 is already a number.
// 0 + 1 = 1.
// 1 (a number)
// console.log( null + 1)

// undefined + 1
// My Answer: NaN
// Output: NaN
// Notes: undefined doesn't convert to a usable number at all. It converts to NaN.
// console.log(undefined + 1)

// undefined == null
// My Answer: true
// Output: true
// console.log(undefined == null)

// undefined === null
// My Answer: false
// Output:
// console.log(undefined === null)

//" \t \n" - 2
// My Answer: No idea. 
// Output: -2
// Notes: " \t \n " isn't just spaces. Those are escape sequences:
// \t = a tab character
// \n = a newline (line break) character
//  space, tab, space, newline, space. 
//  It looks like it has "stuff" in it — but every single one of those characters is whitespace. 
//  There are no digits, no letters. 
//  It's a string made entirely of blank space. 
// empty or all-whitespace string to a number, JS gives you 0, not NaN.
// - does math → convert " \t \n " to a number.
// JS trims all the whitespace (spaces, tab, newline all count) → what's left is "" (empty).
// Empty string → 0.
// 0 - 2 = -2.
// -2 (a number).
// console.log(" \t \n" - 2)
