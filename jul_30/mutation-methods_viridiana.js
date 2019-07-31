var originalArray = [6,4,21,2];
 
function sort(originalArray, callback) {
    var n, i, k, aux;
    n = originalArray.length;
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (originalArray[i] > originalArray[i + 1]) {
                aux = originalArray[i];
                originalArray[i] = originalArray[i + 1];
                originalArray[i + 1] = aux;
               
            }
        }
    }
    return originalArray;
}

console.log(sort(originalArray))


let letras=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"]
function generateSpeed(arr){
let arrar1=[];

arrar1=Array.from(letras).sort(() =>Math.floor(Math.random() * (letras.length)));
return arrar1;
}
console.log(generateSpeed())

function encrypt(baseAlphabet, seed, message){

}

function decrypy(baseAlphabet, seed, encryptedMessage){

}



module.exports={
    sort,
    generateSpeed,
    encrypt,
    decrypy
}