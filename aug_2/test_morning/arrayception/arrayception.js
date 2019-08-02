// David Martin Silva Cruz
/**
 * arrayGenerator
 * @param {int} number
 * @returns {array}
 */

number = 3;
arrayGenerator(3);

function arrayGenerator(number) {
  array = []
  for (i = 0; i <= number; i++) {
    if (i == 0) {
      array[0] = arrayGenerator(number);
    } else {
      array[i] = String(i);
    }
    console.log(array);
  }
  return array
}

module.exports = arrayGenerator;
