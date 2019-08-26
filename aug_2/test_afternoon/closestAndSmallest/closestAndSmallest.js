function closestAndSmallest(str) {
  var arr = [];
  str = str.trim().split(" ");
for (i = 0; i < str.length; i++){
    let cont = 0;
    let val = str[i];
    val = val.split("");
    for (j=0; j<val.length; j ++){
        cont = cont + parseInt(val[j]);
        arr[i] = cont;
    }
    var dif = [];
    for (i = 0; i < arr.length - 1; i ++){
      dif[i] = arr[i] - arr[i + 1]
    }

    console.log(dif)


    
   // val = val.reverse(val).join("");
    //str[i] = val;
    console.log(arr)
  }
 console.log(str);
  
  
  
  return [[2, 4, 2000], [4, 0, 103]];
}
console.log(closestAndSmallest('444 2000 445 544'))

return output;
}catch(e){
  return e.message;
}
}
console.log(closestAndSmallest("239382 162 254765 182 485944 468751 49780 108 54"));
//['103 123 4444 99 2000', [[2, 4, 2000], [4, 0, 103]]],
module.exports = closestAndSmallest;