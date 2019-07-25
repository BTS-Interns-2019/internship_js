index = 0;
numero = 1;

//var arreglo = "2e2a";

function unzipString(str){
    index = 0;
numero = 1;
    unziped = "";
    while(index < str.length){
        if(!isNaN(str[index])){
            //console.log("Numero");
            numero = str[index];
            //console.log(numero);
        }else{
            //console.log("No numero");
            for(i = 0; i < numero ; i++ ){
                unziped+=str[index];
            }
        }
    index++;
}
return unziped;
}
console.log(unzipString("22ab2c"));
console.log(unzipString("22ab2c"));
console.log(unzipString("22ab2c"));


module.exports = unzipString;

