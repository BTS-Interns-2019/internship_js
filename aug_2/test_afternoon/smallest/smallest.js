function smallest(num) {
try{
  if (typeof(num)!=="number") throw new Error(message="Requiere un number")
  let numbers=[];
  num=num.toString().split("");
  i=menor(num);
  let minimo=parseInt(num[i]);
  let primero;
  for (let j = 0; j < num.length; j++) {
    val=parseInt(num[j]);
    if(val>minimo){
      primero=j;
      break;
    }
  }
  valorPrimero=num[primero]; 
  arr3=JSON.parse(JSON.stringify(num)) 
  arr3.splice(i,1);
  arr3.splice(primero,1,valPrimero);

  if(primero==0){
    num.splice(i,1);
    num.unshift(minimo)
  }
  else{
    num.splice(i,1,num[primero]);
    num.splice(primero,1,minimo);
  }
  return [parseInt(arr2.join("")), i, 0]
}catch(e){
  return e.message;
}
}
function menor(num2){
  let minimo, k, l=num2.length;
  for (let j = 0; j < l; j++) {
    minimo=Math.min(...num2);
    k=num2.lastIndexOf(minimo.toString());
    if(k!=0)return k;
    else num2=num2.slice(1);
  }
  return 0;
}
console.log(smallest(91111))
//console.log(menor("12345".toString().split("")));

module.exports = smallest;