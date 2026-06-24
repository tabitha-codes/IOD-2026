let books = [
    'Atomic Habits', 
    'The Game of Life and How To Play It', 
    "Don't Leave Anything for Later",
    'The Four Agreements',
    'The 7 Habits of Highly Effective People',
    'The Psychology of Money',
];

console.log(books[0]); // Atomic Habits
console.log(books[3]); // undefined
console.log(books[2]); // Don't Leave Anything for Later
console.log(books[1]); // The Game of Life and How To Play It
console.log(books[4]); // The 7 Habits of Highly Effective People
console.log(books[5]); // The Psychology of Money

books[1] ='Start With Why';
books[4] = 'Make Your Bed';

console.log(books); 
// ['Atomic Habits',
//   'Start With Why',
//   "Don't Leave Anything for Later",
//   'The Four Agreements',
//   'Make Your Bed',
//   'The Psychology of Money'
// ]

books.unshift('The Subtle Art of Not Giving A F*ck');
console.log(books)
// [
//   'The Subtle Art of Not Giving A F*ck',
//   'Atomic Habits',
//   'Start With Why',
//   "Don't Leave Anything for Later",
//   'The Four Agreements',
//   'Make Your Bed',
//   'The Psychology of Money'
// ]

books.pop();
console.log(books)
// [
//   'The Subtle Art of Not Giving A F*ck',
//   'Atomic Habits',
//   'Start With Why',
//   "Don't Leave Anything for Later",
//   'The Four Agreements',
//   'Make Your Bed'
// ]

