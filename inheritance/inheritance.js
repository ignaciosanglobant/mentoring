function Shape() {
  this.name = "shape";

  this.toString = function () {
    return this.name;
  };
}

function TwoDimShape() {
  this.name = "2d shape";
}

function Square(sideLength) {
  this.name = "Square";
  this.side = sideLength;
  this.getArea = function () {
    return this.side ** 2;
  };
}

TwoDimShape.prototype = new Shape();
Square.prototype = new TwoDimShape();

module.exports = {
  Shape: Shape,
  TwoDimShape: TwoDimShape,
  Square: Square,
};
