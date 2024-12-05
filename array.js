// Create an array.
const arrayOne = ["a", "b", "c", "d"];
// console.log(arrayOne);
const arrayTwo = new Array("You", "Me", "He", "She", "It");
// console.log(arrayTwo);
const arrayThree = [
  "a",
  1,
  true,
  1.99,
  ["apple", "orange", "grape", ["Ethan", "Curtis"]]
];
// console.log(arrayThree);

// Access and update array items.
const arrayItemContainer = arrayTwo[4];
// console.log(arrayItemContainer);
// console.log(arrayTwo[-1]); // It does not work negative index numbers.
arrayThree[2] = false;
// arrayThree[4][3][0] = "banana";
// console.log(arrayThree);
// console.log(arrayThree[4][2]);
// console.log(arrayThree[4][3][0]);

// Loop through an array.
// for (index = 0; index < arrayOne.length; index++) {
//   console.log(arrayOne[index]);
// }

// for (index = 0; index < arrayThree.length; index++) {
//   console.log(arrayThree[index]);
// }

// Loop through an array on index 4 of the arrayThree.
// for (index = 0; index < arrayThree[4].length; index++) {
//   console.log(arrayThree[4][index]);
// }

// Loop through an array on index 3 of the array on index 4 of the arrayThree.
// for (index = 0; index < arrayThree[4][3].length; index++) {
//   console.log(arrayThree[4][3][index]);
// }

// Loop an array with for...of style.
// for (item of arrayTwo) {
//   console.log(item);
// }

// forEach instance method
// arrayTwo.forEach(function processItem(itemFromForEachMethod) {
//   console.log(itemFromForEachMethod);
// });

// Inline anonymous arrow function for the forEach instance method.
// arrayTwo.forEach((itemFromForEachMethod) => {
//   console.log(itemFromForEachMethod);
// });

// Array instance methods
// const container = arrayTwo.join("");
// const container = arrayTwo.join(", ");
// const container = arrayTwo.slice(0, 3);
// const container = arrayTwo.slice(0, 6);
// const container = arrayTwo.slice(5);
// const container = arrayTwo.pop();
// const container = arrayTwo.reverse();
const container = arrayTwo.shift();
// console.log(container);
// console.log(arrayTwo);

// Shallow copy of an array
const arrayOneCopy = arrayOne;
console.log("This is arrayOne copy: " + arrayOneCopy);
console.log("This is the original arrayOne: " + arrayOne);

arrayOneCopy[0] = "z";
console.log("This is arrayOne copy after update: " + arrayOneCopy);
console.log("This is the original arrayOne: " + arrayOne);
