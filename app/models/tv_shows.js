module.exports = function(thinky, rethinkDb) {
  var type = thinky.type;

  var TvShows = thinky.createModel('tv_shows', {
    id:       type.string(),
    name:     type.string(),
    episodes: type.number()
  });

  // beforeSave
  TvShows.pre('save', function(next) {
    var self = this;
    if (self.isSaved()) {
      console.log("I am updating a TV Show");
    } else {
      console.log("I am creating a TV Show!");
    }
    next();
  });

  return TvShows;
}