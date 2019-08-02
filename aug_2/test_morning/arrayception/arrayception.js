// David Martin Silva Cruz
/**
 * arrayGenerator
 * @param {int} number
 * @returns {array}
 */

arrayGenerator(3);
function arrayGenerator(number) {

  array = new Array(number+1);
  // array.fill(0);
  for (i = number; i >= 0; i--) {
    if (i != 0) {
      array[i] = String(i);
    } else {

      array[i] =  arrayGenerator(number); 
    }
  }
}

module.exports = arrayGenerator;
