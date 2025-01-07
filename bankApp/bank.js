const prompt = require("prompt-sync")({ sigint: true });
const chalk = require("chalk");
const fs = require("fs");
const {
  checkYorN,
  validateNewAcctInputs,
  handleMenu,
  getAccount,
  saveToFile
} = require("./helpers.js");

const bankTitle =
  "===========================================" +
  "\n||\t\t\t\t\t ||\n||\t         ABC BANK\t\t ||" +
  "\n||\t\t\t\t\t ||\n" +
  "===========================================";
const menu = `What would you like to do?\n1) Show balance\n2) Withdraw\n3) Deposit\n4) Show account information\n5) Delete account\n6) Exit\n`;
let allAccounts = [];

if (fs.existsSync("./accountDatabase.txt")) {
  allAccounts = JSON.parse(fs.readFileSync("./accountDatabase.txt", "utf8"));
}

console.log(bankTitle);
console.log(chalk.bold("\nWelcome to ABC BANK!"));

let userInput = prompt(
  "Do you have an account with us? Enter y for Yes or n for No: "
);
while (!checkYorN(userInput)) {
  userInput = prompt("Please enter letter Y or letter N only: ");
}

if (userInput.toLowerCase() == "n") {
  let userInputTwo = prompt(
    "Would you like to have an account with us? Enter y for Yes or n for No: "
  );
  while (!checkYorN(userInputTwo)) {
    userInputTwo = prompt("Please enter letter Y or letter N only: ");
  }

  if (userInputTwo.toLowerCase() == "n")
    console.log(chalk.green("\nThank you for visiting us. Have a nice day!"));

  if (userInputTwo.toLowerCase() == "y") {
    const firstName = prompt("Please enter a first name: ");
    const lastName = prompt("Please enter a last name: ");
    const accountNumber = prompt("Please create an account number: ");
    const balance = prompt("Please enter a balance amount: ");

    const newlyCreatedAccount = validateNewAcctInputs(
      firstName,
      lastName,
      accountNumber,
      balance,
      allAccounts
    );

    allAccounts.push(newlyCreatedAccount);
    console.log(chalk.green("\nYour account has been created successfully!\n"));
    console.log(menu);
    let menuInput = prompt("Menu number: ");

    if (menuInput == "6") {
      saveToFile(
        "./accountDatabase.txt",
        allAccounts,
        "\nThank you for visiting us. Have a nice day!"
      );
    }

    while (menuInput !== "6") {
      const result = handleMenu(menuInput, newlyCreatedAccount, allAccounts);
      if (result == "exit") break;
      console.log(menu);
      menuInput = prompt("Menu number: ");
      if (menuInput == "6") {
        saveToFile(
          "./accountDatabase.txt",
          allAccounts,
          "\nThank you for visiting us. Have a nice day!"
        );
      }
    }
  }
} else {
  let userAccountNum = prompt("Please enter your account number: ");
  while (!(/^[0-9]*$/.test(userAccountNum) && userAccountNum.length >= 5)) {
    userAccountNum = prompt(
      "Please enter only five digit numbers or more for the account number: "
    );
  }

  const userAccount = getAccount(userAccountNum, allAccounts);
  const originalAccount = { ...userAccount };

  if (!userAccount) {
    console.log(chalk.red("\nSorry! The account does not exist!"));
  } else {
    console.log(chalk.green(`\nHello, ${userAccount.firstName}!\n`));
    console.log(menu);
    let menuInput = prompt("Menu number: ");
    while (menuInput !== "6") {
      const result = handleMenu(menuInput, userAccount, allAccounts);
      if (result == "exit") break;
      console.log(menu);
      menuInput = prompt("Menu number: ");

      if (menuInput == "6") {
        if (JSON.stringify(originalAccount) !== JSON.stringify(userAccount)) {
          const accountIndex = allAccounts.findIndex(
            (eachAccount) =>
              eachAccount.accountNumber == originalAccount.accountNumber
          );
          allAccounts[accountIndex] = userAccount;
          saveToFile(
            "./accountDatabase.txt",
            allAccounts,
            "\nThank you for visiting us. Have a nice day!"
          );
        } else {
          console.log(
            chalk.green("\nThank you for visiting us. Have a nice day!")
          );
        }
      }
    }
  }
}
