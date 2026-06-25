const book = {
    title: 'Atomic Habits',
    description: 'Atomic Habits by James Clear argues that small, consistent changes (atomic habits) compound over time to create significant results, emphasizing systems over goals and identity-based change. The book introduces the "Four Laws of Behavior Change" (make it obvious, attractive, easy, and satisfying) to build good habits and their inverse to break bad ones, all while focusing on becoming the type of person who performs those habits. ',
    pages: 250,
    author: 'James Clear',
    publisher: 'Penguin Random House',
}

console.log(book.title); // Atomic Habits
console.log(book.description); 
// Atomic Habits by James Clear argues that small, consistent changes (atomic habits) compound over time to create signif
// icant results, emphasizing systems over goals and identity-based change. The book introduces the "Four Laws of Behavio
// r Change" (make it obvious, attractive, easy, and satisfying) to build good habits and their inverse to break bad ones
// , all while focusing on becoming the type of person who performs those habits.
console.log(book.pages); // 250
console.log(book.author); // James Clear

book.description = 'One of my favorite books',

console.log(book.description) // One of my favorite books

//Extension: 
console.log(book.publisher) // Penguin Random House