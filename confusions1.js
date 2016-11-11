// to illustrate how `this` doesn't let a function get a reference to itself

var Confusions1 = function() {};

Confusions1.prototype.foo = function(num) {
  var log = [];
  log.push(num);
  // keep track of how many times `foo` is called
  this.count++;
  return log.length;
}

// add dummy property
Confusions1.prototype.bar = function(num) {};

module.exports = Confusions1;

