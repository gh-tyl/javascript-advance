// create class
class carClass {
    // private
    // what is the private? you can change these values only inside class
    #id;
    #model;
    #years;
    #price;
    #color;
    constructor(id, model, years, price, color) {
        // property
        this.#id = id;
        this.#model = model;
        this.#years = years;
        this.#price = price;
        this.#color = color;
    }
    // For test
    // We need to use "get" and "set" methods
    // Using these methods, you can get and change value from outside class
    get model() {
        return this.#model
    }

    set setModel(model) {
        return this.#model = model
    }
    //

    changeVal = function () {
        this.#model = "20"
    }
}

// you have to export class name
export default carClass;
