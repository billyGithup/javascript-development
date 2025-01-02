const bun = require("./ingredients/buns.json");
const cheeseData = require("./ingredients/cheeses.js");
const veggies = require("./ingredients/vegetables.json");
const prompt = require("prompt-sync")({ sigint: true });
const fs = require("fs");

exports.checkYorN = (input) => "ynYN".includes(input) && input.length == 1;

// DRY (Don't Repeat Yourself) Concept
const showMenu = (menuData) => {
  let menuNumbers = "";
  console.log();

  for (let index = 0; index < menuData.length; index++) {
    const arr = [...menuData[index]];
    arr.splice(1, 0, " - $");
    menuNumbers += (index + 1).toString();
    console.log(`${index + 1}. ${arr.join("")}`);
  }
  console.log();

  return menuNumbers;
};

const promptUser = (promptMsgOne, menuNumbers) => {
  let choice = prompt(promptMsgOne);
  while (!(menuNumbers.includes(choice) && choice.length == 1)) {
    choice = prompt("Please enter only the numbers on the menu: ");
  }
  return choice;
};

exports.chooseYourBun = () => {
  const buns = Object.entries(bun);
  const menuNumbers = showMenu(buns);

  // for (let index = 0; index < buns.length; index++) {
  //   const arr = [...buns[index]];
  //   arr.splice(1, 0, " - $");
  //   console.log(`${index + 1}. ${arr.join("")}`);
  // }

  // Brute-force way (Don't do this!)
  // console.log(
  //   `\n1. ${buns[0][0]} - $${buns[0][1]}\n2. ${buns[1][0]} - $${buns[1][1]}`
  // );

  // console.log();
  // let bunChoice = prompt("Please choose your bun: ");
  // while (!("1234".includes(bunChoice) && bunChoice.length == 1)) {
  //   bunChoice = prompt("Please enter only the numbers on the menu: ");
  // }

  // DRY Concept
  const bunChoice = promptUser("Please choose your bun: ", menuNumbers);

  return buns[parseInt(bunChoice) - 1];
};

exports.chooseYourCheese = () => {
  const cheeses = Object.entries(cheeseData.cheeses);
  const menuNumbers = showMenu(cheeses);

  // for (let index = 0; index < cheeses.length; index++) {
  //   const arr = [...cheeses[index]];
  //   arr.splice(1, 0, " - $");
  //   console.log(`${index + 1}. ${arr.join("")}`);
  // }

  // console.log();
  // let cheeseChoice = prompt("Please choose your cheese: ");
  // while (!("1234".includes(cheeseChoice) && cheeseChoice.length == 1)) {
  //   cheeseChoice = prompt("Please enter only the numbers on the menu: ");
  // }

  // DRY Concept
  const cheeseChoice = promptUser("Please choose your cheese: ", menuNumbers);

  return cheeses[parseInt(cheeseChoice) - 1];
};

exports.chooseYourMeat = () => {
  try {
    let menuNumbers = "";
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
      menuNumbers += (index + 1).toString();
      console.log(meatMenu.join(""));
    }

    console.log();

    // let meatChoice = prompt("Please choose your meat: ");
    // while (!("1234".includes(meatChoice) && meatChoice.length == 1)) {
    //   meatChoice = prompt("Please enter only the numbers on the menu: ");
    // }

    const meatChoice = promptUser("Please choose your meat: ", menuNumbers);

    return meatData[parseInt(meatChoice) - 1];
  } catch (error) {
    console.log(error);
  }
};

exports.chooseYourVeggies = () => {
  const veggiesArr = Object.entries(veggies);
  let menuNumbers = "";

  for (let index = 0; index < veggiesArr.length + 1; index++) {
    menuNumbers += (index + 1).toString();
    if (index + 1 == veggiesArr.length + 1) {
      console.log(`${index + 1}. All`);
      break;
    }
    const arr = [...veggiesArr[index]];
    arr.splice(1, 0, " - $");
    console.log(`${index + 1}. ${arr.join("")}`);
  }

  console.log();

  // let veggieChoice = prompt("Please choose your vegetables: ");
  // while (!("12345".includes(veggieChoice) && veggieChoice.length == 1)) {
  //   veggieChoice = prompt("Please enter only the numbers on the menu: ");
  // }

  const veggieChoice = promptUser(
    "Please choose your vegetables: ",
    menuNumbers
  );

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
