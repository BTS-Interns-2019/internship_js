function closestAndSmallest(str) {
try{
  if (typeof(str)!=="string") throw new Error(message="Requiere un string")
  if (str.length==0) throw new Error(message="La cadena está vacía")
  str=str.split(" ").filter(Boolean);
  sumas=str.map(x=>parseInt(x.split("").reduce((acc, y)=>parseInt(acc)+parseInt(y))))
  let indexA, indexB, dif=Math.max(...sumas);
  sumas.forEach((val,i)=>{
    sumas2=JSON.parse(JSON.stringify(sumas));
    sumas2.splice(i,1);
    //val es el numero que falta en sumas2
    sumas2.forEach((numero,j)=>{
      difTemp=Math.abs(val-numero);
      if (difTemp<dif || (difTemp==dif && val+numero<sumas[indexA]+sumas[indexB])){
        dif=difTemp;
        indexA=i;
        indexB=j+1;
      }
    })
  })
  if(sumas[indexA]>sumas[indexB]){
    aux=indexA;
    indexA=indexB;
    indexB=aux;
  }
  output=[[sumas[indexA], indexA, parseInt(str[indexA])],[sumas[indexB], indexB, parseInt(str[indexB])]];

return output;
}catch(e){
  return e.message;
}
}
console.log(closestAndSmallest("239382 162 254765 182 485944 468751 49780 108 54"));
//['103 123 4444 99 2000', [[2, 4, 2000], [4, 0, 103]]],
module.exports = closestAndSmallest;