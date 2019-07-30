function sort(arry) {
    arry.copyWithin(-2, 3, 4);
    arry.copyWithin(0,5,6);
    arr.unshift();
    arry.push(99,66);
    const l = arry.length;
    for (let i = 0; i < l; i++ ) {
      for (let j = 0; j < l - 1 - i; j++ ) {
        if ( arry[j].toString() > arry[j+1].toString() ) {
          [arry[j], arry[j+1]] = [arry[j+1], arry[j]];
        }
      }
    }
    return arrySergio;
}  
  const arr = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];

console.log(sort(arr));

console.log(arr.sort());

