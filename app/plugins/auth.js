var jwt   = require('jsonwebtoken'),
    User  = require('../models/user'),
    Boom  = require('boom');

var privateKey = "BbZJjyoXAdr8BUZuiKKARWimKfrSmQ6fv8kZ7OFfc";

var validator = function(decodedToken, cb) {
  console.log("Got Decoded Token: ", decodedToken);
  // find the user based on decodedToken data
  var error;

  User
    .get(decodedToken.id)
    .run()
    .then(function(result) {
      console.log("Got User: ", result);
      return cb(error, true, result);
    }, function(err) {
      error = err;
      return cb(Boom.unauthorized(err), false, {});
    })

  // if (!found) {
  //   return cb(error, false, credentials);
  // }
}

var sign = function(data) {
  return jwt.sign(data, privateKey, {
    algorithms:        ["RS256"]
  });
}

var Plugin = {
  register: function(server, options, next) {

    server.auth.strategy('token', 'jwt', {
      key:          privateKey,
      validateFunc:  validator
    });

    server.expose('sign', sign);

    next();
  }
};

Plugin.register.attributes = {
  name: "JWT",
  version: "1.0.0"
};

module.exports = Plugin;