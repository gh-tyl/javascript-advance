import { prodClass } from './data/01-prodClass.js';
import { vegiProdClass } from './data/01-vegiProdClass.js';

const product1 = new prodClass('product1', 10, 100);
product1.setPrice = 200;
var h2 = document.createElement('h2');
h2.innerHTML = product1.display();
document.body.appendChild(h2);

const vegitable1 = new vegiProdClass('vegitable1', 10, 100, 'fruit');
var h2 = document.createElement('h2');
h2.innerHTML = vegitable1.displayV();
document.body.appendChild(h2);

// class work
class userClass {
    #fname;
    #lname;
    #country;
    #scores;
    constructor(fname, lname, country, scores) {
        this.#fname = fname;
        this.#lname = lname;
        this.#country = country;
        this.#scores = scores;
    }
    calAverage() {
        let sum = 0;
        this.#scores.forEach(score => {
            sum += score;
        });
        // return alpabet
        let average = sum / this.#scores.length
        if (average >= 100) {
            return 'A';
        } else if (average >= 90) {
            return 'B+';
        } else if (average >= 80) {
            return 'B';
        } else if (average >= 70) {
            return 'C';
        } else {
            return 'F';
        }
    }
    get name() {
        return `${this.#fname} ${this.#lname}`;
    }
    get country() {
        return this.#country;
    }
    set scores(scores) {
        this.#scores = scores;
    }
    display() {
        return `Student Name: ${this.name} From: ${this.country} academic standing is: ${this.calAverage()}`;
    }
}

const user1 = new userClass('John', 'Doe', 'USA', [100, 100, 100]);
user1.scores = [90, 90, 90];
// user1.scores = [80, 80, 80];
// user1.scores = [60, 70, 80];
// user1.scores = [20, 30, 40];
var h2 = document.createElement('h2');
h2.innerHTML = user1.display();
document.body.appendChild(h2);

// error handling
class prodClassErorrHandling {
    #pname;
    #price;
    constructor(pname, price) {
        try {
            this.#pname = pname;
            if (price <= 0 || typeof price !== 'number') {
                throw new Error('Price must be number and greater than 0');
            }
        } catch (error) {
            console.log(error);
            this.#price = 1;
        }
    }
}

const prodErorr1 = new prodClassErorrHandling('product1', 100);
console.log(prodErorr1);
const prodErorr2 = new prodClassErorrHandling('product2', -100);
console.log(prodErorr2);
