/*const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const rewire = require('rewire');

const demo = rewire('../demo.js');

const OBJ = {
  toCall(){
    return 1;
  }
}

function testFunction(){
  return demo.testing();
}

const sandbox = sinon.createSandbox();

describe(('file to be test'), () => {
  context('function', () => {
    it('something happen', () => {
      const t = sandbox.stub().returns({ hisApp: 'its fake' });
      
      demo.__set__('App', t);
      console.log(testFunction());
    });
  });
});*/