function prototypes() {
  function foo() {}
  return foo;
}

function Gadget(name, color) {
  this.name = name;
  this.color = color;

  this.whatAreYou = function () {
    return `I am a ${this.name} of color ${this.color}`;
  };
}

Gadget.prototype = {
  price: 100,
};

Gadget.prototype.getInfo = function () {
  return `Rating: ${this.rating}, price: ${this["price"]}`;
};

Gadget.prototype.get = function (propName) {
  return this[propName];
};

Gadget.prototype.doubleProp = function (propName, secondPropName) {
  return this[propName][secondPropName];
};

Gadget.prototype.nombre = "Ignacio";
Gadget.prototype.apellidomaterno = "Leighton";

Gadget.prototype.rating = 3;

module.exports = {
  prototypes,
  Gadget,
};
