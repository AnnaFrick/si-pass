export class Deck {
  #make
  #model
  #year

  constructor(make, model, year) {
    this.#make = make
    this.#model = model
    this.#year = year
  }

  getCarInfo() {    
    return `${this.#year} ${this.#make} ${this.#model}`
  }

  setCarInfo (make, model, year) {
    this.#make = make
    this.#model = model
    this.#year = year
  }
}