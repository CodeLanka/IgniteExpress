'use strict';

require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const jwt = require('express-jwt');
const bodyParser = require('body-parser');

const config = require('./config');
const autoLoad = require('./utils/autoLoad');

const app = express();

app.use(helmet.xssFilter());
app.use(helmet.hidePoweredBy());
app.use(helmet.noSniff());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  jwt({
    secret: config.security.secret,
    audience: config.security.audience,
    issuer: config.security.issuer
  }).unless({
    path: ['/auth', '/']
  })
);

autoLoad.loadRoutes(app);

const authErrorHandler = require('./utils/errorHandler');
app.use(authErrorHandler);

app.get('/status', (req, res) => {
  const localTime = new Date().toLocaleTimeString();
  res.status(200).send(`Sever time is ${localTime}.`);
});

app.get('/', (req, res) => {
  res.status(200).send('YOUR API');
});

app.set('port', config.app.port);
app.set('ip', config.app.ip);

app.listen(app.get('port'), () => {
  console.log(
    `The app is listening on ${app.get('port')}  from  ${Date(Date.now())}`
  );
});
