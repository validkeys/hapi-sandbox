var IndexController = require('../controllers/index');

module.exports = function() {

  return [
    {
      method:   'GET',
      path:     '/',
      config:   {
        handler:  IndexController.index
      }
    },
    {
      method:   'POST',
      path:     '/',
      config:   {
        handler: IndexController.create
      }
    },
    {
      method:    'PUT',
      path:      '/{tv_show_id}',
      config:    {
        handler: IndexController.update
      }
    }
  ];

}();