import { Player1 } from './player1.js'
import { Deck } from './deck.js'
import { Dish } from './dish.js'
import { Async } from './async.js'

const async = new Async()

console.log(async.fetchFirstquestion())

const dish = new Dish()

dish.setDishInfo('Pizza', 'Tomato, cheese, ham', 100)
console.log(dish.getDishInfo())

const deck = new Deck()
deck.setCarInfo('Volvo', 'V70', 2008)
console.log(deck.getCarInfo())


try {
const player = new Player1('Kalle', 20)
console.log(player)
} catch (error) {
    console.log(error.message)
}
