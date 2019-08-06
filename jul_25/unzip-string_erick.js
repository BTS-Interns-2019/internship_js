function unzipStr(input){
  let splitIn = input.split("");
  let unzipped = ""
  let mult = 1
  for(char of splitIn){
    if(+char % 1 == 0){
      mult = char
    } else if(+char % 1 != 0){
      for(let t = 0; t < mult; t++){
        unzipped += char
      }
    }
  }
   return unzipped
}

module.exports = unzipStr;
  
// console.log(unzipStr("a2bc"));
// console.log(unzipStr("3d332f2a"));
// console.log(unzipStr("abcd"));
// console.log(unzipStr("84urru48ru"));
// console.log(unzipStr("f0f0ferfr"));
// console.log(unzipStr(""));


