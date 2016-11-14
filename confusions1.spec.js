var Confusions1 = require('./confusions1.js');

describe("chapter 1, section itself: ", function() {
  var confusion = new Confusions1();

  // for debugging: list all object properties
  var getObjectProps = function(obj){
     var keys = [];
     for(var key in obj){
           keys.push(key);
        }
     return keys;
  }

  confusion.foo.count = 0;

  var failRun = function(num) {
    for (var i=0; i<num; i++) {
      confusion.foo(i); // it doesn't work this way
      console.log('foo.count: ' + foo.count);
    }
  }

  var run = function(num) {
    for (var i=0; i<num; i++) {
      confusion.foo.call(confusion.foo, i); // using `call` force `this` to actually point at the foo function object
    };
  }

  it("it doesn't count how many times foo was called", function() {
    expect(function(){ failRun(10) }).toThrow( new Error("foo is not defined") );
  });

  it("it does count how many times foo was called", function() {
    run(5);
    expect(confusion.foo.count).toEqual(5);
  });

});

