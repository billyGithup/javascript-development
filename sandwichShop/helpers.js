const bun = require("./ingredients/buns.json");
const cheeseData = require("./ingredients/cheeses.js");
const veggies = require("./ingredients/vegetables.json");
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
    const meatData = fs
      .readFileSync("sandwichShop\\ingredients\\meats.txt", "utf8", {
        encoding: "utf8"
      })
      .split("\r\n")
      .slice(0, -1);

    for (let index = 0; index < meatData.length; index++) {
      const meatMenu = [
        `${index + 1}. `,
        meatData[index].slice(0, -5),
        " - $",
        meatData[index].slice(-4, meatData[index].length)
      ];

      console.log(meatMenu.join(""));
    }

    console.log();

    let meatChoice = prompt("Please choose your meat: ");
    while (!("1234".includes(meatChoice) && meatChoice.length == 1)) {
      meatChoice = prompt("Please enter only the numbers on the menu: ");
    }

    return meatData[parseInt(meatChoice) - 1];
  } catch (error) {
    console.log(error);
  }
};

exports.chooseYourVeggies = () => {
  const veggiesArr = Object.entries(veggies);

  for (let index = 0; index < veggiesArr.length + 1; index++) {
    if (index + 1 == veggiesArr.length + 1) {
      console.log(`${index + 1}. All`);
      break;
    }
    const arr = [...veggiesArr[index]];
    arr.splice(1, 0, " - $");
    console.log(`${index + 1}. ${arr.join("")}`);
  }

  console.log();

  let veggieChoice = prompt("Please choose your vegetables: ");
  while (!("12345".includes(veggieChoice) && veggieChoice.length == 1)) {
    veggieChoice = prompt("Please enter only the numbers on the menu: ");
  }

  if (veggieChoice == "5") {
    return veggiesArr;
  } else return veggiesArr[parseInt(veggieChoice) - 1];
};

exports.getTotalCost = (sandwich) => {
  let veggieTotalCost = 0;

  if (sandwich.vegetables.length == 2 && sandwich.vegetables[0] != "object") {
    veggieTotalCost += sandwich.vegetables[1];
  } else {
    for (let index = 0; index < sandwich.vegetables.length; index++) {
      veggieTotalCost += sandwich.vegetables[index][1];
    }
  }

  return (
    sandwich.bun.pop() +
    sandwich.cheese.pop() +
    parseFloat(sandwich.meat.slice(-4)) +
    veggieTotalCost
  ).toFixed(2);
};
