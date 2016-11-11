// Let's try to illustrate the motivation and utility of this:
// https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch1.md

var HelloMyNameIs = function() {};

HelloMyNameIs.prototype.identify = function(input) {
  return this.name.toUpperCase();
};

HelloMyNameIs.prototype.speak = function(input) {
  var greeting = "Hello, my name is " + HelloMyNameIs.prototype.identify.call( this );
  return greeting;
};

module.exports = HelloMyNameIs;
