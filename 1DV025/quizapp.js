
/**
 * The my-hello web component module.
 *
 * @author Nelly Olofsson <no222hh@student.lnu.se>
 * @version 1.1.0
 */


// Define template.
const template = document.createElement('template')
template.innerHTML = `
  <style>
    
  </style>
  <div class="bulletin-board">
    <form>
   <input type="text" id="username" name="username" placeholder="Enter your name">
   <button>Save</button>
</form>
<p>Highscore: </p>
<ol id="highscore">

</ol>
  </div>
`

customElements.define('my-hello',
  class extends HTMLElement {
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      // Bind the method to the current instance so that 'this' refers to the instance inside saveName.
      this.saveName = this.saveName.bind(this);

      // Find the button element and add a click event listener to it.
     const button = this.shadowRoot.querySelector('button')
     
     button.addEventListener('click', (event) =>  {
   event.preventDefault()
        this.saveName()
     } )
    }

    saveName() {
      // Get the input value
      const usernameInput = this.shadowRoot.querySelector('#username')
      const username = usernameInput.value
      const time = new Date().toLocaleTimeString() 
      const array = []
      const highscores = {
        username, time}
     

      // Save the username to session storage
      sessionStorage.setItem('highscore', JSON.stringify(highscores))
       array.push(highscores)
       array.sort((a, b) => a.time - b.time)
      // Retrieve and log the stored username
      const storedUsername = JSON.parse(sessionStorage.getItem('highscore'))
      console.log('Stored Username:', storedUsername)
      const highscore = this.shadowRoot.querySelector('#highscore')
      console.log(highscore)
      // detta funkar
      // gå igenom arrayen och skapa li element för varje item i arrayen
      // obs listan begränsas inte till 5, det får ni klura ut själva
      for (const item of array) {
        const li = document.createElement('li')
        li.textContent = item.username + ' ' + item.time
        highscore.appendChild(li)
        
      }

    }
  }
)
