function Book(name, author, year) {

  this.name = name;
  this.author = author;
  this.year = year;
  this.reader = null; // Книга свободна, если reader равен null


// Доступна ли книга
Book.prototype.isAvailable = function() {
  return this.reader === null;
};

// выдача книги
Book.prototype.takeBook = function(readerName) {
  if (this.isAvailable()) {
      this.reader = readerName;
      return true;
  }
  return false;
};

// возврат книги
Book.prototype.returnBook = function() {
  if (!this.isAvailable()) {
      this.reader = null;
      return true;
  }
  return false;
};

// изменения названия книги
Book.prototype.changeBookName = function(newBookName) {
  if (typeof newBookName === 'string') {

    if (this.name === newBookName) {
      return false
    }
      this.name = newBookName;
      return true;
  }
  return false;
};

// изменения имени автора
Book.prototype.changeAuthorName = function(newAuthorName) {
  if (typeof newAuthorName === 'string') {

    if (this.author === newAuthorName) {
    return false
    }
      this.author = newAuthorName;
      return true;
  }
  return false;
};

//получения текущего читателя
Book.prototype.getCurrentReader = function() {
  return this.reader;
};
  // Пишите код здесь
}

export { Book };
//   npm run test:current -- library.test.js
