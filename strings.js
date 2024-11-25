// Declare a string using double quotes.
let pet = "Dog";
let petAction = "My dog likes to look at me.";

// Declare a string using single quotes.
let city = "Kansas City";
let state = "Missouri";

/* Using bracket notation on a variable of string
will output 1 character, or undefined. */
// console.log(pet[-2]); // Bracket notation does not work with negative index numbers.
// console.log(petAction[26]);
// console.log(petAction[30]);

// A long sentence using the + operator.
const longSentence =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fuga delectus in incidunt" +
  "hic impedit sit officiis non distinctio," +
  "neque natus ipsam explicabo reprehenderit quosquo repudiandae mollitia amet tenetur!";
// console.log(longSentence);

// This concatenation uses the backslash character.
const longSentence2 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fuga delectus in incidunt \
  hic impedit sit officiis non distinctio, \
  neque natus ipsam explicabo reprehenderit quosquo repudiandae mollitia amet tenetur!";
// console.log(longSentence2);

const variable1 = "Hello, ";
const variable2 = "World";

const combine1 = variable1 + variable2;
// console.log(combine1);

const combine2 = variable2 + 20;
// console.log(combine2);

const combine3 = variable1 + variable2 + "!";
// console.log(combine3);

const number1 = 10;
const number2 = 20;

// This is string interpolation with plus operator.
// console.log("Number " + number1 + " plus " + 'number ' + number2 + " = " + (number1 + number2));

// This is string interpolation with backtick placeholder.
// console.log(`Number ${number1} plus number ${number2} = ${number1 + number2}`);

// Escape sequences
// const sentence = 'My dog\'s is Sally!';
// const sentence = "My dog's is Sally!";
// const sentence = "My dog's is \nSally!";
const sentence = "My dog's is \tSally!";
// console.log(sentence);
// console.log(sentence.charAt(1));
// console.log(sentence.at(5));
// console.log(sentence.at(-5));

const sampleString = "something1";
const sampleString2 = "something2";
// console.log(sampleString.concat("This is ", "aaaaa", "bbbbbb"));

// console.log('This is string.'.concat(' Example!')); // Invoking an instance method from a string literal.

// console.log(sampleString2.includes("2"));

// const sliceSample = sampleString.slice(2, -5);
// console.log(sliceSample);

// const splitSampleString = "asdasda@asdgasdga@adgasgas@agas";
// console.log(splitSampleString.split("@"));

// Task 1
const task1String = " This statement has empty spaces ";
console.log(task1String.includes("This"));
console.log(task1String.at(-3));

const someVariableNames = task1String.trim();
console.log(someVariableNames);

console.log(task1String.toLowerCase());

// Task 2
console.log(
  "Jack and Jill went up the hill to fetch a pail of water. \nJack fell down and broke his crown and Jill came tumbling after."
);

// Task 3
const firstName = "John";
const lastName = "Smith";

console.log(firstName + " " + lastName);
console.log(`${firstName} ${lastName}`);
console.log(firstName.concat(" ", lastName));

// Task 4
const numberTwo = 2;
console.log(`The number is ${numberTwo * 100}.`);
