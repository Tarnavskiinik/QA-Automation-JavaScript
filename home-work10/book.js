class Book {
  constructor(title, author, year) {
    this.title = title;  
    this.author = author;
    this.year = year;
  }

  get title() { return this._title; }
  set title(value) {
    if (!value || value.length < 2) throw new Error("Назва має містити хоча б 2 символи");
    this._title = value;
  }

  get author() { return this._author; }
  set author(value) {
    if (!value || value.length < 3) throw new Error("Автор має містити хоча б 3 символи");
    this._author = value;
  }

  get year() { return this._year; }
  set year(value) {
    if (isNaN(value) || value < 1000 || value > new Date().getFullYear()) {
      throw new Error("Рік вказаний некоректно");
    }
    this._year = value;
  }

  printInfo() {
    console.log(`Книга: "${this.title}", Автор: ${this.author}, Рік: ${this.year}`);
  }

  static oldestBook(books) {
    return books.reduce((oldest, current) => 
      current.year < oldest.year ? current : oldest
    );
  }
}

module.exports = Book;