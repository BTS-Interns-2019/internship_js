function reverse(str) {
  if(typeof str !== 'string'){
    console.error("ERROR: Input only acepts strings");
    return "";
  }
  str = str.split("");
  for(var i=0; i<str.length; i++){
    if(str[0] === " "){
      str.shift();
    } else {
      break;
    }
  }

  for(var i=str.length-1; i>=0; i--){
    if(str[str.length-1] === " "){
      str.pop();
    } else {
      break;
    }
  }

  str = str.join("");
  if(str === ""){
    return "";
  }
  var arr = str.split(" ");

  arr = arr.filter(function(item){
    return item !== "";
  });
  
  arr = arr.map(function(item,index){
    if(index%2 === 1){
      return item.split("").reverse().join("");
    } else {
      return item;
    }
  })

  str = "";
  arr.forEach(function(element){
    str += element + " ";
  })
  str = str.substring(0,str.length-1);
  return str;
}

module.exports = reverse;