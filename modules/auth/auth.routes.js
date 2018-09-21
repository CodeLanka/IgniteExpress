'use strict';

const authController = require('./auth.controller');

module.exports = (app) => {
  app.route('/auth').post(authController.login);
};
