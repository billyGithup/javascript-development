const prompt = require("prompt-sync")({ sigint: true });
const {
  checkYorN,
  chooseYourBun,
  chooseYourCheese,
  chooseYourMeat,
  chooseYourVeggies,
  getTotalCost
} = require("./helpers.js");
const Sandwich = require("./sandwich.js");

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
  const bun = chooseYourBun();
  const cheese = chooseYourCheese();
  const meat = chooseYourMeat();
  const vegetables = chooseYourVeggies();
  const orderedSandwich = new Sandwich(bun, meat, vegetables, cheese);

  console.log("Your sandwich is being made. Please wait...");

  setTimeout(() => {
    console.log("Your sandwich is ready!");
    orderedSandwich.showInfo();
    console.log(`\nTotal cost: $${getTotalCost(orderedSandwich)}`);
  }, 6000);
}
