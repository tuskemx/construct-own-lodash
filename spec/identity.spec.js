const { expect } = require('chai');
const { spy } = require('sinon');
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
    const desiredResult = { 'a': 3 };
    expect(actualResult).to.eql(desiredResult);
  });
  it('expect one nested array to return object with key value', () => {
    const input = [['a', 3], ['b', 4], ['c', 7]];
    const actualResult = _.fromPairs(input);
    const desiredResult = { 'a': 3, 'b': 4, 'c': 7 };
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

describe('map', () => {
  it('returns an empty array when passed one with no argument', () => {
    const input = [];
    const actualResult = _.map(input);
    const desiredResult = [];
    expect(actualResult).to.eql(desiredResult);
  });
  it('applies given function to each array element and returns a new array', () => {
    function square(n) {
      return n * n;
    }

    let actualResult = _.map([3, 4, 11], square);
    let desiredResult = [9, 16, 121];
    expect(actualResult).to.eql(desiredResult);

  });
  it('returns new array and doesnt modify old', () => {
    function square(n) {
      return n;
    }
    const input = _.map([3, 11, 12], square);
    const actualResult = _.map([3, 11, 12], square);
    expect(actualResult).to.not.equal(input);
  });
});

describe('filter', () => {
  it('returns an empty array when passed one with no argument', () => {
    const input = [];
    const actualResult = _.filter(input);
    const desiredResult = [];
    expect(actualResult).to.eql(desiredResult);
  });
  it('see if value is truthy based on function and is pushed to newarray ', () => {
    function aboveZero(n) {
      if (n > 0) return true; return false;
    }
    let actualResult = _.filter([-2, 2], aboveZero);
    let desiredResult = [2];
    expect(actualResult).to.eql(desiredResult);
  });
  it('item pushed to new array based on boolean value', () => {
    function aboveZero(n) {
      if (n > 0) return true; return false;
    }
    let actualResult = _.filter([-2, 2, 4, 5, 7, 9], aboveZero);
    let desiredResult = [2, 4, 5, 7, 9];
    expect(actualResult).to.eql(desiredResult);
  });
  it('returns new array and doesnt modify old', () => {
    function square(n) {
      return true
    }
    const input = _.filter([3, 11, 12], square);
    const actualResult = _.filter([3, 11, 12], square);
    expect(actualResult).to.not.equal(input);
  });
  it('returns copy of array with no changes if no function argument', () => {
    let actualResult = _.filter([-2, 2]);
    let desiredResult = [-2, 2];
    expect(actualResult).to.eql(desiredResult);
  });
});

describe('reduce', () => {
  it('returns an empty array when', () => {
    function sum(a, b) {
      return a + b;
    }
    const input = [1, 2];
    const actualResult = _.reduce(input, sum, 0);
    const desiredResult = 3;
    expect(actualResult).to.eql(desiredResult);
  });
  it('returns reduced array key value pairs', () => {
    function animal(a, b) {
      if (a[b]) a[b] += 1;
      else a[b] = 1; return a;
    };
    let input = ['dog', 'parrot'];
    let actualResult = _.reduce(input, animal, {});
    let desiredResult = { 'dog': 1, 'parrot': 1 }
    expect(actualResult).to.eql(desiredResult);
  });
  it('when not passed accumulator defaults accumulator as first array element', () => {
    function sum(a, b) {
      return a + b;
    }
    const input = [1, 2];
    const actualResult = _.reduce(input, sum);
    const desiredResult = 3;
    expect(actualResult).to.eql(desiredResult);
  });
});

describe('once', () => {
  it('returns a new function', () => {
    function sayHello() {
      return "hello";
    }

    const newFunc = _.once(sayHello);

    expect(newFunc).to.be.a('function');
    expect(newFunc).to.not.equal(sayHello);
  });
  it('returns invocation of the original function', () => {
    function inputFunc() {
      return "Hello";
    }

    let onceFunc = _.once(inputFunc);
    // const desiredResult = 3;
    expect(onceFunc()).to.eql(inputFunc());
  });
  it('make sure only invokable once', () => {

    const newSpy = spy();
    const newFunc = _.once(newSpy);
    newFunc();
    newFunc();
    newFunc();
    console.log(newFunc.callCount);
    expect(newSpy.callCount).to.eql(1);

  });

  it('make sure call count is 1 and returns first value on each call', () => {

    const newSpy = spy(x => "Hello");

    const newFunc = _.once(newSpy);

    expect(newFunc()).to.equal("Hello");
    expect(newFunc()).to.equal("Hello");
    expect(newFunc()).to.equal("Hello");


    expect(newSpy.callCount).to.eql(1);
  });
});

describe.only('before', () => {
  it('returns a new function', () => {
    function sayHello() {
      return "hello";
    }

    const newFunc = _.before(sayHello);

    expect(newFunc).to.be.a('function');
    expect(newFunc).to.not.equal(sayHello);
  });
  it('make sure only invokable n amount of times', () => {

    const newSpy = spy();
    const newFunc = _.before(3, newSpy);
    newFunc();
    newFunc();
    newFunc();
    newFunc();
    console.log(newFunc.callCount);
    expect(newSpy.callCount).to.eql(3);
  });
  it('returns value of last invocation', () => {

    const newSpy = spy();
    const newFunc = _.before(3, newSpy);
    const spyCall = spy.lastCall(n, newSpy)
    newFunc();
    newFunc();
    newFunc();
    newFunc();
    console.log(newSpy.callCount);
    expect(newSpy.callCount).to.eql(n);
     //get last lodash chai

  });
});




