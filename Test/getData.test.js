const { getData } = require("./index.js");

describe("getData function", function () {
  // This test fails because of the asynchronous nature of the request.
  // it("should return an object containing name, age, and email", () => {
  //   const data = getData();
  //   expect(data).toEqual(
  //     JSON.stringify({
  //       name: "Jon Snow",
  //       age: 30,
  //       email: "jonsnow@gmail.com"
  //     })
  //   );
  // });

  it("should return an object containing name, age, and email", () => {
    return expect(getData()).resolves.toBe(
      JSON.stringify({
        name: "Jon Snow",
        age: 30,
        email: "jonsnow@gmail.com"
      })
    );
  });
});
