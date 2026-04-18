export default class Formulator {

    #formula = [];
    #operators = ['+', '-', '*', '/'];
    #openParentheses = 0;

    clear(){
        this.#formula = [];
        this.#openParentheses = 0;
    }

    #last() {
        return this.#formula.at(-1);
    }

    #valueAt(index){
        return this.#formula.at(index);
    }

    #isOperator(value) {
        return this.#operators.includes(value);
    }

    #isNumber(value) {
        return typeof value === 'string' && /^-?\d+(\.\d+)?$/.test(value);
    }

    addOperator(op) {
        if (!this.#isOperator(op)) return;

        const last = this.#last();
        const penultimate = this.#valueAt(-2);

        if (!last) {
            if (op === '+' || op === '-') { 
                this.#formula.push(op);
            }
            return;
        }

        if (this.#isOperator(last)) {
            const isUnary = op === '+' || op === '-';

            if (penultimate === '(' && !isUnary) return;

            this.#formula[this.#formula.length - 1] = op;
            return;
        }

        if (this.#isNumber(last) || last === ')') {
            this.#formula.push(op);
        }
    }

    openParentheses(){
        const last = this.#last();

        if (this.#isNumber(last) || last === ')'){
            this.addOperator('*');
        }

        this.#formula.push('(');
        this.#openParentheses++;
    }

    closeParentheses(){
        const last = this.#last();

        if (
            this.#openParentheses > 0 &&
            (this.#isNumber(last) || last === ')')
        ) {
            this.#formula.push(')');
            this.#openParentheses--;
        }
    }

}