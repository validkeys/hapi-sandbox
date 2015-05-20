// var r           = require('rethinkdb'),
//     connection  = null;

// exports.connect = function() {
//   r.connect({host: 'localhost', port: 28015}, function(err, conn) {
//     if(err) { throw err; }

//     // use the test database
//     conn.use('test');
//     console.info("RethinkDB Connected to db: "+ conn.database +" on port: " + conn.port);
//     connection = conn;
//     console.log(connection);
//     return connection;
//   });
// }

// exports.r = connection;