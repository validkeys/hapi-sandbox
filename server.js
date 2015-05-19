var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 3000, labels: ['api'] });

require('./app/routes');

server.register(
  require('./app/plugins')
, function (err) {
    if (err) { throw err; }
    server.start(function() {
      console.log('Server running at: ' + server.info.uri);
    });
});