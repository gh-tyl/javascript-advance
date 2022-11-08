class cartClass {
    #cid;
    #shoppingList = new Map();
    constructor() {
        this.cart = [];
    }

    add(item) {
        this.#shoppingList.set(item.pid, item.amount);
    }

    remove(item) {
        this.#shoppingList.delete(item.pid);
    }

    calTotal() {
        this.#shoppingList.forEach((prod, idx) => {
            this.#cid += prod.price * prod.amount;
        });
    }
}

export default cartClass;
