var Hapi = require('hapi'),
    DB   = require('./app/lib/db');

var server = new Hapi.Server();
server.connection({ port: 3000, labels: ['api'] });

server.route(require('./app/routes'));

server.register(
  require('./app/plugins')
, function (err) {
    if (err) { throw err; }
    server.start(function() {
      console.log('Server running at: ' + server.info.uri);
    });
});