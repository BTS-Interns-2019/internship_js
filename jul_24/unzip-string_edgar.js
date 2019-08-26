
console.log (unzipString ("8abc"));
console.log (unzipString ("abc"));
console.log (unzipString ("3D2a5d2f"));
console.log (unzipString ("1233abc"));
function unzipString (string){
    zip = "";
    aux = 0;
    for (i = 0; i < string.length; i ++){
        if (isNaN(string[i]) == false){
        aux = string[i];
        } if (isNaN(string[i])){
            for (j = 1; j <= aux; j ++){
                zip += string[i];
            }
        } if (isNaN(string[i]) && aux == 0){
            zip += string[i];
        }
    } 
    return zip;
}

module.exports = unzipString;