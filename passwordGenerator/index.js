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
const charTypeSelectionMenu = `\nPlease select character type:\n1) Letters only\n2) Numbers only\n3) Numbers and letters only\n4) Special characters only\n5) Mixed\n6) Exit\n`;
let customLength = "";
let excludedChars = "";

const checkCharType = (charChoice) => {
  switch (charChoice) {
    case "1":
      return letters;
    case "2":
      return numbers;
    case "3":
      return numbersLetters;
    case "4":
      return specialChars;
    case "5":
      return mixed;
  }
};
const generatePassword = (length, passwordType) => {
  let password = "";

  for (let index = 0; index < length; index++) {
    password += passwordType.charAt(
      Math.floor(Math.random() * passwordType.length)
    );
  }

  if (excludedChars) {
    const passTypeWithExclusions = passwordType.replace(
      new RegExp(`[${excludedChars}]`, "g"),
      ""
    );

    return password.replace(
      new RegExp(`[${excludedChars}]`, "g"),
      passTypeWithExclusions.charAt(
        Math.floor(Math.random() * passTypeWithExclusions.length)
      )
    );
  }

  return password;
};

console.log(lengthSelectionMenu);
let lengthChoice = prompt("Please enter only a number in the menu: ");
while (!("1234".includes(lengthChoice) && lengthChoice.length == 1)) {
  lengthChoice = prompt("Please enter only a number in the menu: ");
}

if (lengthChoice == "4") return;

if (lengthChoice == "3") {
  customLength = prompt("Please enter desirable length: ");
  while (!/^[0-9]*$/.test(customLength) || customLength == "") {
    customLength = prompt("Please enter only number: ");
  }
}

console.log(charTypeSelectionMenu);
let characterChoice = prompt("Please enter only a number in the menu: ");
while (!("123456".includes(characterChoice) && characterChoice.length == 1)) {
  characterChoice = prompt("Please enter only a number in the menu: ");
}

if (characterChoice == "6") return;

excludedChars = prompt("Exclude any characters? If no, just press enter: ");

switch (lengthChoice) {
  case "1":
    console.log(
      "\n" + generatePassword(EIGHT_CHAR_LONG, checkCharType(characterChoice))
    );
    break;
  case "2":
    console.log(
      "\n" + generatePassword(SIXTEEN_CHAR_LONG, checkCharType(characterChoice))
    );
    break;
  case "3":
    console.log(
      "\n" + generatePassword(customLength, checkCharType(characterChoice))
    );
    break;
}
