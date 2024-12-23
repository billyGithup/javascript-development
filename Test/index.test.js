// Below is called Object Destructure.
const { name, height, message, isEven } = require("./index.js");

describe("Test variables", () => {
  it("should return Joe", () => {
    expect(name).toEqual("Joe");
  });
});
