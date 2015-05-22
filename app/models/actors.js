var thinky  = require('../lib/db').thinky,
    type    = thinky.type;

var Actors = thinky.createModel('actors', {
  id:         type.string(),
  name:       type.string(),
  tvShowsId:  type.string()
});

module.exports = Actors;

var TvShows = require('./tv_shows');
Actors.belongsTo(TvShows, "tv_show", "tvShowsId", "id");