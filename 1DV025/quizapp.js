
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
<li></li>

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
      const highscores = [{
        username, time}]
      const array = []
      // Save the username to session storage
      sessionStorage.setItem('highscore', JSON.stringify(highscores))
    
      // Retrieve and log the stored username
      const storedUsername = JSON.parse(sessionStorage.getItem('highscore'))
      console.log('Stored Username:', storedUsername)
      const highscore = this.shadowRoot.querySelector('#highscore')
      console.log(highscore)
     storedUsername.forEach(element => {
        element.username
        
     });
        highscore.textContent = ''
        const li = this.shadowRoot.querySelector('li')
        li.textContent = storedUsername
        highscore.appendChild(li)

    }
  }
)
