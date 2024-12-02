// Addition and Subtraction
const exampleAddSubtract = (num1, num2) => {
  const add = num1 + num2;
  const subtract = num2 - num1;

  console.log(`Addition: ${add}, Subtraction: ${subtract}`);
};
// exampleAddSubtract(10, 50);

// Multiply and Divide
const exampleMultiplyDivide = (num1, num2) => {
  const mul = num1 * num2;
  const div = num2 / num1;

  console.log(`Multiplication: ${mul}, Division: ${div}`);
};
// exampleMultiplyDivide(10, 50);
// exampleMultiplyDivide(-10, 50);

// Modulus
const exampleModulus = () => {
  const answer1 = 10 % 4;
  const answer2 = 12 % 3;

  console.log(`answer1 is: ${answer1}, answer2 is: ${answer2}`);
};
// exampleModulus();

// Exponentiation
const exampleExponent = (power) => {
  const answer = 3 ** power;
  console.log(answer);
};
// exampleExponent(10);
// exampleExponent(2);

// PEMDAS Order
const pemdasfunc = () => (30 / (4 + 8)) * 5 + 10 ** 4 + 7 - 9;
// console.log(pemdasfunc());

// (30 / (4 + 8)) * 5 + 10 ** 4 + 7 - 9;
// (30 / 12) * 5 + 10 ** 4 + 7 - 9;
// 2.5 * 5 + 10 ** 4 + 7 - 9;
// 2.5 * 5 + 10000 + 7 - 9;
// 12.5 + 10000 + 7 - 9;
// 10012.5 + 7 - 9;
// 10019.5 - 9
// 10010.5

// Assignment Operators
const doAssignmentOperators = () => {
  let numAdd1 = 5;
  let numAdd2 = 10;
  // numAdd1 += numAdd2;
  // numAdd1 = numAdd1 + numAdd2

  // numAdd1 -= numAdd2;
  // numAdd1 = numAdd1 - numAdd2;

  // numAdd1 *= numAdd2;
  // numAdd1 = numAdd1 * numAdd2;

  // numAdd1 /= numAdd2;
  // numAdd1 = numAdd1 / numAdd2;

  // numAdd1 %= numAdd2;
  // numAdd1 = numAdd1 % numAdd2;

  numAdd2 **= numAdd1;
  numAdd2 = numAdd2 ** numAdd1;

  // console.log(`The numAdd1 now is: ${numAdd1}.`);
  console.log(`The numAdd1 now is: ${numAdd2}.`);
};
// doAssignmentOperators();

// Comparison Operators
const compareExample = (param1, param2) => {
  const equal = param1 == param2;
  const equalTwo = param1 === param2;
  const notEqual = param1 != param2;
  const notEqualTwo = param1 !== param2;

  console.log(
    `equal is: ${equal}\nequalTwo is: ${equalTwo}\nnotEqual is: ${notEqual}\nnotEqualTwo is: ${notEqualTwo}`
  );
};
// compareExample(1, 2);
// compareExample("1", 2);

// Logical Operators
const evaluationOne = 10 < 11 && 5 > 1; // True
const evaluationTwo = "aaa" === "aaa" || 5 > 1; // True
const evaluationThree = !("aaa" === "bbb" || 5 > 1); // False

// console.log(evaluationOne);
// console.log(evaluationTwo);
// console.log(evaluationThree);

// Increment and Decrement
// let numValue = 10;
// let numValueTwo = numValue++; // This is the Post-increment operation.
// console.log(`numValue is: ${numValue}\nnumValueTwo is: ${numValueTwo}`);

let numValue = 10;
let numValueTwo = ++numValue; // This is the Pre-increment operation.
console.log(`numValue is: ${numValue}\nnumValueTwo is: ${numValueTwo}`);
