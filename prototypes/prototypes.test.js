const { prototypes, Gadget } = require("./prototypes");

describe("prototypes", () => {
  it("Every function has a prototype property, and that prototype is an object", () => {
    const proto = prototypes();
    expect(typeof proto.prototype).toEqual("object");
    expect(proto.prototype).toEqual({});
  });

  it("02 - Adding and using properties to the prototype object", () => {
    const gadget = new Gadget("webcam", "black");
    expect(gadget.name).toEqual("webcam");
    expect(gadget.color).toEqual("black");
    expect(gadget.price).toEqual(100);
    expect(gadget.rating).toEqual(3);
    expect(gadget.getInfo()).toEqual("Rating: 3, price: 100");
    expect(gadget.get("color")).toEqual("black");
    expect(gadget.doubleProp("nombre", "apellidomaterno"));
  });
});
