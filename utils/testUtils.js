'use strict';

const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const API_BASE_URL = 'http://localhost:3080';

module.exports.acquireToken = () => {
  return new Promise((resolve, reject) => {
    chai
      .request(API_BASE_URL)
      .post('/auth')
      .send({ email: 'admin@somemail.com', password: 'pass' })
      .end((err, res) => {
        if (!err) {
          resolve(res.body.token);
        } else {
          reject(err);
        }
      });
  });
};

module.exports.deleteAllRecordsOnACollection = (collectionName) => {
  return new Promise((resolve, reject) => {
    const Collection = mongoose.Model(collectionName);
    Model.remove({})
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
