module.exports = unzipString;

function unzipString(word){
    let res = "";
    let auxw = word;
    let aux = [];
    //console.log("VALOR EN INSTANCIA "+word);
    for(let i=0;i<word.length;i++){
        //console.log("primer while");
        //console.log("word "+word);
        //console.log("aux "+auxw);
        //console.log("res "+res);
        aux = [];
        if(isNaN(auxw.charAt(0))==false){
            //console.log("condicion de tener un numero");
            let c=auxw.charAt(0);
            //console.log("c = "+c);
            auxw=auxw.substring(1,auxw.length);
            //console.log("aux "+auxw);
            if(isNaN(auxw.charAt(0))==false){
                //console.log("lo ignora");
            }else{
                //console.log("lo toma");
                for(let v=0;v<auxw.length;v++){
                    //console.log("aux "+aux[v]);
                    //console.log("v "+v);
                    if(isNaN(auxw.charAt(v))==false)break;
                    aux.push(auxw.charAt(v));
                }
                for(let j in aux){
                    res = res+aux[j].repeat(parseInt(c));
                }
                auxw=auxw.substring(aux.length,auxw.length);
            }
        }else{
            //console.log("si no es numero");
            res=res+auxw.charAt(0);
            auxw=auxw.substring(1,auxw.length);
        }
    }
    return res;
}

console.log(unzipString('a2bc'));
console.log(unzipString('3D2a5d2f'));
console.log(unzipString('3d332f2a'));
console.log(unzipString('abcd'));
console.log(unzipString(''));
console.log(unzipString('22abc1d'));//aabbccd