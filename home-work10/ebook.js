const Book = require("./book.js");

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() { return this._fileFormat; }
  set fileFormat(value) {
    const allowed = ["PDF", "EPUB", "MOBI", "FB2", "TXT"];
    if (!allowed.includes(value.toUpperCase())) {
      throw new Error(`Формат файлу має бути одним з: ${allowed.join(", ")}`);
    }
    this._fileFormat = value.toUpperCase();
  }

  printInfo() {
    console.log(`Електронна книга: "${this.title}", Автор: ${this.author}, Рік: ${this.year}, Формат: ${this.fileFormat}`);
  }

  static fromBook(book, fileFormat) {
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}

module.exports = EBook;