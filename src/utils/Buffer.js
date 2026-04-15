export default class Buffer{

    #validDigits;
    #hasPoint;
    #value;
    
    constructor(){
        this.#validDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        this.#hasPoint = false;
        this.#value = '0';
    }

    clearBuffer(){
        this.#hasPoint = false;
        this.#value = '0';
    }

    getValue(){
        return this.#value;
    }

    #digitIsValid(digit){
        return digit in this.#validDigits;
    }

    addDigit(digit){

        if(this.#value === '0' && digit === '0') return;

        if(this.#value === '0' && this.#digitIsValid(digit)){
            this.#value = digit;
        }else if(this.#digitIsValid(digit)){
            this.#value += digit;
        }

    }

    addPoint(){
        if (!this.#hasPoint) {
            this.#value += '.';
            this.#hasPoint = true;
        }
    }

}