const { emptyObject, nachoBook, Book, instanceOf } = require("./simpleObjects");

describe("An empty object", function () {
  var object = emptyObject(); // {}
  it("Has a constructor", function () {
    expect(object.constructor).toBe(Object);
  });
  it("Has a toString method", function () {
    expect(object.toString).toBeDefined();
  });
  it("Is an empty object", function () {
    expect(object).toEqual({});
  });
});

describe("Nacho book", function () {
  var book = nachoBook();
  it("Has a constructor", function () {
    expect(book.constructor).toBe(Object);
  });
  it("The book has a name", function () {
    expect(book.name).toEqual("Memo - The awesome travel of Nacho");
  });
  it("Has authors", function () {
    expect(book.authors.constructor).toBe(Array);
  });
  it("Each author has name and last name", function () {
    expect(book.authors.length >= 1).toBeTruthy();
    book.authors.forEach((author) => {
      expect(author.constructor).toBe(Object);
      expect(author.name).toBeDefined();
      expect(author.lastname).toBeDefined();
    });
  });
  it("Has a fullName method", function () {
    const FULL_NAME =
      "Memo - The awesome travel of Nacho by John Doe and Jane Doe";
    expect(book.fullname).toBeDefined();
    expect(book.fullname()).toBe(FULL_NAME);
  });
});

describe("A constructor function", function () {
  var book1 = new Book("An interesting book", "Felipe Pincheira");
  var book2 = new Book("A boring book", "Ignacio Sanhueza");
  it("Has a constructor", function () {
    expect(book1.constructor).toEqual(Book);
    expect(book2.constructor).toEqual(Book);
  });
});

describe("instanceOf", () => {
  it("isInstanceOfBook", () => {
    const { isInstanceOfBook, isInstanceOfFunction, isInstanceOfObject } =
      instanceOf();

    expect(isInstanceOfBook).toBeTruthy();
    expect(isInstanceOfFunction).toBeTruthy();
    expect(isInstanceOfObject).toBeTruthy();
  });
});
