/* 9. Use the following variables to understand how JavaScript stores objects by reference.

) Create a new moreSports variable equal to teamSports and add some new sport
values to it (using push and unshift)

b) Create a new dog2 variable equal to dog1 and give it a new value

c) Create a new cat2 variable equal to cat1 and change its name property

d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
changed? Why?

e) Change the way the moreSports and cat2 variables are created to ensure the
originals remain independent
*/

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };
 // console.log(teamSports, dog1, cat1);

/* My Answers:

A] let moreSports = teamSports;
teamSports.push("Soccer");
moreSports.unshift("Football");
console.log(teamSports);
Output: [ 'Football', 'Hockey', 'Cricket', 'Volleyball', 'Soccer' ]
============================
B] let dog2 = dog1;
dog2 = 'Bear';
console.log(dog1); // Bingo
console.log(dog2); // Bear
Output: Bingo -  Bear
============================
C] let cat2 = cat1;
cat2.name = 'Gary';
console.log(cat1); // name: 'Fluffy'
console.log(cat2); // name: 'Gary'
Output: 'Fluffy' ,  'Gary'
============================
D] Yes, they have. 
dog1 = 'Bingo' is a string
teamSports = ['Hockey', ...] is an array
cat1 = { name: 'Fluffy' } is an object
============================
E]
Output:
*/