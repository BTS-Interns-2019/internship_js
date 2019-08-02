//nestor rabbin lira campos
/**
 * arrayGenerator
 * @param {int} number
 * @returns {array}
 */
function arrayGenerator(number) {
  let arr = []
  for(let i = 0; i <= number; i++){
    arr[i] = "" + i
  }
  for(let i = 0; i < arr.length; i++ ){
    if(arr[i] == "0"){
      arr[i] = cero(number)
    }
  }
  return arr;
}
function cero(number){
  let arr = [];
  for(let x = 0; x <= number; x++){
      let arrNum = [];
      for(let j = 0; j <= number; j++){
        arrNum.push("" + j);
      }
      arr.push(arrNum)
  }
  return arr
}
console.log(arrayGenerator(8));

module.exports = arrayGenerator;
