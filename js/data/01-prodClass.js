export class prodClass {
    #pname;
    #amount;
    #price;
    constructor(pname, amount, price) {
        this.#pname = pname;
        this.#amount = amount;
        this.#price = price;
    }
    total() {
        return this.#amount * this.#price;
    }
    get pname() {
        return this.#pname;
    }
    set setPrice(price) {
        this.#price = price;
    }
    display() {
        return `Product Name: ${this.#pname} Amount: ${this.#amount} Price: ${this.#price} Total: ${this.total()}`;
    }
}
