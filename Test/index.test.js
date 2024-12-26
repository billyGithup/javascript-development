// Below is called Object Destructure.
const { name, height, message, isEven } = require("./index.js");

describe("Test variables", () => {
  it("should return Joe", () => {
    expect(name).toEqual("Joe");
  });

  test("height should be less than 7", () => {
    expect(height).toBeLessThan(8);
    expect(height).toBeGreaterThan(6);
  });

  it("should include the name and height", () => {
    expect(message).toContain(name);
    expect(message).toContain(height.toString());
  });
});

describe("isEven function", () => {
  it("should return true if a number is even", () => {
    expect(isEven(2)).toBe(true);
  });

  it("should return false if a number is odd", () => {
    expect(isEven(3)).toBe(false);
  });

  it("should throw an error if number is negative", () => {
    expect(() => isEven(-1)).toThrow();
  });

  it("should throw an error if number is not a number", () => {
    expect(() => isEven('1')).toThrow();
  });
});
