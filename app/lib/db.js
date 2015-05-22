var dbConfig = require('../config/database');

var thinky = require('thinky')(dbConfig);

thinky._onDbReady.push(function() {
  console.info("Database Is Ready");
});

var r = thinky.r;

exports.thinky  = thinky;
exports.r       = r;