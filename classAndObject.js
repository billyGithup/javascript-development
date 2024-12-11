// Traditional way of creating an object
// const myHouse = new Object();
// myHouse.foundation = "Concrete";
// myHouse["windowSize"] = 20;
// myHouse["doorColor"] = "white";
// myHouse.roofType = "Composite";

// A modern way of creating an object
// const myHouse = {};
// myHouse.foundation = "Concrete";
// myHouse["windowSize"] = 20;
// myHouse["doorColor"] = "white";
// myHouse.roofType = "Composite";
// console.log(myHouse);

const myHouse = {
  foundation: "Concrete",
  windowSize: 20,
  doorColor: "white",
  roofType: "Composite"
};
// console.log(myHouse);
// console.log(myHouse.windowSize);
// console.log(myHouse["doorColor"]);

myHouse.doorColor = "yellow";
myHouse["windowSize"] = 30;

// console.log(myHouse);

const str = "some strings";
const randomNum = Math.random();
const objVar = {};
const yourHouse = {};

yourHouse.type = "Some types";
yourHouse[str] = "This key name is a string.";
// yourHouse.str = "This key name is a string."; // This won't work for the variable
yourHouse[randomNum] = "This key name is a random number.";
yourHouse[objVar] = "This key name is an object.";
yourHouse[""] = "This key name is an empty string";

// console.log(yourHouse);
// console.log(yourHouse["some strings"]);
// console.log(yourHouse["0.33297880096390786"]);
// console.log(yourHouse[{}]);
// console.log(yourHouse[""]);

// Dynamically define an object properties
const happy = {
  [randomNum]: "This key name is a random number.",
  [str]: "some strings"
};

// console.log(happy);
// console.log(happy[str]);

// Loop an object
for (keyName in myHouse) {
  // console.log(
  //   `The key name is: ${keyName}, and the value is: ${myHouse[keyName]}`
  // );

  if (Object.hasOwn(myHouse, keyName)) {
    // console.log(myHouse[keyName]);
  }
}
// console.log(Object.hasOwn(myHouse, "aaaa"));

const volumeCalculator = {
  findCubeVolume: function (side) {
    return side * 3;
  },
  findCylinderVolume: (cylinderRadius, cylinderHeight) => {
    return 3.14 * cylinderRadius ** 2 * cylinderHeight;
  }
};
// console.log(volumeCalculator.findCubeVolume(10));
// console.log(volumeCalculator.findCylinderVolume(15, 40));

const animal = {
  type: "Mammal",
  sound: () => console.log("Rawrrrrr!"),
  skin: "Fur",
  gender: "male",
  arrayKey: [],
  objKey: {},
  // keyClassName: InstanceOfClass,
  intKey: 10
};
// animal.sound();
// console.log(animal.type);
// console.log(animal.skin);
// console.log(animal.gender);

// Class
class Person {
  #skinColor;
  #eyeColor;
  constructor(firstName, lastName, eyeColor, hairColor, skinColor, footSize) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#eyeColor = eyeColor;
    this.hairColor = hairColor;
    this.#skinColor = skinColor;
    this.footSize = footSize;
  }

  static staticPropertyOne =
    "This property only belongs to the class Person itself.";

  static staticMethodProperty() {
    return "This method property only belongs to the class Person itself.";
  }

  get skinColor() {
    return this.#skinColor;
  }

  get eyeColor() {
    return this.#eyeColor;
  }

  set skinColor(newColor) {
    this.#skinColor = newColor;
  }

  set eyeColor(newColor) {
    this.#eyeColor = newColor;
  }

  run() {
    console.log(this.firstName + " is running.");
  }

  speak(language) {
    console.log(this.firstName + " speaks " + language);
  }
}

const curtis = new Person("Curtis", "Axel", "blue", "blonde", "brown", 28);
const lily = new Person("Lily", "Smith", "blue", "blonde", "white", 18);

// console.log(curtis.firstName);
// console.log(lily.firstName);
// lily.run();
// lily.speak("Russian");
// curtis.speak("English");
// console.log(lily.skinColor);
// lily.skinColor = "purple";
// console.log(lily.skinColor);
// console.log(lily.staticPropertyOne);
// console.log(Person.staticPropertyOne);
// console.log(Person.staticMethodProperty());

// Inheritance
class City {
  constructor(population, size, economy, name) {
    this.population = population;
    this.size = size;
    this.economy = economy;
    this.name = name;
  }

  grow() {
    console.log("It is growing fast.");
  }
}

class KansasCity extends City {
  constructor(population, size, economy, name, cityFountains) {
    super(population, size, economy, name);
    this.cityFountains = cityFountains;
  }

  // Overriding method
  grow() {
    console.log(this.name + " is growing fast.");
  }
}

const KC = new KansasCity(100000, "Medium", "Fairly good", "Kansas City", 5000);
console.log(KC.cityFountains);
console.log(KC.economy);
KC.grow();
