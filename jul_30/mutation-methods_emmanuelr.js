function sort(arr, callBack){
    if(!callBack)callBack=(a,b)=>a.toString().localeCompare(b.toString());
    let n=0;
    let l=arr.length;
    do{
        n=0;
        for (let i = 1; i < l; i++) {
            if(callBack(arr[i-1], arr[i])>0){
                temp=arr[i-1];
                arr[i-1]=arr[i];
                arr[i]=temp;
                n=i;
            }
        }
        l=n;
    }while(n!=0);
    return arr;
}

/*function generateSeed(arr){
    arr2=[];
    arr.forEach(val => {
        arr2.splice(Math.random, 0, val);        
    });
    arr2.filter(val=> val==undefined)
    return arr2;
}*/
function generateSeed(arr){
    const x = (arr.length*2)-1;
    let arr2=new Array(x+1);
    arr.forEach(val => {
        y=Math.random()*(x);
        arr2.splice(y, 0, val);        
    });    
    return arr2.filter(Boolean);
}

// alphabet="abcdefghijklmnopqrstuvwxyz".split('');
// console.log(generateSeed(alphabet));
// console.log(encriptado=encrypt(alphabet, generateSeed(alphabet), 'hola amigos'));
// console.log(decrypt(alphabet, generateSeed(alphabet), encriptado));


function encrypt(baseAlphabet, seed, message){
    cadena="";
    message.split("").forEach((val) => {
       indice=baseAlphabet.indexOf(val);
       if(indice>=0)cadena+=seed[indice];
       else cadena+=val;
    });
    return cadena;
}
function decrypt(baseAlphabet, seed, message){
    cadena="";
    message.split("").forEach((val) => {
        indice=seed.indexOf(val);
        if(indice>=0)cadena+=baseAlphabet[indice];
        else cadena+=val;
     });
     return cadena;
}
module.exports={
    sort,
    generateSeed,
    encrypt,
    decrypt
}