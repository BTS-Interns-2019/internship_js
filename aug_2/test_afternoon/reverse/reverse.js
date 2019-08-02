function reverse(str) {
  if (str == "") return "";
  if(typeof(str) != "string") return "error, ingresa un string";
  str = str.trim().split(" ");
  res = "";
  impar = [];
  for (i = 0; i < str.length; i++) {
    if (i % 2 == 0) res += str[i];//impares
    if (i % 2 == 1) {
      impar = str[i].split("").reverse().join("");
      res += impar;
    }
    res += " "
  }
  res = res.slice(0, -1)
  return res
}

module.exports = reverse;