
function reverse(str) {
  //console.log(str)
  if (str == ""){
  return str;
  } else {
str = str.trim().split(" ");
for (i = 0; i < str.length; i++){
  if ((i % 2) != 0){
    let val = str[i];
    val = val.trim().split("");
    val = val.reverse(val).join("");
    str[i] = val;
  }
}
  }
str = str.join(" ").toString();
 return str;
}

console.log(reverse(' hola amigo como estas '))

module.exports = reverse;