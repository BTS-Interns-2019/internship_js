function unzipString(word){
    let res = "";
    let auxw = word;
    //console.log("VALOR EN INSTANCIA "+word);
    for(let i=0;i<word.length;i++){
        //console.log("primer while");
        //console.log("word "+word);
        //console.log("aux "+auxw);
        //console.log("res "+res);
        var c = auxw.charAt(0);
        if((isNaN(c)==false && isNaN(auxw.charAt(1))==true)){
            //console.log("c = "+c);
            //console.log("condicion de tener un numero");
            auxw = auxw.substring(1,auxw.length);
            if(hayNums(auxw)==true){
                //console.log("si existen todavia numeros");
                res = res+auxw.charAt(0).repeat(parseInt(c));
                auxw = auxw.substring(1,auxw.length);
                //console.log("aux "+auxw);
            }else{
                //console.log("si ya no existen numeros");
                //console.log("word "+word);
                //console.log("aux "+auxw);
                for(let j=0;j<auxw.length;j++){
                    //console.log(j);
                    //console.log("auxw["+j+"] = "+auxw.charAt(j));
                    res = res+auxw.charAt(j).repeat(parseInt(c));
                }
                //console.log("res "+res);
                break;
            }
        }else if(isNaN(c)==false && isNaN(auxw.charAt(1))==false){
            //console.log("si no es numero");
            auxw=auxw.substring(1,auxw.length);
        }else{
            res=res+c;
            auxw=auxw.substring(1,auxw.length);
        }
        //console.log("i "+i);
    }
    return res;
}
function hayNums(word){
    for(let i=0;i<word.length;i++){
        if(isNaN(word.charAt(i))==false)return true;
    }
    return false;
}

console.log(unzipString('a2bc'));
console.log(unzipString('3D2a5d2f'));
console.log(unzipString('3d332f2a'));
console.log(unzipString('abcd'));
console.log(unzipString(''));