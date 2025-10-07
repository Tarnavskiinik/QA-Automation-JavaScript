const Book = require("./book.js");
const EBook = require("./ebook.js");

const book1 = new Book("Майстер і Маргарита", "Михайло Булгаков", 1967);
const book2 = new Book("Кобзар", "Тарас Шевченко", 1840);
const ebook1 = new EBook("JavaScript Essentials", "John Doe", 2021, "PDF");

book1.printInfo();
book2.printInfo();
ebook1.printInfo();

const booksArray = [book1, book2, ebook1];
const oldest = Book.oldestBook(booksArray);
console.log("Найдавніша книга:");
oldest.printInfo();

const ebook2 = EBook.fromBook(book1, "EPUB");
ebook2.printInfo();