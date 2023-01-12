const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  name: {type: String, required: true},
  password: {type: String, required: true}
});

const Users = mongoose.model('Users', usersSchema)

module.exports = Users;