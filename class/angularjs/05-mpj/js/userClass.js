class userClass {
    #cid;
    #uname;
    #fname;
    #lname;
    #email;
    constructor(cid, uname, fname, lname, email) {
        this.#cid = cid;
        this.#uname = uname;
        this.#fname = fname;
        this.#lname = lname;
        this.#email = email;
    }
    toObject() {
        return {
            cid: this.#cid,
            uname: this.#uname,
            fname: this.#fname,
            lname: this.#lname,
            email: this.#email
        };
    }
}

export default userClass;
