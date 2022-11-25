class prodClass {
    #pid;
    #pname;
    #price;
    constructor(pid, pname, price) {
        this.#pid = 0;
        this.#pname = "";
        this.#price = 0;
    }
    toObject() {
        return {
            pid: this.#pid,
            pname: this.#pname,
            price: this.#price
        };
    }
}

export default prodClass;
