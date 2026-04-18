export default class Buffer{

    #validDigits;
    #value;

    clearBuffer(){
        this.#value = '0';
    }
    
    constructor(){
        this.#validDigits = [
            '0', 
            '1', 
            '2', 
            '3', 
            '4', 
            '5', 
            '6', 
            '7', 
            '8', 
            '9', 
            '.'
        ];
        this.clearBuffer();
    }

    #lastDigit(){
        return this.#value.slice(-1);
    }

    getValue(){
        if(this.#lastDigit() === '.') this.setValue('0');
        return this.#value;
    }

    #digitIsValid(digit){
        return digit in this.#validDigits;
    }

    #ifDigitIsValidThen(digit){
        if(this.#value === '0' && digit !== '.'){
            this.#value = digit;
            return
        } 
        this.#value += digit;
    }

    setValue(digit){
        if(this.#digitIsValid(digit)){
            this.#ifDigitIsValidThen(digit);
        }
    }

    addDigit(digit){
        if(this.#value === '0' && digit === '0') return;
        this.setValue(digit);
    }

    #hasPoint(){
        return this.#value.includes('.');
    }

    addPoint(){
        if (!this.#hasPoint()) this.setValue('.');
    }

}