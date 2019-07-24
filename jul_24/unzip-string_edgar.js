
unzipstring ("a2bc")
unzipstring ("abc");
unzipstring ("3D2a5d2f")
unzipstring ("3d332f2a");
function unzipstring (string){
    zip = "";
     for (i = 0; i < string.length; i ++){
           aux = string[i];
           if (isNaN (aux) == false && isNaN(string [i+1])){
               for (j = 1; j < aux; j++){
                zip += string [i + 1];   
               }
           } else if (isNaN(aux)) {
               zip += string [i];
     } 
}
console.log(zip);
}

module.exports = unzipString;