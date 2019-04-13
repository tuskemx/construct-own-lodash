const { spy } = require('sinon');


const newSpy = spy(x => 'Hello');
console.log(newSpy());
console.log(newSpy.callCount)