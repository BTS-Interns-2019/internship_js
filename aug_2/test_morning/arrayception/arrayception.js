//Marlon Esteban Torres Huerta
/**
 * arrayGenerator
 * @param {int} number
 * @returns {array}
 */
function arrayGenerator(number) {
  var array;
  for(var i=0; i<=number; i++){
    array.push(i.toString());
  }

  array = array.splice(0,1,...array);
  return array;
}

module.exports = arrayGenerator;
