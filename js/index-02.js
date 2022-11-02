import { jsonLoad } from './data/02-load.js';
jsonLoad();
var h1 = document.createElement('h1');
h1.innerHTML = data;



// 2022-11-01 first half
// var h1 = document.createElement('h1');
// const display = (value) => {
//     h1.innerHTML = value;
//     document.body.appendChild(h1);
// }

// // const firstFunc = () => {
// //     display('calling first function');
// // }

// // const secondFunc = () => {
// //     display('calling second function');
// //     firstFun();
// // }

// // firstFunc();
// // secondFunc();

// // const simpleSum = (a, b, callbackFunc) => {
// //     let sum = a + b;
// //     callbackFunc(sum);
// // }

// // simpleSum(1, 2, display);


// // var key = animal => animal === 'animal';
// // console.log(key('animal'));

// // function key(animal) {
// //     return animal === 'animal';
// // }
// // console.log(key('animal'));

// // const students = [
// //     { name: 'Jun', mark: 20 },
// //     { name: 'Lucas', mark: 30 },
// //     { name: 'Tina', mark: 40 },
// //     { name: 'Mathus', mark: 50 },
// // ];

// const students = [
//     { name: 'Jun', mark: 20, age: 20 },
//     { name: 'Lucas', mark: 30, age: 12 },
//     { name: 'Tina', mark: 40, age: 30 },
//     { name: 'Mathus', mark: 50, age: 40 }
// ];

// const tableCreater = (objs) => {
//     let header = Object.keys(objs[0]);
//     let table = document.createElement('table');
//     let theader = document.createElement('thead');
//     let tr = document.createElement('tr');
//     header.forEach((key) => {
//         let th = document.createElement('th');
//         th.innerHTML = key;
//         tr.appendChild(th);
//     });
//     theader.appendChild(tr);
//     table.appendChild(theader);
//     document.body.appendChild(table);
//     return table;
// }
// tableCreater(students);

// const tablePoper = (objs, idx) => {
//     let table = document.getElementsByTagName('table')[0];
//     let tbody = document.createElement('tbody');
//     let tr = document.createElement('tr');
//     Object.entries(objs).forEach((obj) => {
//         let td = document.createElement('td');
//         td.innerHTML = obj[1];
//         tr.appendChild(td);
//     });
//     tbody.appendChild(tr);
//     table.appendChild(tbody);
// }

// students.forEach(tablePoper);
