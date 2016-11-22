// Let's try to illustrate the motivation and utility of this:
// https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch1.md

var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {
  if (input == null || input == ''){
    input = 'World';
  }
  return 'Hello, ' + input + '!';
};

module.exports = HelloWorld;
