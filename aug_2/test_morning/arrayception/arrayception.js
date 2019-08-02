// Hector Soto Garcia
/**
 * arrayGenerator
 * @param {int} number
 * @returns {array}
 */
function arrayGenerator(number, counter = number) {
  const resultArray = [];
  
  for (let i = 0; i <= number; i++) {
    resultArray.push(i.toString());
    if (counter !== 0 && i === 0) {
      resultArray[0] = arrayGenerator(number, counter - 1);
    }
  }

  return resultArray;
}

module.exports = arrayGenerator;
