const prompt = require("prompt-sync")({ sigint: true });
const chalk = require("chalk");
const fs = require("fs");

const acctNumExists = (acctNumber, acctRecords) => {
  // const foundAcct = acctRecords.find(
  //   (account) => account.accountNumber == acctNumber
  // );
  return acctRecords.find((account) => account.accountNumber == acctNumber)
    ? true
    : false;
};

const validateNames = (name, promptMsg) => {
  while (!(/^[A-Za-z]*$/.test(name) && name)) {
    name = prompt(promptMsg);
  }
  return name;
};

const validateAccountNum = (accountNumber) => {
  while (!(/^[0-9]*$/.test(accountNumber) && accountNumber.length >= 5)) {
    accountNumber = prompt(
      "Please enter at least five-digit account numbers: "
    );
  }
  return accountNumber;
};

const validateInputAmount = (amount) => {
  while (!(/^[0-9]*$/.test(amount) && amount)) {
    amount = prompt("Please enter only a whole amount: ");
  }
  return amount;
};

exports.checkYorN = (input) => "ynYN".includes(input) && input.length == 1;

exports.validateNewAcctInputs = (
  firstName,
  lastName,
  accountNumber,
  balance,
  allAccounts
) => {
  firstName = validateNames(
    firstName,
    "Please enter only letters for the first name: "
  );
  lastName = validateNames(
    lastName,
    "Please enter only letters for the last name: "
  );
  while (!(/^[0-9]*$/.test(balance) && balance)) {
    balance = prompt("Please enter a whole balance amount only: ");
  }
  accountNumber = validateAccountNum(accountNumber);
  while (acctNumExists(accountNumber, allAccounts)) {
    accountNumber = prompt(
      chalk.red("Account number already exists. Please enter a different one: ")
    );
    accountNumber = validateAccountNum(accountNumber);
  }

  return {
    firstName,
    lastName,
    balance,
    accountNumber,
    createdAt: new Date().toLocaleDateString()
  };
};

const saveToFile = (filePath, data, message) => {
  fs.writeFile(filePath, JSON.stringify(data), (error) => {
    if (error) throw error;
    console.log(chalk.green(message));
  });
};

exports.handleMenu = (menuNumber, account, accountRecords) => {
  switch (menuNumber) {
    case "1":
      console.log(
        chalk.green("\nYour current balance is $" + account.balance + ".\n")
      );
      break;
    case "2":
      let withdrawAmount = prompt("How much would you like to withdraw? ");
      withdrawAmount = validateInputAmount(withdrawAmount);

      if (parseInt(withdrawAmount) > parseInt(account.balance)) {
        console.log(
          chalk.red(
            `\nYou do not have enough in your account to withdraw $${withdrawAmount}.\n`
          )
        );
      } else {
        console.log(chalk.green("\nWithdraw: $" + withdrawAmount));
        account.balance = parseInt(account.balance) - parseInt(withdrawAmount);
        console.log(
          chalk.green("Your current balance is $" + (account.balance + ".\n"))
        );
      }
      break;
    case "3":
      let depositAmount = prompt("How much would you like to deposit? ");
      depositAmount = validateInputAmount(depositAmount);

      console.log(chalk.green("\nDeposit: $" + depositAmount));
      account.balance = parseInt(account.balance) + parseInt(depositAmount);
      console.log(
        chalk.green("Your current balance is $" + account.balance) + ".\n"
      );
      break;
    case "4":
      console.log(
        chalk.green(
          `\nName: ${account.firstName} ${account.lastName}\nAccount Number: ${account.accountNumber}\nBalance: $${account.balance}\nCreated: ${account.createdAt}\n`
        )
      );
      break;
    case "5":
      const newAcctRecords = accountRecords.filter(
        (eachAccount) => eachAccount.accountNumber != account.accountNumber
      );
      saveToFile(
        "./accountDatabase.txt",
        newAcctRecords,
        "\nAccount deleted successfully.\n"
      );
      return "exit";
    default:
      console.log(chalk.red("\nThat is not a valid menu number.\n"));
      break;
  }
};

exports.getAccount = (accountNum, accountRecords) => {
  return accountRecords.find((account) => account.accountNumber == accountNum);
};

exports.saveToFile = saveToFile;
