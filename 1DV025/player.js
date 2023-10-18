export class Player {
    name
    #score
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
  
    get getName() {
        return this.name;
    }
   get getScore() {
        return this.score;
    }
    
    set score (value) {
        if(value < 0 || value > 100) {
        this.#score = value;
   

    }
  
}

}