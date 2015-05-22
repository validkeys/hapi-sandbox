var SessionsController  = require('../controllers/sessions'),
    Joi                 = require('joi');

module.exports = [
  {
    method:   "POST",
    path:     "/sessions/token",
    config:   {
      handler:  SessionsController.token,
      validate: {
        payload: {
          username: Joi.string().email(),
          password: Joi.string().min(4)
        }
      }
    }
  }
]