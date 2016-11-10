// Let's try to illustrate the motivation and utility of this:
// https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch1.md

var HelloMyNameIs = function() {};

HelloMyNameIs.prototype.identify = function( context ) {
  return context.name.toUpperCase();
};

HelloMyNameIs.prototype.speak = function( context ) {
  var greeting = "Hello, my name is " + HelloMyNameIs.prototype.identify( context );
  return greeting;
};

module.exports = HelloMyNameIs;
