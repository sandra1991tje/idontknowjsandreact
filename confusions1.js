// to illustrate how `this` doesn't let a function get a reference to itself

var Confusions1 = function() {};

Confusions1.prototype.foo = function(num) {
	// keep track of how many times `foo` is called
	this.count++;
}

// add dummy property
Confusions1.prototype.bar = function(num) {};

module.exports = Confusions1;


var Confusions2 = function() {};

Confusions2.prototype.foo = function() {
	var a = 2;
	this.bar();
};

Confusions2.prototype.bar = function() {
	return this.a;
}

var module.exports = Confusions2;
