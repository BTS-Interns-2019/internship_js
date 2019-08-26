//Estefanía Cano

//  Erick Israel Vazquez Neri
/** 
 * arrayGenerator
 * @param {int} number
 * @returns {array}
 */
function arrayGenerator(number) {
<<<<<<< HEAD
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
=======
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
  
>>>>>>> master
