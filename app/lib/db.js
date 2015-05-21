var thinky = require('thinky')({
  host: "localhost",
  port: 28015,
  db:   "test"
});

thinky._onDbReady.push(function() {
  console.info("Database Is Ready");
});

var r = thinky.r;

exports.thinky  = thinky;
exports.r       = r;