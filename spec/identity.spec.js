const {expect} = require('chai');

const {identity} = require('../lowbar');

describe('#identity', () => {
  it('returns the value passed as an argument', () => {
    expect(identity(3)).to.equal(3);
    expect(identity('hello')).to.equal('hello');
    expect(identity(true)).to.equal(true);
  });
  it('returns a reference to the same reference type passed as an argument', () => {
    const arr = [];
    expect(identity(arr)).to.equal(arr);
  });
});
