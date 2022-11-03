config = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
}

const tableCreater = (objs) => {
    let header = Object.keys(objs[0]);
    let table = document.createElement('table');
    let theader = document.createElement('thead');
    let tr = document.createElement('tr');
    header.forEach((key) => {
        let th = document.createElement('th');
        th.innerHTML = key;
        tr.appendChild(th);
    });
    theader.appendChild(tr);
    table.appendChild(theader);
    document.body.appendChild(table);
    return table;
}
tableCreater();

const tablePoper = (objs, idx) => {
    let table = document.getElementsByTagName('table')[0];
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');
    Object.entries(objs).forEach((obj) => {
        let td = document.createElement('td');
        td.innerHTML = obj[1];
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
    table.appendChild(tbody);
}
