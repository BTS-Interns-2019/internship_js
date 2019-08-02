function reverse(str) {
  letras="qazwsxedcrfvtgbyhnujmikolpñQAZWSXEDCRFVTGBYHNUJMIKOLPÑ! ·% / ()";
  try{
    if(str==undefined || typeof(str)=="number"){
      throw"Error, needed a string";
    }
    str = str.trim();
    str = str.split(" ");
    for (let i = 0; i < str.length; i++) {
      if((i+1)%2==0){
        str[i] = str[i].split("").reverse().join("");
      }
    }
    str=str.join(" ");
    return str;
  }catch(e){
    return e;
  }
}
console.log(reverse(" this is a second test :O "));
module.exports = reverse;