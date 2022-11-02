const lucasPromise = new Promise((resolve, reject) => {
    let mood = 'good';
    if (mood === 'good') {
        resolve('I am happy');
    } else {
        reject('I am sad');
    }
});
