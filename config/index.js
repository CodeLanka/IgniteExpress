'use strict';

let config = {
  app: {
    port: process.env.SERVER_PORT || 3080,
    ip: process.env.SERVER_IP || 'localhost',
    apiBase: '/api/v1'
  },
  security: {
    tokenExpiration: process.env.TOKEN_EXPIRE_TIME || '1h',
    secret: process.env.JWT_SECRET || 'secret',
    audience: process.env.JWT_AUDIENCE || 'api.yourdomain.tld',
    issuer: process.env.JWT_ISSUER || 'id.yourdomain.tld'
  }
};

module.exports = config;
