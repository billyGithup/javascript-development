// Task 10
const checkLeapYear = (year) => {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(`Year ${year} is a leap year.`);
  } else {
    console.log(`Year ${year} is NOT a leap year.`);
  }
};
// checkLeapYear(2045);

// Task 11
const findDaysInMonth = (month, year) => {
  const isLeapYear = (year) =>
    (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

  if (month < 1 || month > 12) {
    console.log("The month is invalid.");
    return;
  }

  if (month == 2) {
    if (isLeapYear(year)) {
      console.log(
        `The month has 29 days with the year ${year} which is a leap year.`
      );
    } else {
      console.log(`The month has 28 days.`);
    }
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    console.log("The month has 30 days.");
  } else {
    console.log("The month has 31 days.");
  }
};
// findDaysInMonth(2, 2013);
// findDaysInMonth(6, 2013);
// findDaysInMonth(10, 2013);
findDaysInMonth(100, 2013);
