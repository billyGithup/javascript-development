// Traditional way of creating an object
// const myHouse = new Object();
// myHouse.foundation = "Concrete";
// myHouse["windowSize"] = 20;
// myHouse["doorColor"] = "white";
// myHouse.roofType = "Composite";

// A modern way of creating an object
// const myHouse = {};
// myHouse.foundation = "Concrete";
// myHouse["windowSize"] = 20;
// myHouse["doorColor"] = "white";
// myHouse.roofType = "Composite";
// console.log(myHouse);

const myHouse = {
  foundation: "Concrete",
  windowSize: 20,
  doorColor: "white",
  roofType: "Composite"
};
// console.log(myHouse);
// console.log(myHouse.windowSize);
// console.log(myHouse["doorColor"]);

myHouse.doorColor = "yellow";
myHouse["windowSize"] = 30;

// console.log(myHouse);

const str = "some strings";
const randomNum = Math.random();
const objVar = {};
const yourHouse = {};

yourHouse.type = "Some types";
yourHouse[str] = "This key name is a string.";
// yourHouse.str = "This key name is a string."; // This won't work for the variable
yourHouse[randomNum] = "This key name is a random number.";
yourHouse[objVar] = "This key name is an object.";
yourHouse[""] = "This key name is an empty string";

// console.log(yourHouse);
// console.log(yourHouse["some strings"]);
// console.log(yourHouse["0.33297880096390786"]);
// console.log(yourHouse[{}]);
// console.log(yourHouse[""]);

// Dynamically define an object properties
const happy = {
  [randomNum]: "This key name is a random number.",
  [str]: "some strings"
};

// console.log(happy);
// console.log(happy[str]);

// Loop an object
for (keyName in myHouse) {
  console.log(
    `The key name is: ${keyName}, and the value is: ${myHouse[keyName]}`
  );
}
