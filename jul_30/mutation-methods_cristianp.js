function sort(arre, callback){
    if(Array.isArray(arre))
    {
        if(callback==undefined){
        arre.forEach(()=>{
            arre.forEach((valor, i)=>{
                    if(arre[i] > arre[i+1]){
                        aux = arre[i];
                        arre[i] = arre[i+1];
                        arre[i+1]=aux;
                    }
                })
            })
        }
                else{
                    arre.forEach(()=>{
                        arre.forEach((valor, ia )=>{
                            if(callback(arre[ia], arre[ia+1])>0 ){
                                aux = arre[ia];
                                arre.splice(ia, 1, arre[ia+1]);
                                arre.splice(ia + 1,1,aux);
                                /*arre[i] = arre[i+1];
                                arre[i+1]=aux;*/
                            }
                        })
                    }) 
                    
                }
        return arre;
    }else{
        return "Favor de ingresar un arreglo";
    }
}

function generateSeed(arre){
    arre2=[];
    arre.forEach(val=>{
        arre2.splice(Math.random, 0, val);
    });
    arre2.filter(v=> v===undefined)
    return arre2;
}
//letras="abcdefghijklmnopqrst".split('');
//console.log(generateSeed(letras));
function encrypt(baseAlphabet,seed,message){
    dev="";
    message = message.split("");
    message.forEach((v)=>{
        i=baseAlphabet.indexOf(v);
        if(i>=0){
            dev+=seed[i];
        }else{
            dev+=v;
        }
    })
    return dev;
}

function decrypt(baseAlphabet, seed, message){
    dev="";
    message = message.split("");
    message.forEach((v)=>{
        i=seed.indexOf(v);
        if(i>=0){
            dev+=baseAlphabet[i];
        }else{
            dev+=v;
        }
    })
    return dev;
}
/*console.log(sort(["ab","asdf","asd","tr","ax"] ));
letras="qazwsxedcrfvtgbyhnujmikolpñ".split('');
console.log(generateSeed(letras));
console.log(secreto=encrypt(letras, generateSeed(letras), 'hola amigos'));
console.log(decrypt(letras, generateSeed(letras), secreto));//*/
module.exports = {sort, generateSeed,encrypt,decrypt};