//-----------------------Sort Function-----------------------------------//
function sort(array, compare){
  if(typeof compare != 'undefined'){
    for(var i=0; i<array.length-1; i++){
      for(var j=i+1; j < array.length; j++){
        var result = compare(array[i], array[j]);
        if(result > 0){
          /*var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
          console.log(array);*/
          var temp = array.slice(i,i+1);
          array.splice(i,1,array[j]);
          array.splice(j,1,temp[0]);
          console.log(array);
        }
      }
    }
  } else {
    for(var i=0; i<array.length-1; i++){
      for(var j=i+1; j < array.length; j++){
        var prim = array[i].toString();
        var segu = array[j].toString();

        if(prim.localeCompare(segu) > 0){
          var temp = array.slice(i,i+1);
          array.splice(i,1,array[j]);
          array.splice(j,1,temp[0]);
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

//-----------------------The Secret Communication-----------------------------------//
function generateSeed(baseAlphabet){
  var seed = baseAlphabet.concat();
    for(var i=0; i<seed.length; i++){
      val_rand = Math.random().toFixed(2)*100 % baseAlphabet.length;
      val_rand = parseInt(val_rand);
      var temp = seed[i];
      seed[i] = seed[val_rand];
      seed[val_rand] = temp;
    } 
  return seed;
}

function encrypt(baseAlphabet, seed, message){
  var encrypted = message.split("");
  for(var i=0; i<encrypted.length; i++){
    next:
    for(var j=0; j<baseAlphabet.length; j++){
      if(encrypted[i] === baseAlphabet[j]){
        encrypted[i] = seed[j];
        break next;
      }
    }
  }
  return encrypted.join("");
}

function decrypt(baseAlphabet, seed, encrypted){
  var decrypted = encrypted.split("");
  for(var i=0; i<decrypted.length; i++){
    termino:
    for(var j=0; j<seed.length; j++){
      if(decrypted[i] === seed[j]){
        decrypted[i] = baseAlphabet[j];
        break termino;
      }
    }
  }
  return decrypted.join("");
}
module.exports = {sort, generateSeed, encrypt, decrypt}