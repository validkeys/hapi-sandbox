// module.exports = [
//   require('./root')
// ];
var path = require('path');
var fs = require('fs');
var _ = require('lodash');

fs.readdirSync(__dirname).forEach(function (file) {
  /* If its the current file ignore it */
  if (file === 'index.js') return;

  /* Prepare empty object to store module */
  var mod = {};

  /* Store module with its name (from filename) */
  mod[path.basename(file, '.js')] = require(path.join(__dirname, file));


  /* Extend module.exports (in this case - undescore.js, can be any other) */
  _.extend(module.exports, mod);
});

console.info("Route Exports:", JSON.stringify(module.exports));