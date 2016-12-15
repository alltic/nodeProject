//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Calculator', () => {
  /*
  * Test the /GET sum
  */
  describe('/GET sum', () => {
      it('Debe sumar 2+3', (done) => {
        chai.request(app)
            .get('/cal/sum/2/3')
            .end((err, res) => {
              res.should.have.status(200);
              res.should.be.json;
              res.body.should.be.a('object');
              res.body.should.have.property('result');
              res.body.result.should.equal(2);
              done();

            });
      });
  });

  /*
  * Test the /GET sub
  */
  describe('/GET sub', () => {
      it('Debe restar 2-3', (done) => {
        chai.request(app)
            .get('/cal/sub/2/3')
            .end((err, res) => {
              res.should.have.status(200);
              res.should.be.json;
              res.body.should.be.a('object');
              res.body.should.have.property('result');
              res.body.result.should.equal(-1);
              done();

            });
      });
  });

  /*
  * Test the /GET mul
  */
  describe('/GET mul', () => {
      it('Debe multiplicar 2*3', (done) => {
        chai.request(app)
            .get('/cal/mul/2/3')
            .end((err, res) => {
              res.should.have.status(200);
              res.should.be.json;
              res.body.should.be.a('object');
              res.body.should.have.property('result');
              res.body.result.should.equal(6);
              done();

            });
      });
  });

  /*
  * Test the /GET div
  */
  describe('/GET div', () => {
      it('Debe dividir 3/3', (done) => {
        chai.request(app)
            .get('/cal/div/3/3')
            .end((err, res) => {
              res.should.have.status(200);
              res.should.be.json;
              res.body.should.be.a('object');
              res.body.should.have.property('result');
              res.body.result.should.equal(1);
              done();

            });
      });
  });

});