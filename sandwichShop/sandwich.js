class Sandwich {
  #bun;
  #meat;
  #vegetables;
  #cheese;
  constructor(bun, meat, vegetables, cheese) {
    this.#bun = bun;
    this.#meat = meat;
    this.#vegetables = vegetables;
    this.#cheese = cheese;
  }

  get bun() {
    return this.#bun;
  }
  get meat() {
    return this.#meat;
  }
  get vegetables() {
    return this.#vegetables;
  }
  get cheese() {
    return this.#cheese;
  }

  showInfo() {
    const bun = this.#bun[0];
    const cheese = this.#cheese[0];
    const meat = this.#meat.slice(0, -5);
    let veggies = "";

    if (this.#vegetables.length == 2 && this.#vegetables[0] != "object") {
      veggies = this.#vegetables[0];
    } else {
      const arr = [];
      for (let index = 0; index < this.#vegetables.length; index++) {
        arr.push(this.#vegetables[index][0]);
      }
      veggies = arr.join(", ");
    }

    console.log(
      `\nYour sandwich:\nBun - ${bun}\nCheese - ${cheese}\nMeat - ${meat}\nVegetables - ${veggies}`
    );
  }
}

module.exports = Sandwich;
