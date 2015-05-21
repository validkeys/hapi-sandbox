var TvShows = require('./tv_shows');

module.exports = function(thinky, rethinkDb) {
  var type = thinky.type;

  var Actors = thinky.createModel('actors', {
    id:       type.string(),
    name:     type.string(),
    tvShowsId: type.string()
  });

  Actors.belongsTo(TvShows, "tv_show", "tvShowsId", "id");

  return Actors;
}