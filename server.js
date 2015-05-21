var Hapi = require('hapi'),
    DB   = require('./app/lib/db'),
    _    = require('lodash');

var server = new Hapi.Server();
server.connection({ port: 3000, labels: ['api'] });
server.route(_.chain(require('./app/routes')).values().flatten().value());

// Connect the Database
var db = require('./app/lib/db');

server.register(
  require('./app/plugins')
, function (err) {
    if (err) { throw err; }
    server.start(function() {
      console.log('Server running at: ' + server.info.uri);
    });
});