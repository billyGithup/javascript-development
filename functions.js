function printTexts() {
  console.log("Hello, world!");
}

// printTexts();

function returnedFunction() {
  return "Hello, JavaScript!";
}

// const result = returnedFunction();
// console.log(result);

// console.log(returnedFunction());

function printInput(message) {
  console.log(message);
}

// printInput("Hello, there!");
// printInput(100);
// printInput("100");
// printInput(returnedFunction());

// Function expressions
const functionContainer = function () {
  console.log("I come from a function expression.");
};
// functionContainer();

const functionContainer2 = function (length, width) {
  console.log(length * width);
};
// functionContainer2(20, 10);

// Arrow functions
// const arrowFunction = () => {
//   console.log("I come from an arrow function.");
// };
const arrowFunction = () => console.log("I come from an arrow function.");
// arrowFunction();

// const returnArrowFunction = () => {
//   return 10 + 10;
// };
const returnArrowFunction = () => 10 + 10;
// console.log(returnArrowFunction());

// Global and local variables
// Nested functions
const globalVar = "abc"; // This variable is a global one meaning that it can be seen throughout your whole program or application.
function parentFunc(param1) {
  const total = 100;
  console.log(globalVar);
  console.log(result);

  // This is an inner function
  function childFunc() {
    const result = total + param1; // result is a local variable to the childFunc function.
    console.log(result);
    console.log(globalVar);
  }

  childFunc();
}
parentFunc(200);

function initializer() {
  const name = "Chrome browser";
  function displayName() {
    console.log(name);
  }
  displayName();
}
// initializer();

// Closure
function outerfunction(param) {
  const innerVariable = 4;
  function innerFunction() {
    return param + innerVariable;
  }
  return innerFunction;
}

// const functionHolder = outerfunction(6);
// console.log(functionHolder());

// console.log(outerfunction(6)());

// A closure function has access to the variables in its parent even after the parent function has been called or finished.
function makeCounter() {
  let count = 0;
  return function () {
    return (count = count + 1);
  };
}
// const counter = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());

const addFive = (function () {
  let total = 0;
  return function () {
    total = total + 5;
    return total;
  };
})();

// addFive();
// addFive();
// console.log(addFive());

// Default parameters
// Only define default parameters at the end of your function parameter list.
const subtractNumber = (numOne, numTwo = 10) => {
  return numOne - numTwo;
};
// console.log(subtractNumber(10, 20));
// console.log(subtractNumber(10));

const addNumber = (numOne, numTwo = 10, numThree = 30) => {
  return numOne + numTwo + numThree;
};
// console.log(addNumber(10, 20, 30));
// console.log(addNumber(10, 20));
// console.log(addNumber(5));

// Rest parameters
// A rest parameter can hold as many arguments as you want it to.
const groupSamples = (...param) => {
  console.log(param);
};
// groupSamples("a", "b", "c", "d"); // Same data type arguments
// groupSamples("a", 2, 2.99, true); // Different data type arguments
