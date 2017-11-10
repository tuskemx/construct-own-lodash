const expect = require('chai').expect;

const _ = require('../lowbar');

describe('_', function () {
  it('is an object', function () {
    expect(_).to.be.an('object');
    expect(true).to.be.false;
  });

  describe('#identity', function () {
   
  });
});
