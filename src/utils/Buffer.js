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

    #ifDigitIsValidThen(digit){
        if(this.#value === '0'){
            this.#value = digit
            return
        } 
        this.#value += digit
    }

    #digitIsValid(digit){
        return digit in this.#validDigits;
    }

    setValue(digit){
        if(this.#digitIsValid(digit)){
            this.#ifDigitIsValidThen(digit)
        }
    }

    addDigit(digit){
        if(this.#value === '0' && digit === '0') return;
        this.setValue(digit)
    }

    addPoint(){
        if (!this.#hasPoint) {
            this.#value += '.';
            this.#hasPoint = true;
        }
    }

}