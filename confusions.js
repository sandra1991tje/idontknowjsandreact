//to illustrate how `this` doesn't let a function get a reference to itself

var Confusion1 = function() {};

Confusion1.prototype.foo = function(num) {
	// keep track of how many times `foo` is called
	this.count++;
}

module.exports = Confusion1;


// to illustrate how `this` doesn't refers to the functions's scope

var Confusion2 = function() {};

Confusion2.prototype.foo = function() {
	var a = 2;
	this.bar(); // However, the developer who writes such code is attempting to use this to create a bridge between the lexical scopes of foo() and bar(), so that bar() has access to the variable a in the inner scope of foo(). No such bridge is possible. You cannot use a this reference to look something up in a lexical scope. It is not possible.
};

Confusion2.prototype.bar = function() {
	return this.a;
}

exports = Confusion1;
exports = Confusion2;

