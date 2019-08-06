
//  Erick Israel Vazquez Neri
/** 
 * arrayGenerator
 * @param {int} number
 * @returns {array}
 */
function arrayGenerator(number) {
    let arr = []
    for(let i = 0; i <= number; i++){
      arr.push(i.toString())
      if(arr[i] === "0"){
        arr.splice(i, 1, arrayGenerator(number-1))
      }
    }
    return arr
  }
  
  module.exports = arrayGenerator;
  