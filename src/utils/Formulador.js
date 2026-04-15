export default class Formulator{

    #formula;
    #openParentheses;
    #validOperators;

    constructor(){
        this.#formula = '';
        this.#openParentheses = 0;
        this.#validOperators = ['+', '-', '*', '/'];
    }

    #operatorIsValid(operator){
        return this.#validOperators.includes(operator);
    }

    #getLast(){
        return this.#formula.slice(-1);
    }

    #lastIsOperator(){
        return this.#validOperators.includes(this.#getLast());
    }

    #lastIsOpenParenthesis(){
        return this.#getLast() === '(';
    }

    addOperator(operator){

        if(this.#formula === ''){

            if(['+', '-'].includes(operator)){
                this.#formula = operator;
            }

            return;
        } 

        if(this.#operatorIsValid(operator)){

            if(this.#lastIsOpenParenthesis()){
                if (['+', '-'].includes(operator)) this.#formula += operator;
                return;
            }

            if(this.#lastIsOperator){
                const beforeLast = this.#formula.slice(-2, -1);
                if (beforeLast === '(') return; 
                this.#formula = this.#formula.slice(0, -1) + operator;
            }else{
                this.#formula += operator;
            }

        }
        

    }

}