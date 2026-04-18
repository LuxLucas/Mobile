export default class Buffer {
    
    #value;

    constructor() {
        this.clearBuffer();
    }

    clearBuffer() {
        this.#value = '0';
    }

    getValue() {
        return this.#value.endsWith('.') 
            ? this.#value.slice(0, -1) 
            : this.#value;
    }

    addDigit(digit) {
        if (!/[0-9]/.test(digit)) return;

        if (this.#value === '0') {
            this.#value = digit;
        } else {
            this.#value += digit;
        }
    }

    addPoint() {
        if (!this.#value.includes('.')) {
            this.#value += '.';
        }
    }
    
}