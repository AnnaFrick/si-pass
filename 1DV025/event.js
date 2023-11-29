// Hur lägger man till en enventlistener till en knapp? Vilka svar är korrekta?

// 1. Fråga 1 
const button = document.getElementById("myButton")
button.onclick = function() {
console.log('Knappen klickades')
}
// 2. Fråga 2
const button = document.getElementById("myButton")
button.addEventListener('click', (event) => {
console.log('Knappen klickades')
})
// 3. Fråga 3
const button = document.getElementById("myButton")
button.addEventListener('click', buttonClicked)

function buttonClicked(event){
console.log('Knappen klickades')
}
