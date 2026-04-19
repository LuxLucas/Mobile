export default class Buffer {
    
    #value = '0';

    clear() {
        this.#value = '0';
    }

    getValue() {
        return this.#value.endsWith('.') 
            ? this.#value.slice(0, -1) 
            : this.#value;
    }

    addDigit(digit) {
        if (!/^\d$/.test(digit)) return;

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