module.exports = {
  method:   'GET',
  path:     '/',
  handler:  function(req, reply) {

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
  }
};