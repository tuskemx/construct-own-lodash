const {expect} = require('chai');

const _ = require('../lowbar');

describe('#identity', () => {
  it('returns the value passed as an argument', () => {
    expect(_.identity(3)).to.equal(3);
    expect(_.identity('hello')).to.equal('hello');
    expect(_.identity(true)).to.equal(true);
  });
  it('returns a reference to the same reference type passed as an argument', () => {
    const arr = [];
    expect(_.identity(arr)).to.equal(arr);
  });
});

describe('fill', () => {
  it('returns an empty object when passed an empty array', () => {
    const input = [];
    const actualResult = _.fromPairs(input);
    const desiredResult = {};
    expect(actualResult).to.eql(desiredResult);
  });
  it('expect one nested array to return object with key value', () => {
    const input = [['a', 3]];
    const actualResult = _.fromPairs(input);
    const desiredResult = {'a': 3};
    expect(actualResult).to.eql(desiredResult);
  });
  it('expect one nested array to return object with key value', () => {
    const input = [['a', 3], ['b', 4], ['c', 7]];
    const actualResult = _.fromPairs(input);
    const desiredResult = {'a': 3, 'b': 4, 'c': 7};
    expect(actualResult).to.eql(desiredResult);

  });
});

describe('fill', () => {
  it('returns an empty object when passed an empty array', () => {
    const actualResult = _.fill([], '', 0, 0);
    const desiredResult = [];
    expect(actualResult).to.eql(desiredResult);
  });
  it('takes empty array and flls with value between start end values', () => {
    let actualResult = _.fill([], 'a', 0, 3);
    let desiredResult = ['a', 'a', 'a'];
    expect(actualResult).to.eql(desiredResult);
});
});