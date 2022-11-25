import productClass from "./productClass.js";
const productsList = new Map();
const loadData = (productObj) => {
    let product = new productClass(productObj.id, productObj.item_name, productObj.price, productObj.amount);
    productsList.set(productObj.id, product);
    const tr = document.createElement('tr');
    for (let property in productObj) {
        const td = document.createElement('td');
        td.innerText = productObj[property];
        tr.appendChild(td);
    }
    let totalTd = document.createElement('td');
    totalTd.innerText = product.total();
    let taxTd = document.createElement('td');
    taxTd.innerText = product.tax();
    tr.append(totalTd, taxTd);
    document.querySelector("tbody").appendChild(tr);
}
const tablePoper = (value) => {
    let jsonData = JSON.parse(value);
    jsonData.forEach(loadData);
    footerPoper(jsonData);
}
let loadJSON = new Promise((res, rej) => {
    let xmlReq = new XMLHttpRequest();
    xmlReq.onload = () => {
        if (xmlReq.status == 200) {
            res(xmlReq.response);
        } else {
            rej(xmlReq.statusText);
        }
    };
    xmlReq.open("GET", './data/products.json');
    xmlReq.send();
}).then(
    (response) => { tablePoper(response) },
    (err) => { document.querySelector('h1').innerText = err }
)

const calMaxMinAvg = (values) => {
    let max = values[0].price;
    let min = values[0].price;
    let sum = 0;
    let avg = 0;
    const calc = (value) => {
        if (value.price > max) max = value.price;
        if (value.price < min) min = value.price;
        sum += value.price;
    }
    values.forEach(calc);
    avg = sum / values.length;
    return { max, min, avg };
}

const footerPoper = (values) => {
    let { max, min, avg } = calMaxMinAvg(values);
    document.querySelector('#max').innerText = max;
    document.querySelector('#min').innerText = min;
    document.querySelector('#avg').innerText = avg;
}
