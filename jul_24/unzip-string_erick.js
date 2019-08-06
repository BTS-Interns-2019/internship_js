function unzipStr(input){
  let splitIn = input.split("")
  let unzip = ""
  let mult = 1
  for(char of splitIn){
    if(+char % 1 == 0){
      mult = char
    } else if(+char % 1 != 0){
      for(let t = 0; t < mult; t++){
        unzip += char
      }
    }
  }
   return unzip
}

  
// console.log(unzipStr("a2bc"));
// console.log(unzipStr("3d332f2a"));
// console.log(unzipStr("abcd"));
// console.log(unzipStr(""));

module.exports = unzipString;

