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

  it("it doesn't counts how many times foo was called", function() {
    console.log(getObjectProps(confusion)); // at this stage confusion doesn't have property count
    confusion.foo.count = 0;
    var i;
    for (i=0; i<10; i++) {
      confusion.foo(i);
    }
    expect(confusion.count).not.toEqual(10); // When the code executes foo.count = 0, indeed it's adding a property count to the function object foo. But for the this.count reference inside of the function, this is not in fact pointing at all to that function object, and so even though the property names are the same, the root objects are different, and confusion ensues.
    console.log(getObjectProps(confusion)); // ["count", "foo", "bar"]
  });
});

