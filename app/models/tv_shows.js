module.exports = function(thinky, rethinkDb) {
  var type = thinky.type;
  return thinky.createModel('tv_shows', {
    id: type.string(),
    name: type.string(),
    episodes: type.number()
  });
}