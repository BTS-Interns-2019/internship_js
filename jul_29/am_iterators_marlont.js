// Array.forEach() Method
function forEach(array, callback){
  for(var i=0; i<array.length; i++){
    callback(array[i]);
  }
}

// Array.map() Method
function map(array, callback){
  var result = [];

  for(var i=0; i<array.length; i++){
    result[result.length] = callback(array[i]);
  }

  return result;
}

//Array.filter() Method
function filter(array, callback){
  var result = [];
  for(var i=0; i<array.length; i++){
    console.log(result + "Antes");
    var res = callback(array[i]);
    console.log(res);
    if(!!res == true){
      console.log("Si entra");
      result.push(array[i]);
    }
    console.log(result + "Despues");
  }
  return result;
}

//Array.reduce() Method
function reduce(array, callback){
  var result;
  for(var i=0; i<array.length; i++){
    if(i === 0){
      result = callback(0, array[i]);
    } else {
      result = callback(result, array[i]);
    }
  }
  return result;
}

