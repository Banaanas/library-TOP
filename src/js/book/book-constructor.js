// The objective was to use both constructor and function factory in the same
// Project. That's why there is a Book Function Factory and a Book Constructor.

// Book constructor - Class Keyword
class BookClass {
  constructor(id, title, author, date, numberOfPages, bookCover, readStatus) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.date = date;
    this.numberOfPages = numberOfPages;
    this.bookCover = bookCover;
    this.readStatus = readStatus;
  }
}

export default BookClass;
