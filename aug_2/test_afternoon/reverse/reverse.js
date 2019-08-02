function reverse(str) {
try{
  if (typeof(str)!="string") {
    throw new Error(message = "Solo funciona si envias un string como parametro");  
  }
  if(str.length==1)return str;
  return str.split(" ").filter(Boolean).map((val,i)=>{
    if(i%2===1){
      return val.split("").reverse().join("");
    }
    return val;
  }).join(" ");
}catch(e){
  return e.message;
}
}
module.exports = reverse;