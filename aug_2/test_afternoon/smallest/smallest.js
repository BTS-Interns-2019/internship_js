function smallest(str) {
  // ejemplo1
  let arr1 = [];
  let arr2 = [];
  let ejem1 = str;
  ejem1 = ejem1.toString();
  ejem1 = ejem1.split("");
  // ejemplo2
  let ejem2 = str;
  ejem2 = ejem2.toString();
  ejem2 = ejem2.split("");
  // console.log(ejem1, ejem2,);
  let num = ['1', '2', '3', '4', '5', '6', '7', '8' ,'9']
  let md = num.length-1;
  let temp1 = 0, temp2 = 0;
  let t2 = ejem1.length-1;
  
  //for num <
  for(let i = 0; i < md ; i++ ){
    if(ejem1.includes(num[i])){
      temp1 = ejem1.indexOf(num[i]);
      if(temp1 == 0){
        temp1 = 0;
      }
      //cambiar la posicion
      ejem1.splice(0, 0, ejem1[temp1])
      // elimana el numero 
      delete ejem1[temp1+1]
      ejem1.splice(temp1+1, 1)
      break;
    }
  }
  // nfor num >
  for(let i = md; i > 0; i-- ){
    if(ejem2.includes(num[i])){
      temp2 = ejem2.indexOf(num[i]);
      if(temp2 == t2){
        temp2 = 0;
      }
      //cambiar la posicion
      ejem2.splice(t2+1, 0, ejem2[temp2])
      // elimana el numero 
      delete ejem2[temp2]
      ejem2.splice(temp2, 1)
      break;
    }
  }
  ejem1 = +ejem1.join("");
  arr1.push(ejem1, temp1, 0)

  ejem2 = +ejem2.join("");
  arr2.push(ejem2, temp2, t2+1)
  let menor = ejem1 < ejem2;
  if(menor){
    return arr1
  }
  return arr2 
  
}
module.exports = smallest;