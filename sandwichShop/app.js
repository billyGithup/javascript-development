const prompt = require("prompt-sync")({ sigint: true });
const {
  checkYorN,
  chooseYourBun,
  chooseYourCheese,
  chooseYourMeat
} = require("./helpers.js");

const shopTitle =
  "===========================================" +
  "\n||\t\t\t\t\t ||\n||\t       BOB SANDWICH\t\t ||" +
  "\n||\t\t\t\t\t ||\n" +
  "===========================================";

console.log(shopTitle);
console.log("Welcome to Bob Sandwich Shop!\n");

let userInput = prompt(
  "Would you like to make an order? Press Y for Yes or N for No: "
);
while (!checkYorN(userInput)) {
  userInput = prompt("Please enter letter Y or letter N only: ");
}
console.log();

if (userInput.toLowerCase() == "n") {
  console.log("Thank you for coming, bye!");
} else {
  // const bun = chooseYourBun();
  // const cheese = chooseYourCheese();
  const meat = chooseYourMeat();
}
