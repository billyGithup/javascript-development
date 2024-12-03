// A simple IF statement.
// if (20 > 10) {
//   console.log("Condition is true.");
// }

const ifExample = (param) => {
  console.log("Before IF statement.");

  if (param === "John") {
    console.log(`The param value is ${param}`);
  }

  console.log("After IF statement.");
};
// ifExample("Smith");
// ifExample("John");
// ifExample("john");

// IF/ELSE statement
const elseExample = (param) => {
  if (param == "JavaScript") {
    console.log("The condition is true.");
  } else {
    console.log("The condition is false.");
  }

  console.log("More codes here.");
};
// elseExample("John");
// elseExample("JavaScript");

// ELSE/IF statements
const elseIfExample = (param) => {
  if (param == 5) {
    console.log("First check is true.");
  } else if (param > 5) {
    console.log("Second check is true.");
  } else if (param == 2) {
    console.log("Third check is true.");
  } else {
    console.log("No check is true.");
  }
};
// elseIfExample(3);
// elseIfExample(5);
// elseIfExample(2);

// Logical operators with IF statements
const logicalIfExample = (num1, num2) => {
  if (num1 == 10 && num2 > 10) {
    console.log("Both conditions are true.");
  } else {
    console.log("One of or both conditions are not true.");
  }

  if (num1 <= 9 || num2 > 20) {
    console.log("One of the conditions is true.");
  } else {
    console.log("Both conditions are false.");
  }
};
// logicalIfExample(10, 12);
// logicalIfExample(5, 25);

// Ternary operator
const ternaryExample = (num) => {
  // const result =
  //   num > 10
  //     ? `The value of num parameter/variable is greater than 10`
  //     : `The value of num parameter/variable is NOT greater than 10`;
  // return result;

  return num > 10
    ? `The value of num parameter/variable is greater than 10`
    : `The value of num parameter/variable is NOT greater than 10`;
};
// console.log(ternaryExample(5));
// console.log(ternaryExample(11));

// Switch statement
// switch ("Red") {
//   case "Red":
//     console.log("This is from the Red case.");
//     break;
//   case "Blue":
//     console.log("This is from the Blue case.");
//     break;
//   case "Yellow":
//     console.log("This is from the Yellow case.");
//     break;
//   default:
//     console.log("This is from the default case.");
//     break;
// }

// Cascading technique
switch ("YES") {
  case "Yes":
  case "yes":
  case "YES":
    console.log("Agree!");
    break;
  case "No":
  case "NO":
  case "no":
    console.log("Disagree!");
    break;
  default:
    console.log("This is from the default case.");
    break;
}
