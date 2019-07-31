function sort (cad){
   cad.forEach (() => {
       cad.forEach((val, i) => {
           if (cad[i] > cad[i + 1]){
               aux = cad[i];
               cad.copyWithin(i,i+1,i+2); 
               cad.fill(aux,i+1,i+2);          
           }
       })
   });
  return JSON.stringify(cad, null);
}

//console.log(sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

//console.log(sort(['g','u','r','e','y','o','q','a','c','x','z','r','t','b','h','k','p','p','i','h','g','f','d','d',]));

function sort1 (cad){
   cad=cad.toString().split(",");
    console.log(cad.length)
   cad.forEach (() => {
       cad.forEach((val, i) => {
           if (cad[i] > cad[i + 1]){
               aux = cad[i];
               cad.copyWithin(i,i+1,i+2); 
               cad.fill(aux,i+1,i+2);          
           }
       })
   });
  return JSON.stringify(cad, null);
}

console.log(sort1([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))

console.log([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213].sort())