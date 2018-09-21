'use strict';

const express = require('express');
const authController = require('./auth.controller');

module.exports = (app) => {
  app.route('/auth').post(authController.login);
};
