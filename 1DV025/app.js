import { Player1 } from './player1.js'
try {
const player = new Player1('Kalle', 20)
console.log(player)
} catch (error) {
    console.log(error.message)
}
