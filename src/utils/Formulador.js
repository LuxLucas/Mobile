export default class Formulator {

    #formula = [];
    #operators = ['+', '-', '*', '/'];

    #last() {
        return this.#formula.at(-1);
    }

    #isOperator(value) {
        return this.#operators.includes(value);
    }

    #isNumber(value) {
        return !isNaN(value);
    }

    addOperator(op) {
        if (!this.#isOperator(op)) return;

        const last = this.#last();

        if (!last) {
            if (op === '+' || op === '-') {
                this.#formula.push(op);
            }
            return;
        }

        if (this.#isOperator(last)) {
            this.#formula[this.#formula.length - 1] = op;
            return;
        }

        if (this.#isNumber(last) || last === ')') {
            this.#formula.push(op);
        }
    }

}