export class Dish {
  #name
  #ingidients
  #price

  constructor(name, ingidients, price) {
    this.#name = name
    this.#ingidients = ingidients
    this.#price = price
  }

  getDishInfo() {
   return `${this.#name} ${this.#ingidients} ${this.#price}`
  }

  setDishInfo (name, ingidients, price) {
    this.#name = name
    this.#ingidients = ingidients
    this.#price = price
  }

}