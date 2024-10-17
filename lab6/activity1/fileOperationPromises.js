//activity 1b
const fsPromises = require('fs').promises; 

fsPromises.writeFile('userData.txt', 'Hello, this is a test message! ')
    .then(() => {
        console.log('File written successfully!');

        return fs.writeFile('userData.txt', 'utf8');
    })
    .then(() => {
        return fs.appendFile('userData.txt', '\nAppended content');
    })
    .catch((err) => {
        console.error('An error occurred:', err);
    });