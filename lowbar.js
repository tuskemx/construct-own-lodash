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
  console.log(array);
  console.log(value);
  console.log(start);
  console.log(end);
  
  for (let i = start; i < end; i++) {
    array.push(value);
  }
  console.log(value);
  console.log(start);
  console.log(end);
  console.log(array);
  return array;
   
}









module.exports = _;
