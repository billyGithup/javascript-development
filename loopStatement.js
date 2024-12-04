// This is while loop.
// let counter = 0;
// while (counter < 10) {
//   console.log(counter);
//   counter++;
// }

// This is do-while loop
// let counter = 5;
// do {
//   console.log(counter);
//   counter++;
// } while (counter == 20);

// This is for loop
// for (let counter = 0; counter < 10; counter++) {
//   console.log(counter);
// }

// If statement with loop
// for (let num = 0; num <= 20; num++) {
//   if (num % 2 == 0) {
//     console.log(`${num} is even.`);
//   }

//   if (num % 2 != 0) {
//     console.log(`${num} is odd.`);
//   }
// }

// Loop with break and continue keywords
const exampleBreakContinue = () => {
  for (let index = 0; index < 10; index++) {
    if (index == 4) continue;
    if (index == 7) {
      console.log(index);
      break;
    }

    console.log("At the end of the for loop.");
  }

  console.log("At the end of the function body.");
};
exampleBreakContinue();
