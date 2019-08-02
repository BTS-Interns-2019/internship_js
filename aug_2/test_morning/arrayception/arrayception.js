//Estefanía Cano

/**
 * arrayGenerator
 * @param {int} number
 * @returns {array}
 */
function arrayGenerator(number) {
  arr = []
  for(i=0; i<=number; i++) {
    arr.push(i)
  }
  arr = arr.join().split(",")
 
    var index = arr.indexOf('0');

    if (index == 0) {
        arr[index] = arr;
    }
    console.log(arr)
  
  if (arr.length<=1) {
    return 0;
  }
    return arr.push(arrayGenerator(number-1))
    
  }
  // return arr;

arrayGenerator(2)
module.exports = arrayGenerator;
