const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const rewire = require('rewire');
const request = require('supertest');

const app = require('../app');

describe('App', () =>{
  context('POST Lecture', () => {

    const Lecture = require('../src/models/lecture');

    it('should get error 500', (done) => {
      sinon.stub(Lecture, 'saveLecture').throws();

      request(app).post('/api/lecture/save').expect(500).end((err, res) => {
        done();
      });
    });
  });
});