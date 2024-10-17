const express = require('express');
const router = express.Router();

let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

router.get('/', (req, res) => {
  res.json(users);
});


router.get('/:id', (req, res) => {
  // TODO: Find a user with a specific ID
  // Use req.params to access the user ID from the URL.
  // Search through the users array to find the user with the matching ID.
  // If the user is found, respond with the user data in JSON format.
  // If the user is not found, respond with a 404 status code and an appropriate error message.
  
});


router.post('/', (req, res) => {
  // TODO: Create new users
  // Use req.body to get the user's name from the request body.
  // Create a new user object with:
  // A unique ID
  // A name: Get this from req.body.name.
  // Add the new user to the users array.
  // Respond with a status code of 201 and return the newly created user in JSON format.

  });

router.delete('/:id', (req, res) => {
  // TODO: Delete a user with a specific ID
  // Use req.params to get the user ID from the URL.
  // Use filter() to remove the user with the matching ID from the users array.
  // Respond with a status code of 204 to indicate that the deletion was successful (no content to return).

});
module.exports = router;
