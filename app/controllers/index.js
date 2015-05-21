module.exports = {

  index: function(req, reply) {

    // require the model
    var TvShow = req.server.plugins['hapi-rethinkdb-thinky'].tv_shows;

    // grab all the records
    TvShow.run()
      .then(function(result) {
        reply({tvShows: result});
      })
      .catch(function(err) {
        reply(err);
      });
  },


  create: function(req, reply) {
    // require the model
    var TvShow = req.server.plugins['hapi-rethinkdb-thinky'].tv_shows;

    var show = new TvShow(req.payload);

    show.save()
      .then(reply)
      .catch(function(e) {
        reply({error: e})
      });
  },

  update: function(req, reply) {
    var TvShow = req.server.plugins['hapi-rethinkdb-thinky'].tv_shows,
        show   = null;

    // if nothing is updated 
    TvShow.get(req.params.tv_show_id)
      .run()
      .then(function(show) {
        console.log("GOT SHOW: " + show.id);
        show.name = req.payload.name || req.payload.name;
        show.episodes = req.payload.episodes || show.episodes;
        return show.save();
      })
      .then(function(show) {
        console.log("Made it here");
        reply({show: show});
      })
      .catch(function(err) {
        reply(err);
      })
  }

}