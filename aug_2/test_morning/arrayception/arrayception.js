
<<<<<<< HEAD
/**
 * Luis Carlos Gallegos Rodriguez
=======
//  Erick Israel Vazquez Neri
/** 
>>>>>>> 43bed090b2f7dd8105c964b70d1533c34a75e127
 * arrayGenerator
 * @param {int} number
 * @returns {array}
 */

function arrayGenerator(number) {
<<<<<<< HEAD

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
  
>>>>>>> 43bed090b2f7dd8105c964b70d1533c34a75e127
