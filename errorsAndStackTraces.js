let variableA;
// const variableB = "";

// variableA();

console.log("Hello");

function calNum(numOne, numTwo) {
  return numOne + numTwo;
}

// console.log(calNum(30, 30));

if (calNum(1, 1) == 2) {
  console.log("The result from the calNum() function is 2.");
}

const func = "func";
// func = () => console.log("asf;gaklfkgha");

const funcThree = () => console.log("I am funcThree!");
const funcTwo = () => funcThree();
const funcOne = () => funcTwo();
funcOne();
