var HelloMyNameIs = function() {};

HelloMyNameIs.prototype.identify = function(input) {
  return this.name.toUpperCase();
};

HelloMyNameIs.prototype.speak = function(input) {
  var greeting = "Hello, my name is " + HelloMyNameIs.prototype.identify.call( this );
  return greeting;
};

module.exports = HelloMyNameIs;
