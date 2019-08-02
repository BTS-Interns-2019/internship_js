//Marlon Esteban Torres Huerta

/**
 * arrayGenerator
 * @param {int} number
 * @returns {array}
 */
function arrayGenerator(number) {
  var arr = []
  for(var i=0; i<=number; i++){
    arr.push(i.toString());
  }
  if(arreglo.length == 9){
    return arr;
  }
  var arreglo = [arr.splice(0,1,arrayGenerator(number)), arr];
  console.log(arreglo);
  return arr;
}

module.exports = arrayGenerator;
