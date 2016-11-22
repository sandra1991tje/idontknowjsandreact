// hello3.spec.js
var HelloWorld = require('./hello3.js');

describe('Hello World', function() {
  var helloWorld = new HelloWorld();

  it('says "Hello, World!" when hello is called without an argument', function() {
    expect(helloWorld.hello('')).toEqual('Hello, World!');
    expect(helloWorld.hello()).toEqual('Hello, World!');
  });

  it('says "Hello, Adam!" ', function() {
    expect(helloWorld.hello('Adam')).toEqual('Hello, Adam!');
  });
});