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
        if (a[b]) a[b]+=1;
        else a[b] = 1; return a;
      };
      let input = ['dog', 'parrot'];
      let actualResult = _.reduce(input, animal, {});
      let desiredResult = {'dog': 1, 'parrot': 1}
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
    it('return function value', () => {
      function sum(a, b) {
        return a + b;
      }
  
      const actualResult = _.once(sum(1, 2));
      const desiredResult = 3;
      expect(actualResult).to.eql(desiredResult);
    });
    
    it('tests if count goes to 0', () => {
      function sum(a, b) {
        return a + b;
      }
  
      const actualResult = _.once(sum(1, 2));
      const desiredResult = 3;
      expect(actualResult).to.eql(desiredResult);
    });
  });
    

