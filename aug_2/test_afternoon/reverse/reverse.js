function reverse(str) {
<<<<<<< HEAD
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
=======
  let newStr = str.split(" ")
  
  for(let i = 0; i < newStr.length; i++){
    if(i % 2 !== 0){
      newStr[i] = newStr[i].split('').reverse().join('')
    }
  }
  return newStr.join(' ')
>>>>>>> 43bed090b2f7dd8105c964b70d1533c34a75e127
}

module.exports = reverse;