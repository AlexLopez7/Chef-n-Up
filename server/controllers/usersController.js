const Users = require('../models/usersModel.js');

const usersController = {};

// create a new user in the db
usersController.addNewUser = (req, res, next) => {
  const {name, password} = req.body;
  console.log(name, password);
  Users.create({name, password})
    .then(newUser => {
      console.log('new user added to db');
      res.locals.newUser = newUser;
      return next();
    })
    .catch(err => next(err))
}

module.exports = usersController;