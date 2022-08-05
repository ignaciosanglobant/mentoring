const { Shape, TwoDimShape, Square } = require("./inheritance");

describe("Inheritance", function () {
  test("Prototype chain", function () {
    const square = new Square(5);
    expect(square instanceof Square).toBeTruthy();
    expect(square instanceof TwoDimShape).toBeTruthy();
    expect(square instanceof Shape).toBeTruthy();
    square.name = "Not Square";
  });
});
