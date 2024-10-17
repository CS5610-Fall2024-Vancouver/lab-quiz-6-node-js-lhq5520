// activity 1a
const fs = require('fs');

fs.writeFile('example.txt', 'I am going to test file', (err) => {
    if (err) {
        console.error('something went south', err);
        return;
    }
    console.log('File written successfully!');
});


fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('something went south', err);
        return;
    }
    console.log(data);
});