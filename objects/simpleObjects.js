function emptyObject() {
  return {};
}

function nachoBook() {
  var book = {
    authors: [
      {
        name: "John",
        lastname: "Doe",
      },
      {
        name: "Jane",
        lastname: "Doe",
      },
    ],
    name: "Memo - The awesome travel of Nacho",
    year: "2015",
    web: "http://www.thebook.com",
    fullname: function () {
      var authors = "by";
      book.authors.forEach(function (author) {
        authors += " " + author.name + " " + author.lastname + " and";
      });

      return (
        book.name + " " + authors.substring(0, authors.lastIndexOf(" and"))
      );
    },
  };
  return book;
}

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function instanceOf() {
  var book = new Book();
  return {
    isInstanceOfBook: book instanceof Book,
    isInstanceOfFunction: Book instanceof Function,
    isInstanceOfObject: Book instanceof Object,
  };
}

module.exports = {
  emptyObject: emptyObject,
  nachoBook: nachoBook,
  Book: Book,
  instanceOf: instanceOf,
};
