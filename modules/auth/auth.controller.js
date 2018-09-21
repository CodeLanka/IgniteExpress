'use strict';

const jwt = require('jsonwebtoken');
const config = require('./../../config');

const login = (req, res) => {
  // TODO: Validate username and password with Database

  if (
    req.body.email &&
    req.body.email == 'admin@somemail.com' &&
    req.body.password &&
    req.body.password == 'pass'
  ) {
    const token = jwt.sign(
      {
        username: 'user',
        role: 'manager'
      },
      config.security.secret,
      {
        audience: config.security.audience,
        issuer: config.security.issuer,
        expiresIn: config.security.tokenExpiration
      }
    );
    res.send({ status: 'SUCCESS', token: token });
  } else {
    res.status(401).send({ status: 'UNAUTHORIZED' });
  }
};

module.exports.login = login;
