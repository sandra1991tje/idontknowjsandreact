var confusions = require('./confusions.js');

describe("chapter 1, common misconception ", function() {
	describe("to assume `this` refers to the function itself: ", function() {
		var confusion1 = confusions.Confusion1;

		confusion1.foo.count = 0;

		var failRun = function(num) {
			for (var i=0; i<num; i++) {
				confusion1.foo(i); // it doesn't work this way
				console.log('foo.count: ' + foo.count);
			}
		}

		var run = function(num) {
			for (var i=0; i<num; i++) {
				confusion1.foo.call(confusion.foo, i); // using `call` force `this` to actually point at the foo function object
			};
		}

		it("it doesn't count how many times foo was called", function() {
			expect(function(){ failRun(10) }).toThrow( new Error("Cannot read property 'foo' of undefined") );
		});

		it("it does count how many times foo was called", function() {
			run(5);
			expect(confusion1.foo.count).toEqual(5);
		});

	});

	describe("to assume `this` refers to the function's scope", function() {
		var confusion2 = confusions.Confusion2;

		it("there's no bridge between the lexical scopes of foo() and bar()", function() {
			expect(confusion2.foo).toThrow( new Error("this.bar is not a function") );
		});
		//
	});
});
