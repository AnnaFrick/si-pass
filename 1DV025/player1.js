import { Person } from "./person.js";

export class Player1 extends Person {
    #score
  
  
   get score() {
        return this.#score
    }
    
    set score (value) {
            this.#score = value;
     
}

}