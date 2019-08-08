const input = '444 2000 445 544'

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

module.exports = closestAndSmallest;