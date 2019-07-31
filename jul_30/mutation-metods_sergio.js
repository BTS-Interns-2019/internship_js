function sort(arry) {
  let sergioArry = arry.filter(word => word == undefined);
  for (let i = 0; i < arry.length; i++) {
    if(arry[i] == undefined){
      arry.splice(i,1);
    }   
  }
console.log(arry);

    const l = arry.length;
    for (let i = 0; i < l; i++ ) {
      for (let j = 0; j < l - 1 - i; j++ ) {
        if ( arry[j].toString() > arry[j+1].toString() ) {
          [arry[j], arry[j+1]] = [arry[j+1], arry[j]];
        }
      }
    }

    arry.push(...sergioArry);
 //   console.log(arry);
    
    return arry;
}  
  const arr = [10, 4, 40, 32,undefined, 67, 12, 43,undefined, 31, 65, 1];

//console.log(sort(arr));


//console.log(arr.sort());

