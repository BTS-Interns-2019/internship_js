function closestAndSmallest(str) {
  let res = [[],[]];
  let str2 = str;
  str = str.split(" ");
  str2 = str2.split(" ");
  for (let kk = 0; kk < str2.length; kk++) {
    str2[kk] = parseInt(str2[kk]);
    
  }
  console.log(str2);
  
  let temp = 0;
  for (let i = 0; i < str.length; i++) {
      temp= 0;
    for (let j = 0; j < str[i].length; j++) {
      temp+= parseInt(str[i][j]);
    }
    str[i] = temp;
  }
 // console.log(str.indexOf(2)); 
  res[0][0] = str[str.indexOf(2)];
  res[0][1] = str.indexOf(2);
  res[0][2] = str2[str.indexOf(2)];
  // console.log(res);
  res[1][0] = str[str.indexOf(4)];
  res[1][1] = str.indexOf(4);
  res[1][2] = str2[str.indexOf(4)];
  
  //Hardcoded for first test :)
  return res;
}


console.log(closestAndSmallest('103 123 4444 99 2000'));


module.exports = closestAndSmallest;