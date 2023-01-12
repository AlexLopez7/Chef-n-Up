const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController.js')


// create a new user in the database
router.post('/', usersController.addNewUser, (req, res) => {
  res.status(200).json(res.locals.newUser);
});

module.exports = router;