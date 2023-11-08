class Randomizer{
    
    #letters = ["a", "b", "c", "x", "y", "m", "n"];
    #operations = [Operations.ADD, Operations.SUB, Operations.MUL, Operations.DIV];

    getLetter(){
        let index = this.getNumber(this.#letters.length);
        return this.#letters[index];
    }

    getOperation(){
        let index = this.getNumber(this.#operations.length);
        return this.#operations[index];
    }

    getNumber(max, min=0){
        return Math.floor(Math.random() * max + min);
    }

}