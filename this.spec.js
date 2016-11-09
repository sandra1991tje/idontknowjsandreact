// execute test with jasmine-node .

var thisjs = require('./this.js');

describe("Hello My Name is", function() {
  var slimShady = new HelloMyNameIs();

  it('says hello my name is slim shady', function() {
    var me = {
        name: "slim shady"
    };
    expect(speak.call( me )).toEqual('hello my name is slim shady!');
  });

  it('says hello my name is slim shady', function() {
    var me = {
        name: "slim shady"
    };
    expect(identify.call( me )).toEqual('slim shady');
  });
});
