  // Ricardo Martín del Campo Loza
/**
 * arrayGenerator
 * @param {int} number
 * @returns {array}
 */

function arrayGenerator(number) {
  if( !isNaN(number)){
  let finalArray = [];
  arrayBase = [];
  let j = 0;
  for (i = 0; i <= number; i++) {
    arrayBase.push(i.toString());
  }
  finalArray = arrayBase.slice();
while( j <= number){    //poner loop despues de las pruebas while(true){
    finalArray[0]=arrayBase;
    arrayBase = finalArray.slice()
    j++
}
  return finalArray;
}else return false;
}




console.log(arrayGenerator(8))

module.exports = arrayGenerator;
