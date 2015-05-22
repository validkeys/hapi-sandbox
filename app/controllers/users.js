var User    = require('../models/user'),
    _  = require('lodash');

module.exports = {

  index: function(req, reply) {
    User
      .run()
      .then(function(results) {

        // loop through each result
        // create a new instance of a user model
        // return the jwt params for each
        var users = _.map(results, function(res) {
          var user = new User(res);
          return user.jwtAttributes();
        });

        reply({users: users});
      });
  }

}