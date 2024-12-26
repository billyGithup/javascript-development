const prompt = require("prompt-sync")({ sigint: true });

const EIGHT_CHAR_LONG = 8;
const SIXTEEN_CHAR_LONG = 16;
const specialChars = "(~!@#$%^&*()_+-|{}[]\\''\"\":;?/<>.,)";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const numbersLetters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
const mixed =
  "(~!@#$%^&*()_+-|{}[]\\''\"\":;?/<>.,)ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
const lengthSelectionMenu = `\nPlease select length:\n1) 8 characters\n2) 16 characters\n3) Enter length\n4) Exit\n`;
const charTypeSelectionMenu = `\nPlease select character type:\n1) Letters only\n2) Numbers only\n3) Numbers and letters only\n4) Special characters only\n5) Mixed\n6) Exit`;
let customLength = "";

console.log(lengthSelectionMenu);
let lengthChoice = prompt("Please enter only a number in the menu: ");
while (!("1234".includes(lengthChoice) && lengthChoice.length == 1)) {
  lengthChoice = prompt("Please enter only a number in the menu: ");
}

if (lengthChoice == "4") return;

if (lengthChoice == "3") {
  customLength = prompt("Please enter desirable length: ");
  while (!/^[0-9]*$/.test(customLength)) {
    customLength = prompt("Please enter only number: ");
  }
}
