var Hapi = require('hapi'),
    DB   = require('./app/lib/db'),
    _    = require('lodash');

var server = new Hapi.Server();
server.connection({ port: 3000, labels: ['api'] });

// Connect the Database
var db = require('./app/lib/db');

server.register(
  require('./app/plugins')
, function (err) {
    if (err) { throw err; }

    server.route(_.chain(require('./app/routes')).values().flatten().value());

    console.log(server.plugins.JWT.sign({id: 1}));
    
    server.start(function() {
      console.log('Server running at: ' + server.info.uri);
    });
});