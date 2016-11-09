// execute test with jasmine-node .

var thisjs = require('./this.js');

describe("Hello My Name is", function() {
  var slimShady = new HelloMyNameIs();

  it('says Hello my name is Slim Shady', function() {
    var me = {
      name: "Slim Shady"
    };
    expect(speak.call( me )).toEqual('Hello my name is Slim Shady!');
  });

  it('says Slim Shady', function() {
    var me = {
        name: "Slim Shady"
    };
    expect(identify.call( me )).toEqual('Slim Shady');
  });
});
