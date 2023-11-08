class EquationsGenerator{
    
    constructor(rand, max){
        this.rand = rand;
        this.max = max;
    }

    generate(operation){
        let data;
        switch(operation){
            case Operations.ADD:
                data = this.#generateForAddition();
                return this.#print(data, operation);
            case Operations.SUB:
                data = this.#generateForSubtraction();
                return this.#print(data, operation);
            case Operations.MUL:
                data = this.#generateForMultiplication();
                return this.#print(data, operation);
            case Operations.DIV:
                data = this.#generateForDivision();
                return this.#print(data, operation);
        }

        return `a ${operation} b = c`;
    }

    #print(data, operation){
        let position = this.rand.getNumber(1);        
        let variable = this.rand.getLetter();
        let a = (position == 0) ? variable : data.firstNumber; 
        let b = (position == 0) ? data.secondNumber : variable;
        return `${a} ${operation} ${b} = ${data.result}`;
    }
    
    #generateNumbers(){
        let res = {};
        res.firstNumber = this.rand.getNumber(this.max, 1);
        res.secondNumber = this.rand.getNumber(this.max, 1);
        return res;
    }

    #generateForAddition(){
        let res = this.#generateNumbers();
        res.result = res.firstNumber + res.secondNumber;
        return res;
    }

    #generateForSubtraction(){
        let res = this.#generateNumbers();
        res.result = res.firstNumber - res.secondNumber;
        return res;
    }

    #generateForMultiplication(){
        let res = this.#generateNumbers();
        res.result = res.firstNumber * res.secondNumber;
        return res;
    }

    #generateForDivision(){
        let res = this.#generateNumbers();
        while(res.firstNumber % res.secondNumber != 0){
            res = this.#generateNumbers();
        }
        res.result = res.firstNumber / res.secondNumber;
        return res;
    }

}