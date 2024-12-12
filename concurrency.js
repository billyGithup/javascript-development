// Using setTimeout to mimic an asynchronous process.
// setTimeout(() => {
//   console.log("Asynchronous process is going on!");
// }, 5000);

// console.log("Another code execution.");

const score = (grade) => {
  switch (grade) {
    case "A":
      console.log(`You got an ${grade}, awesome!`);
      break;
    case "B":
      console.log(`You got a ${grade}, nice!`);
      break;
    case "C":
      console.log(`You got a ${grade}, good!`);
      break;
    case "D":
      console.log(`You got a ${grade}. Do better!`);
      break;
    default:
      console.log(`You got a ${grade}. You need to study!`);
      break;
  }
};

const getGrade = (value, callback) => {
  let gradeValue;
  switch (true) {
    case value >= 90:
      gradeValue = "A";
      break;
    case value >= 80:
      gradeValue = "B";
      break;
    case value >= 70:
      gradeValue = "C";
      break;
    case value >= 60:
      gradeValue = "D";
      break;
    default:
      gradeValue = "F";
      break;
  }

  callback(gradeValue);
};

// getGrade(85, score);

// Async/Await example
const requestData = (request) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (request == "fulfilled") resolve("The request was successful.");
      if (request == "failed") reject("The request was NOT successful.");
    }, 5000);
  });
};

const handlePromise = async (reqType) => {
  try {
    console.log("Sent a request...");
    const result = await requestData(reqType);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// handlePromise("fulfilled");
// handlePromise("failed");

async function getData() {
  try {
    const response = await fetch(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();
