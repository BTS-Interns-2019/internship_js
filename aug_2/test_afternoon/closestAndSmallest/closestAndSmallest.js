function closestAndSmallest(str) {
  const str1 = str
  let res = []
  let arr = str.split(" ");
  // console.log(arr, str1)
  for(let i = 0; i<arr.length; i++){
    var temp = 0;
    for(let x = 0; x <arr[i].length; x++){
      temp += +arr[i][x]
    }
    arr[i] = temp;
  }
  let menor = Math.min.apply(null, arr);
  res.push(menor)
  console.log(menor, arr.indexOf(menor));
  
}
console.log(closestAndSmallest('103 123 4444 99 2000'));

module.exports = closestAndSmallest;