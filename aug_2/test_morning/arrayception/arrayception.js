
/**Itati Viridiana De la rocha Escobedo
 * arrayGenerator
 * @param {int} number
 * @returns {array}
 */


function arrayGenerator(number) {
  let result=[];
  let arrayD=[];
  arrayD[0]=result;
  
  for(i=0; i<=number; i++){
   result+=i;
  }
   while(arrayD=result){ 
     
     console.log(arrayD)
  }
    
    return arrayD.split('')
  }
  
  
  arrayGenerator(8)

module.exports = arrayGenerator;
