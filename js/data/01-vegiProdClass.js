import { prodClass } from './01-prodClass.js';

export class vegiProdClass extends prodClass {
    #amount;
    #category;
    constructor(pname, amount, price, category) {
        super(pname, price);
        this.#amount = amount;
        this.#category = category;
    }
    total() {
        return this.#amount * this.price;
    }
    displayV() {
        return this.display() + `Amount: ${this.#amount} Category: ${this.#category}`;
    }
}
