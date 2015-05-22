var thinky  = require('../lib/db').thinky,
    type    = thinky.type,
    _       = require('lodash');

var User = thinky.createModel('users', {
  id:         type.string(),
  name:       type.string(),
  username:   type.string(),
  password:   type.string()
});

// Indeces
User.ensureIndex("username", function(doc) {
  return doc('username');
});

// Instance Methods
User.define('jwtAttributes', function() {
  return _.pick(this, ['id','name','username']);
});

module.exports = User;