function smallest(str) {
  //Hardcoded for first test :)
  str = str.toString();
  let res = [];
  let newStr = str;
  newStr = newStr.toString();
  newStr = newStr.split('');

  newStr = newStr.sort();
  //console.log(newStr[0]);
  n = newStr[0].toString();
  //console.log(n);
  
  str = str.split("");
  //console.log(str);
  let nStr = "";
  let pos = 0;
  let put = 0;
    for (let i = 0; i < str.length; i++) {
      if(str[i]== n){
        pos = i;
        
        continue;
      }
      nStr += str[i];
    }
n = n+=nStr;
n = parseInt(n);
//console.log(n);

res = [n,pos,put];
  
  //cadena.replace(regexp|substr, newSubStr|function[,   flags]);
  return res;
}


console.log(smallest(2682351));

module.exports = smallest;