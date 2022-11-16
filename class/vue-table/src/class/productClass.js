export class productClass {
    #id;
    #pname;
    #price;
    #amount;
    #beforeTax;
    #afterTax;
    constructor(id, pname, price, amount) {
        this.#id = id;
        this.#pname = pname;
        this.#price = price;
        this.#amount = amount;
        this.#beforeTax = this.#price * this.#amount;
        // round to 2 decimal places
        this.#afterTax = Math.round((this.#beforeTax * 1.1) * 100) / 100;
        // this.#afterTax = this.#beforeTax * 1.1;
    }
    toObject() {
        return {
            id: this.#id,
            pname: this.#pname,
            price: this.#price,
            amount: this.#amount,
            beforeTax: this.#beforeTax,
            afterTax: this.#afterTax
        }
    }

}

// export default productClass;
