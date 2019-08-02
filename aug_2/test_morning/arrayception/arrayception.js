
/**
 * Luis Carlos Gallegos Rodriguez
 * arrayGenerator
 * @param {int} number
 * @returns {array}
 */

function arrayGenerator(number) {

  var inner = 0;
  let ar = generator()
  function generator() {
    let arr = []
    for (let i = 0; i <= number; i++) {
      arr.push(i.toString())
      inner++;
      if (inner < 999) {
        arr[0] = generator(number)
      }
    }
    return arr

  }
  return ar;
}

const result = arrayGenerator(79);
const array15th = result[0][0][0][0][0][0][0][0][0][0][0][0][0][0][0];
console.log(array15th[array15th.length - 2])
//console.log(result)
module.exports = arrayGenerator;
