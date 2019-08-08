
/** Edgar David Peregrino Jimenez
 * arrayGenerator
 * @param {int} number
 * @returns {array}
 */
function arrayGenerator(number) {
    array = [];
    for (i = 0; i < number; i++){
      array [i] = i;
     }
     array.fill(array,0,1);
      function fills (arr){ 
      if (typeof (fills (arr[0])) == "object" ){
        arr[0].fill(arr,0,1);
      }
    return arr;
     }         
  return fills (array, number);
}


console.log (arrayGenerator(3))
module.exports = arrayGenerator;
