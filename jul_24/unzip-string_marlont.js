function unzipString(zipped){
  var unzipped = "";
  var cantidad = 0;

  for(var i=0; i<zipped.length; i++){
    if((zipped.charCodeAt(i) >= 48) && (zipped.charCodeAt(i) <= 57)){
        cantidad = zipped.charAt(i);
    } else if(cantidad > 0) {
      for(var j=0; j<cantidad; j++){
        unzipped = unzipped + zipped.charAt(i);
      }
    } else {
      unzipped = unzipped + zipped.charAt(i);
      cantidad = 0;
    }
  }
  return unzipped;
}

module.exports = unzipString;function unzipString(zipped){
  var unzipped = "";
  var cantidad = 0;

  for(var i=0; i<zipped.length; i++){
    if((zipped.charCodeAt(i) >= 48) && (zipped.charCodeAt(i) <= 57)){
        cantidad = zipped.charAt(i);
    } else if(cantidad > 0) {
      for(var j=0; j<cantidad; j++){
        unzipped = unzipped + zipped.charAt(i);
      }
    } else {
      unzipped = unzipped + zipped.charAt(i);
      cantidad = 0;
    }
  }
  return unzipped;
}

module.exports = unzipString;
