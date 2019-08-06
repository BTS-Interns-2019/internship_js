function reverse(str) {
  if(str.length < 1 || str == NaN){return ""}
  if(str[0] == " "){str =  str.substring(1)}
  str =  str.split(" ");
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    if(i %2 == 0){
      continue;
    }else{

      str[i] = str[i].split("");
      console.log(str[i]);  
      str[i].reverse();
      console.log(str[i]);
      str[i].toString();
      let temp1 = "";
      str[i].forEach(element => {
        temp1+=element[0];
      });
      console.log(str[i]);
      str[i] = temp1;
      if(i < str.length){ str[i] += " "}
      
      
      
    }
    console.log(str[i+1]);

  }
  str.forEach(element => {
    temp+=element;
    temp+=" ";
  });
  str = temp;
  console.log(str.length);
  console.log(str);
  str = str.replace("  "," ");
  str = str.replace("  "," ");
  str = str.replace("  "," ");
  str = str.replace("  "," ");
  str = str.replace("  "," ");
  str = str.replace("  "," ");
  console.log(str.length);
  console.log(str);
  
  if(str[str.length] == " "){
    

  } 
  console.log(str.length);
  str =  str.substring(0,str.length-1);
  
  return str;
}


console.log(reverse(' this is a second test :O '));

module.exports = reverse;