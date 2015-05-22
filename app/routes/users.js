var UsersController = require('../controllers/users');

module.exports = [
  {
    method: "GET",
    path:   "/users",
    handler: UsersController.index
  }
];