const bun = require("./ingredients/buns.json");
const cheeseData = require("./ingredients/cheeses.js");
const prompt = require("prompt-sync")({ sigint: true });
const fs = require("fs");

exports.checkYorN = (input) => "ynYN".includes(input) && input.length == 1;

exports.chooseYourBun = () => {
  const buns = Object.entries(bun);

  for (let index = 0; index < buns.length; index++) {
    const arr = [...buns[index]];
    arr.splice(1, 0, " - $");
    console.log(`${index + 1}. ${arr.join("")}`);
  }

  // Brute-force way (Don't do this!)
  // console.log(
  //   `\n1. ${buns[0][0]} - $${buns[0][1]}\n2. ${buns[1][0]} - $${buns[1][1]}`
  // );

  console.log();
  let bunChoice = prompt("Please choose your bun: ");
  while (!("1234".includes(bunChoice) && bunChoice.length == 1)) {
    bunChoice = prompt("Please enter only the numbers on the menu: ");
  }

  return buns[parseInt(bunChoice) - 1];
};

exports.chooseYourCheese = () => {
  const cheeses = Object.entries(cheeseData.cheeses);

  for (let index = 0; index < cheeses.length; index++) {
    const arr = [...cheeses[index]];
    arr.splice(1, 0, " - $");
    console.log(`${index + 1}. ${arr.join("")}`);
  }

  console.log();
  let cheeseChoice = prompt("Please choose your cheese: ");
  while (!("1234".includes(cheeseChoice) && cheeseChoice.length == 1)) {
    cheeseChoice = prompt("Please enter only the numbers on the menu: ");
  }

  return cheeses[parseInt(cheeseChoice) - 1];
};

exports.chooseYourMeat = () => {
  try {
    const meatData = fs.readFileSync(
      "sandwichShop\\ingredients\\meats.txt",
      "utf8",
      { encoding: "utf8" }
    );

    console.log(meatData);
  } catch (error) {
    console.log(error);
  }
};

"Chicken 1.99\n
Beef 2.99\n
Turkey 3.99\n
Lamb 4.99"
