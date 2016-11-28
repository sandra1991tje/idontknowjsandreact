var HelloMyNameIs = function() {};

HelloMyNameIs.prototype.speak = function( context ) {
  var strIn= context.split(" ");
  var strOut = "";
  for(i = 0; i < strIn.length; i++){
    strOut = strOut.concat(strIn[i].length+strIn[i] + " ");
  }
  // remove last line break
  strOut = strOut.slice(0, - 1);
  
  return strOut.toUpperCase();
};

module.exports = HelloMyNameIs;
