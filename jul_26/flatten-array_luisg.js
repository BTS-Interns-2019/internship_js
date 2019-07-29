function flattenArray(array){
    if(!Array.isArray(array)){
      throw "NoArrayException: "+array + " No es un arreglo"
    }else{
 let res=[];
 for(let p of array){
     if(!Array.isArray(p)){
       res.push(p);
     }else{
         let ax = flattenArray(p);
         for(let y of ax){
             res.push(y);
         }
     }
 }
 return res;
}
}
console.log(flatterArray([1,2,['a',"b",],3,4])); 
console.log(flatterArray([])); 
console.log(flattenArray([1,2,['hola',["b","x"]],3,4])); 
console.log(flattenArray([1,2,[{foo:'bar'},"b"],3,4]));
try{ 
console.log(flattenArray(0)); 
}catch(e){
    console.log(e);
}

module.exports = flattenArray;