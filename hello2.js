var HelloMyNameIs = function() {};

HelloMyNameIs.prototype.speak = function( context ) {
  var strIn= context.split(" ");
  var strOut = "";
  for(i=0;i<strIn.length;i++){
    strOut = strOut.concat(strIn[i].length+strIn[i] + " ");
  }

  
  return strOut.toUpperCase();
};

module.exports = HelloMyNameIs;
