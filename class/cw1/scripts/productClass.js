class productClass {
    #id;
    #item_name;
    #price;
    #amount;
    #tax;
    constructor(id, item_name, price, amount) {
        this.#id = id;
        this.#item_name = item_name;
        this.#price = price;
        this.#amount = amount;
        this.#tax = 0.15;
    }
    total() {
        return (this.#price * this.#amount).toFixed(2);
    }
    tax() {
        return (parseFloat(this.total()) + (this.total() * this.#tax)).toFixed(2);
    }
    get price() {
        return this.#price;
    }
    set price(newPrice) {
        this.#price = newPrice;
    }
}
export default productClass;
