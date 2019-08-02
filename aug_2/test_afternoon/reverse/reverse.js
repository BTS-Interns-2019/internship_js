function reverse(str) {
  if(!str){return str}
  str = str.trim().split(" ");
  for(let i = 1; i < str.length; i++){
    if(i % 2 != 0){
      str[i] = str[i].split("").reverse().join("");
    }
  }
  str = str.join(" ")
  return str;
}
console.log(reverse('  !"·%/()= !"·%/()= !"·%/()=  '));

module.exports = reverse;