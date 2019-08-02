// Sergio Manuel Rivera Vazquez
/**
 * arrayGenerator
 * @param {int} number
 * @returns {array}
 */
function arrayGenerator(number) {
  //
  //
  //
  //
  //
  //
  //
  //
  //
  if (number == 0) {
    return "basura"
  }
  
  return [[arrayGenerator(number-1)]];
}

module.exports = arrayGenerator;


console.log(arrayGenerator(5));
console.log(arrayGenerator(7));
