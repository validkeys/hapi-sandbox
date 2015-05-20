module.exports = {
  register: require('hapi-rethinkdb-thinky'),
  options: {
    host:       'localhost',
    port:       28015,
    db:         'test',
    modelsDir:  '/app/models'
  }
}