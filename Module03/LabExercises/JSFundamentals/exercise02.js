/*2. Which of the below are not giving the right answer? 
Why are they not correct? How can we fix them? */

// let three = "3"
// let four = "4"
// let thirty = "30"

/* Notes: "3", "4", and "30" are all strings.
what is the value of the following expressions?*/

// let addition = three + four
/* My Answer: "3" + "4" = 34 number
Output: 34
Notes: there's a + (glue) sign so it juast adds one string to the end of the other.
*/
//console.log(three + four)


//let multiplication = three * four
/* My Answer: "3" * "4" = 12 string
Output: 12
Notes: No + (glue) sign - 
means it's regualr math that's done and converts the strings to numbers.
*/
//console.log(three * four)


// let division = three / four
/* My Answer: "3" / "4" = 0.75 string
Output: 0.75
Notes: No + (glue) sign - 
means it's regualr math that's done and converts the strings to numbers.
*/
// console.log(three / four)


// let subtraction = three - four
/* My Answer: "3" - "4" = -1 string
Output: -1
Notes: No + (glue) sign - 
means it's regualr math that's done and converts the strings to numbers.
*/
// console.log(three - four)


// let lessThan1 = three < four
/* My Answer: "3" < "4" = false
Output: true
Notes: 
when BOTH sides of < are strings, JS does NOT convert to numbers. 
It compares them like a dictionary — letter by letter.
lexicographic (alphabetical/dictionary) comparison.
3 comes before 4.
*/
// console.log(three < four)


// let lessThan2 = thirty < four
/* My Answer: undefined
Output: true
Notes: Numerically, 30 > 4.
Both sides are strings → dictionary comparison, character by character.
Compare first characters: "3" (from "30") vs "4".
"3" comes before "4" → the answer is decided right here → true.
JS never even looks at the 0 in "30". It found a difference at character 1 and stopped.
*/
// console.log(thirty < four)
