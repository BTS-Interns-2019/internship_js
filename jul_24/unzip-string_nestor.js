function unzipString(data){
    data = data.split("");
    var res ='';
    for (let i = 0; i < data.length; i++) {
        if(isNaN(data[i])){

        }
        
    }
    return res;
}
console.log(unzipString("1233abc")); // aaabbbccc
✕ console.log(unzipString("3abc")) //=> aaabbbccc (5ms)
  ✕ console.log(unzipString("8abc")) // => aaaaaaaabbbbbbbbcccccccc
  ✕ console.log(unzipString("2abc")) //=> aabbcc (1ms)
  ✕ console.log(unzipString("abcd")) //=> abcd
  ✓ console.log(unzipString(""))
  ✕ console.log(unzipString("1233abc")) // => aaabbbccc
  ✕ console.log(unzipString("22abc1d")) // => aabbccd (1ms)

module.exports = unzipString;    