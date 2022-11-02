export const jsonLoad = () => {
    const xmlReq = new XMLHttpRequest();
    xmlReq.onreadystatechange = () => {
        if (xmlReq.readyState === 4 && xmlReq.status === 200) {
            const data = JSON.parse(xmlReq.responseText);
            console.log(data);
        }
    };
    xmlReq.open('GET', './data/02-data.json', true);
    xmlReq.send();
};
