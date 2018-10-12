'use strict';

const chai = require('chai');
const should = require('chai').should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const API_BASE_URL = 'http://localhost:3080';

describe('Auth module', () => {
  describe('"Login"', () => {
    it('should return unauthorized when wrong username and password', (done) => {
      chai
        .request(API_BASE_URL)
        .post('/auth')
        .send({ email: '', password: '' })
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(401);
          res.body.status.should.equal('UNAUTHORIZED');
          done();
        });
    });
    it('should return a token for correct username and password', (done) => {
      chai
        .request(API_BASE_URL)
        .post('/auth')
        .send({ email: 'admin@somemail.com', password: 'pass' })
        .end((err, res) => {
          should.not.exist(err);
          should.exist(res.body);
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          res.body.status.should.eql('SUCCESS');
          res.body.should.include.keys('token');
          done();
        });
    });
  });
});
