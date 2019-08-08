// [126235, 2, 0]
function smallest(str) {
  let result = [];
  str = str.toString();
  str = Array.from(str)
  let num = Number.MAX_VALUE;
  cont = 0; 
  for (i=0; i < str.length; i++){
    if (i == 0){
        num1 = str[i];
        ind1 = i;
        inv1 = i + 1;
        cont = cont -2;
      }
      else if (str[i] < num || str[i] == num){
        num = str[i];
        ind = i;
        inv = i + 1;
        cont ++;
      }  
  }

  if (cont == str.length - 3 || cont == str.length - 4) {
    str.splice(ind1,inv1);
    str.push(num1);
    str = str.join("");
    result[0] = parseInt(str);
    result[1] = ind1;
    result [2] = 6;
  } else {
  str.splice(ind, ind);
  console.log(str)
  str.unshift(num);
  str = str.join("");
  result[0] = parseInt(str);
  result[1] = ind;
  result [2] = 0;
  }
  
  return result;
}
console.log(smallest("261235"))

console.log(smallest (83425825));

module.exports = smallest;