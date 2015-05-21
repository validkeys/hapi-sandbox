var TvShow = require('../models/tv_shows'),
    _      = require('lodash');

module.exports = {

  index: function(req, reply) {

    // require the model
    // var TvShow = req.server.plugins['hapi-rethinkdb-thinky'].tv_shows;

    // grab all the records
    TvShow.run()
      .then(function(result) {
        reply({tvShows: result});
      })
      .catch(function(err) {
        reply(err);
      });
  },

  show: function(req, reply) {

    TvShow.get(req.params.tv_show_id)
      .getJoin()
      .run()
      .then(function(result) {

        var actors = result.actors;
        delete result.actors

        result.actor_ids = _.pluck(actors, 'id');

        var response = {
          show:   result,
          actors: actors
        }

        reply(response);
      });

  },

  create: function(req, reply) {
    var show = new TvShow(req.payload);

    show.save()
      .then(reply)
      .catch(function(e) {
        reply({error: e})
      });
  },

  update: function(req, reply) {
    var show   = null;

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