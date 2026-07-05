/* 4. Rewrite this if using the ternary/conditional operator '?'. 
Test it with different values for a and b. What does the ‘+=’ do?*/

/*  [01.]
let a = 2, b = 3;
let result = `${a} + ${b} is `;

if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
}

console.log(a + b < 10 ? 'less than 10' : 'greater than 10')

[02.]
let a = 5, b = 5;
let result = `${a} + ${b} is `;

if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
}

console.log(a + b < 10 ? 'less than 10' : 'greater than 10')

[03.]
let a = 20, b = 10;
let result = `${a} + ${b} is `;

if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
}

console.log(a + b < 10 ? 'less than 10' : 'greater than 10')
*/

/* 
[01.] answer: 'less than 10'
[02.] answer: 'greater than 10'
[03.] answer: greater than 10

-- Notes: 
I struggled here because I kept confusing different rules. 
I kept thinking that when we got to line 7 that a + b < 10 where strings.
It should be a regular mathematical equation. so 2 + 3 < 10 [which would be 5<10]

2 + 3 = 5 → both are numbers (no quotes), so + does math. 
5 < 10 → both numbers, so numeric comparison → true. 
true → the if branch runs → appends 'less than 10'. 

+= means add to itself and store back.
Whether that turns into appending or math depends on the exact same string-vs-number rule.
The real definition: is that it's actually shorthand. [x += y is shorthand for x = x + y]

Type - coercion - context decides:

+ (plus) — the tricky one
String involved → glue (concatenate)
No string → math · evaluates left to right

− * / % — math operators
Always math — never glue
Strings get converted to numbers

< > — comparison
Both strings → dictionary (char by char)
Any number → normal numeric compare

*/