const _ = {};

_.identity = (x) => {
  return x;
};


_.fromPairs = (array) => {
  if (array.length === 0) return {};
  const obj = {}
  for (let i = 0; i < array.length; i++) {
    obj[array[i][0]] = array[i][1];
  }
  return obj;
}

_.fill = (array, value, start, end) => {


  for (let i = start; i < end; i++) {
    array.push(value);
  }

  return array;

}

_.map = (array, func) => {

  let newArray = [];
  if (!func) return array;
  for (let i = 0; i < array.length; i++) {
    newArray.push(func(array[i]));
  }
  return newArray;
};

_.filter = (array, func) => {
  let newArray = [];
  if (!func) return array;

  for (let i = 0; i < array.length; i++) {
    if (func([array[i]]) === true) newArray.push(array[i]);
  }

  return newArray;
}

_.reduce = (array, func, acc) => {
  if (!acc) acc = array.shift();
  for (let i = 0; i < array.length; i++) {
    acc = func(acc, array[i]);
  }

  return acc;
};

_.once = (func) => {
  let result = null;
  return function () {
    if (result === null) {
      result = func();
    }
    return result;
  };
};


_.before = (n, func) => {
  let count = n;
  let result;

  return function () {
    if (count > 0) {
      count--;
      result = func();
    }
    return result;
  }
}


// (...) rest paraments
//limit spread (...) operator






















module.exports = _;
