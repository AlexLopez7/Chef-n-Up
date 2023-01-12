const Users = require('../models/usersModel.js');

const usersController = {};

// create a new user in the db
usersController.addNewUser = (req, res, next) => {
  const {name, password} = req.body;
  Users.create({name: name, password: password})
    .then(newUser => {
      res.locals.newUser = newUser;
      return next();
    })
    .catch(err => next(err))
}

module.exports = usersController;