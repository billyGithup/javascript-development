// Task 1
const taskOne = (paramOne, paramTwo) => {
  if (paramOne == paramTwo) {
    console.log("The two parameters are the same!");
  } else {
    console.log("The two parameters are NOT the same!");
  }
};
// taskOne(1, 1);
// taskOne(1, "1");
// taskOne("a", "1");

// Task 2
const evaluateGrade = (grade) => {
  switch (grade) {
    case "E":
    case "e":
      console.log("Excellent!");
      break;
    case "V":
    case "v":
      console.log("Very good!");
      break;
    case "G":
    case "g":
      console.log("Good!");
      break;
    case "A":
    case "a":
      console.log("Average!");
      break;
    case "F":
    case "f":
      console.log("Fail!");
      break;
    default:
      console.log("Not a valid grade");
      break;
  }
};
// evaluateGrade("e");
// evaluateGrade("y");

// Task 3
const isEvenOrOdd = (num) => {
  if (num % 2 == 0) {
    console.log("Number is even.");
  } else {
    console.log("Number is odd.");
  }
};
// isEvenOrOdd(5);

// Task 4
const isValidNumber = (num) => {
  if (typeof num === "number") {
    console.log(`${num} value is a number.`);
  } else {
    console.log(`${num} value is NOT a number.`);
  }
};
// isValidNumber(11);
// isValidNumber(11.99);
isValidNumber("11");
