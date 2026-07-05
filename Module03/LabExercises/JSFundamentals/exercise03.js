// 3. Which of the following console.log messages will print? Why?
//  if (0) console.log('#1 zero is true')

/*My Answer: no - nothing declared.
Output: didn't print
*/

//  if ("0") console.log('#2 zero is true')

    /*My Answer: no - nothing declared.
Output: #2 zero is true
*/

//  if (null) console.log('null is true')

/*My Answer: yes, - nothing declared.
Output: didn't print
*/

// if (-1) console.log('negative is true')

/*My Answer: no - nothing declared.
Output: negative is true
*/

// if (1) console.log('positive is true')

/*My Answer: no - nothing declared.
Output: positive is true
*/

/* NOTES:
concept being tested is truthy vs. falsy.
if() does not require a true or false. 
It takes whatever you put inside and coerces it to a boolean.
So it had nothing to do with being declared, just understanding truthy an falsy.

The falsy values are:
false
0 (the number zero)
"" (empty string — nothing between the quotes)
null
undefined
NaN

Anything not on that list is truthy.
*/