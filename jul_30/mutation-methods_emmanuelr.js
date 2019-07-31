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

function generateSeed(arr){
    arr2=[];
    arr.forEach(val => {
        arr2.splice(Math.random, 0, val);        
    });
    arr2.filter(val=> val==undefined)
    return arr2;
}
alphabet="abcdefghijklmnopqrstuvwxyz".split('');
console.log(generateSeed(alphabet));
console.log(encrypt(alphabet, generateSeed(alphabet), 'hola amigos'));

function encrypt(baseAlphabet, seed, message){
    cadena="";
    message.split("").forEach((val,i) => {
        
    });
}
function decrypt(baseAlphabet, seed, message){

}
module.exports={
    sort,
    generateSeed,
    encrypt,
    decrypt
}