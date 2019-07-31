function avoidingFire(){
  var cantidad = 0;
  var candles = [];
  for(var i=0; i<arguments.length; i++){
    candles = candles.concat(arguments[i]);
  }
  candles.sort((a,b) => b-a);
  candles.forEach(function(item,index,array){
    if(item == array[0]){
      cantidad++;
    }
  });
  return cantidad;
}

module.exports = avoidingFire;