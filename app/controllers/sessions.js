var User = require('../models/user'),
    Boom = require('boom');

module.exports = {

  token: function(req, reply) {
    User
      .filter({ username: req.payload.username, password: req.payload.password })
      .limit(1)
      .run()
      .then(function(result) {
        
        if (result.length === 0) { reply(Boom.notFound()); }

        // load the data back into a thinky model
        // to get access to the thinky methods
        var user = new User(result[0]);

        reply({
          user: { 
            id:   result[0].id,
            jwt:  req.server.plugins.JWT.sign(user.jwtAttributes())
          }
        });

      })
      .catch(function(err) {
        reply(err);
      })
    // reply(req.payload);
  }

};