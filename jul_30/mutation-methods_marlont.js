function sort(array, compare){
  if(typeof compare != 'undefined'){
    for(var i=0; i<array.length-1; i++){
      for(var j=i+1; j < array.length; j++){
        var result = compare(array[i], array[j]);
        if(result > 0){
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
          console.log(array);
        }
      }
    }
  } else {
    for(var i=0; i<array.length-1; i++){
      for(var j=i+1; j < array.length; j++){
        var prim = array[i].toString;
        var segu = array[j].toString;
        if(prim.localeCompare(segu) > 0){
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
          console.log(array);
        }
      }
    }
  }
  return array;
}

var ascendente = function(a,b){
  return a-b;
}

var descendente = function(a,b){
    return b-a;
}
