function reverse(str) {
  str=str.trim();
  str=str.split(' ');
  for(let i=1;i<str.length;i+=2){
    let palabra = str[i]
    let ns = ""
    for(let j = palabra.length-1;j>=0;j--){
      ns+=palabra.charAt(j)
    }
    str[i]=ns;
  }
  return str.join(" ");
}

module.exports = reverse;