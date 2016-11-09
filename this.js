var HelloMyNameIs = function() {};

HelloMyNameIs.prototype.hello = function(input) {
    return input;
};

function identify() {
    return this.name.toUpperCase();
}

function speak() {
    var greeting = "Hello, I'm " + identify.call( this );
    return greeting;
}
