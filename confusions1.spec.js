var Confusions1 = require('./confusions1.js');

describe("chapter 1, common misconception ", function() {
  describe("to assume `this` refers to the function itself: ", function() {
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
  
  describe("to assume `this` refers to the function's scope", function() {
    var confusion = new Confusions1();
  
    it("there's no bridge between the lexical scopes of foo() and bar()", function() {
      function foo() {
        var a = 2;
        this.bar();
      }
  
      function bar() {
        expect(this.a).toEqual(294);
       // expect(this.a).toThrow( new Error("a is defined") );
      }
    });
    //
  });
});
