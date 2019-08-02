// Sergio Manuel Rivera Vazquez
/**
 * arrayGenerator
 * @param {int} number
 * @returns {array}
 */
function arrayGenerator(number) {

  
  return [[number += number.toString();&$%&$/(&%$"&(&()(&%/$(%I( ")][arrayGenerator(number-1)]];
}

module.exports = arrayGenerator;


console.log(arrayGenerator(5));
console.log(arrayGenerator(7));
