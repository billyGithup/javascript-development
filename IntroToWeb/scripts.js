// const elementTexts = document.getElementById("first").innerText;
document.getElementById("first").innerText =
  "This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph.";

const pElement = document.getElementById("first");
pElement.style.color = "red";
pElement.style.fontSize = "25px";

const elements = document.getElementsByClassName("cool-class");
console.log(elements);

const elementsTwo = document.querySelectorAll(".cool-class");
console.log(elementsTwo);

elementsTwo.forEach((element) => {
  element.style.color = "orange";
});

const pEl = document.querySelectorAll("p");
console.log(pEl);
