/**
 * Cristian Humberto Plascencia Angulo
 * arrayGenerator
 * @param {int} number
 * @returns {array}
 */
function arrayGenerator(number) {
  arr = [];
  a=0;
  for(i=0;i<=number;i++){
    arr.push(""+i);
  }
  regresa(arr,a)
  function regresa(arre, a){
    if(a<=8000){
      a++;
      arre[0]=[];
      for(i=0;i<=number;i++){
        arre[0].push(""+i);
      }
      regresa(arre[0],a);
    }
  }
  
  return arr;
  //return JSON.stringify(arr,null);
}
//console.log(JSON.stringify(arrayGenerator(10),null));
//console.log(arrayGenerator(5));
module.exports = arrayGenerator;
