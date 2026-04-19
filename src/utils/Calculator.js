import { evaluate } from 'mathjs';
import Buffer from './Buffer';
import Formulador from './Formulador';


export default class Calculator {

    #buffer = new Buffer();
    #formulador = new Formulador();

    flushBuffer(){
        if(!this.#buffer.hasValue()) return;

        this.#formulador.addNumber(this.#buffer.getValue());
        this.#buffer.clear();
    }

    addOperator(op){
        if(!this.#formulador.canAddOperator(op)) return;

        this.flushBuffer();
        this.#formulador.addOperator(op);
    }

    openParentheses(){
        this.#formulador.openParentheses();
    }

    closeParentheses(){
        this.#formulador.closeParentheses();
    }

    addDigit(digit){
        this.#buffer.addDigit(digit);
    }

    addPoint(){
        this.#buffer.addPoint();
    }

    clear(){
        if(this.#buffer.hasValue()){
            this.#buffer.clear();
        }else{
            this.#formulador.clear();
        }
    }

    calculate(){
        this.flushBuffer();

        const formula = this.#formulador.getFormula();
        const result = evaluate(formula);

        this.#formulador.clear();

        return result;
    }

}