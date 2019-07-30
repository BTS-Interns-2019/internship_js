function sort (cad){
   cad.forEach (() => {
       cad.forEach((val, i) => {
           if (cad[i] > cad[i + 1]){
               aux = cad[i];
               cad[i] = cad[i + 1];
               cad[i + 1] = aux;
           }
       })
   });
  return cad;
}

console.log(sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));