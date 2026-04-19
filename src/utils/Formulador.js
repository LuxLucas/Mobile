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

    #isOperator(value) {
        return this.#operators.includes(value);
    }

    #isNumber(value) {
        return typeof value === 'string' && /^-?\d+(\.\d+)?$/.test(value);
    }

    addOperator(op) {
        if (!this.#isOperator(op)) return;

        const last = this.#last();
        const penultimate = this.#formula.at(-2);

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

    addNumber(number){
        if(!this.#isNumber(number)) return;

        const last = this.#last();

        if(this.#isNumber(last)) return;
        if(last === ')') this.addOperator('*');

        this.#formula.push(number);
    }

    #closeAllOpenParentheses(){
        let before = this.#openParentheses;

        while (this.#openParentheses > 0){
            before = this.#openParentheses
            this.closeParentheses();
            if(before === this.#openParentheses) break;
        }
    }

    #finalize(){
        while(this.#isOperator(this.#last())){
            this.#formula.pop();
        }

        this.#closeAllOpenParentheses();
    }

    getFormula(){
        this.#finalize();
        return this.#formula.join('');
    }

}