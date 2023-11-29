//import 'node-fetch'
export class Async {


 async fetchFirstquestion () {
    const response = await fetch('https://courselab.lnu.se/quiz/question/1')
    const data = await response.json()
    console.log(data.question)


 }

 

}