
/**Emmanuel Rubio Navarro
 * arrayGenerator
 * @param {int} number
 * @returns {array}
 */
function arrayGenerator(number) {
  let arr=[];
  for (let i = 0; i <= number; i++) {
    arr.push(i.toString());
  }
  arr[0]=arr;
  return arr;
}

module.exports = arrayGenerator;
