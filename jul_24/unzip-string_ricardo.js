index = 0;
numero = 1;
<<<<<<< HEAD

//var arreglo = "2e2a";

function unzipString(str){
    unziped = "";
=======
unziped = "";
//var arreglo = "2e2a";

function unzipString(str){
>>>>>>> 01e8ad04130e2a84157848dfc12baef064d33bb3
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
<<<<<<< HEAD
console.log(unzipString("22a2b"));

unzipString("22a2b");

=======
console.log(unzipString("221a2b"));
>>>>>>> 01e8ad04130e2a84157848dfc12baef064d33bb3
