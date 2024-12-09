// Create a Map collection using the new keyword.
const mapOne = new Map();
mapOne.set("Kansas City", "Missouri");
mapOne.set("Doge City", "Kansas");
mapOne.set("Houston City", "Texas");
// console.log(mapOne);

// Create a Map collection using an Array syntax.
const mapTwo = new Map([
  ["fruitOne", "Grape"],
  ["fruitTwo", "Orange"]
]);
// console.log(mapTwo);
// console.log(mapTwo.size);
// mapTwo.clear();
// console.log(mapTwo);

const getDays = () => {
  const week = new Map();
  week.set(1, "Sunday");
  week.set(2, "Monday");
  week.set(3, "Tuesday");
  week.set(4, "Wednesday");
  week.set(5, "Thursday");
  week.set(6, "Friday");
  week.set(7, "Saturday");

  return week;
};

const weekSize = getDays().size;
// console.log(weekSize);
// const days = getDays();
// const removedItem = days.delete(1);

// console.log(getDays().delete(1));
// console.log(getDays());

// console.log(days);
// console.log(removedItem);

const accessMapItems = () => {
  const itemOne = mapOne.get("Kansas City");
  const itemTwo = mapOne.get("unknownKeyName");
  // console.log(itemOne);
  // console.log(itemTwo);
  console.log(mapOne.has("Doge City"));
  console.log(mapOne.has("unknownKeyName"));
};
// accessMapItems();

// Loop a Map collection
// for (item of getDays()) {
//   console.log(item);
//   console.log(item[0]);
//   console.log(item[1]);
// }

// getDays().forEach((value, key) => console.log(value + " and " + key)); // This line is equivalent to the lines 61 and 62 together.

// const arrowFuncForForeach = (value, key) => console.log(value + " and " + key);
// getDays().forEach(arrowFuncForForeach);

// console.log(mapTwo.entries());
console.log(getDays().entries());

for (value of getDays().entries()) {
  console.log(value);
}
