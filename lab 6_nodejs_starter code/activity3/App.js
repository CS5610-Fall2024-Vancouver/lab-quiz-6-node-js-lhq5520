const express = require('express');
const app = express();

// Setting up Pug as a view engine

// Specify the location of the view folder

// Parsing URL-encoded data

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

app.get('/users', (req, res) => {
  res.render('users', { users });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
