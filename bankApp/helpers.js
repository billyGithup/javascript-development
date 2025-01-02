const prompt = require("prompt-sync")({ sigint: true });

exports.checkYorN = (input) => "ynYN".includes(input) && input.length == 1;

exports.validateNewAcctInputs = (
  firstName,
  lastName,
  accountNumber,
  balance,
  allAccounts
) => {
  while (!(/^[A-Za-z]*$/.test(firstName) && firstName)) {
    firstName = prompt("Please enter only letters for the first name: ");
  }
  while (!(/^[A-Za-z]*$/.test(lastName) && lastName)) {
    lastName = prompt("Please enter only letters for the last name: ");
  }
  while (!(/^[0-9]*$/.test(balance) && balance)) {
    balance = prompt("Please enter a whole balance amount only: ");
  }
  while (!(/^[0-9]*$/.test(accountNumber) && accountNumber.length >= 5)) {
    accountNumber = prompt("Please enter at least five-digit account numbers: ");
  }
  
};
