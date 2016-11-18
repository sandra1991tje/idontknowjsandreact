// test for hello.js
// execute test with: jasmine-node .

var SagWas = require('./hello2.js');

describe("Returns a string  ", function() {
  var slimShady = new SagWas();

  it('says Hello my name is Slim Shady', function() {
    expect(slimShady.speak( "SLIM SHADY Loremi" )).toEqual('4SLIM 5SHADY 6LOREMI');
  });

  // test to print speak argument with amount of character as a prefix
  // eg. slimShady.speak( "SLIM SHADY" ) => "4SLIM 5SHADY"
  // eg. slimShady.speak( "SLIM SHADY Lorem" ) => "4SLIM 5SHADY 6LOREMI"
});
