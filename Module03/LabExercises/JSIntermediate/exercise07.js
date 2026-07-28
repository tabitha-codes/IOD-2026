/* 7. Use the following array of book objects to practice the array functions for map, find and
filter. Test each of your answers to the below tasks.
const books = [
{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];
a) Write a function getBookTitle(bookId) that uses the find function to return the
title of the book object with the matching id.
b) Write a function getOldBooks() that uses the filter function to return all book
objects written before 1950.
c) Write a function addGenre() that uses the map function to add a new genre property
to all of the above books, with the value ‘classic’.
d) (Extension) Write a function getTitles(authorInitial) that uses map and
filter together to return an array of book titles for books written by authors whose
names start with authorInitial.
e) (Extension) Write a function latestBook() that uses find and forEach to get the
book with the most recent publication date.*/

const books = [
{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];


/*
MY ANSWERS:

A] const books = [
{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

function getBookTitle(bookId){
    const foundBook = books.find(book => book.id === bookId);
    return foundBook.title;
}
console.log(getBookTitle(1));
console.log(getBookTitle(3));

OUTPUT: The Great Gatsby
1984
=====================================
B]const books = [
{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

function getOldBooks(){
    return books.filter(book => book.year < 1950);
  };

console.log(getOldBooks());

OUTPUT:
[{id: 1,title: 'The Great Gatsby',author: 'F. Scott Fitzgerald',year: 1925},
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{id: 4,title: 'Brave New World',author: 'Aldous Huxley',year: 1932}]
=====================================
C]const books = [
{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

function addGenre(){
  return books.map(book => ({ ...book, genre: 'classic' }))
  };

console.log(addGenre());

OUTPUT:
[{id: 1,title: 'The Great Gatsby',author: 'F. Scott Fitzgerald',year: 1925,genre: 'classic'},
{id: 2,title: 'To Kill a Mockingbird',author: 'Harper Lee',year: 1960,genre: 'classic'},
{id: 3,title: '1984',author: 'George Orwell',year: 1949,genre: 'classic'},
{id: 4,title: 'Brave New World',author: 'Aldous Huxley',year: 1932,genre: 'classic'},
{id: 5,title: 'The Catcher in the Rye',author: 'J.D. Salinger',year: 1951,genre: 'classic'}]
=====================================
D]
const books = [
{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

function getTitles(authorInitial) {
    return books
        .filter(book => book.author.startsWith(authorInitial))
        .map(book => book.title);
}

console.log(getTitles('G'));
console.log(getTitles('H'));

OUTPUT:[ '1984' ]
[ 'To Kill a Mockingbird' ]
=====================================
E]const books = [
{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

function latestBook() {
    let latest = books[0];                 
    books.forEach(book => {                
        if (book.year > latest.year) {     
            latest = book;                 
        }
    });
    return latest;                         
}

console.log(latestBook());


OUTPUT: {id: 2,title: 'To Kill a Mockingbird',author: 'Harper Lee',year: 1960}
=====================================
*/