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
console.log(sentence.charAt(1));
