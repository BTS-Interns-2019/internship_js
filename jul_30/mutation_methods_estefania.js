
function sort(arr) {
    var n, i, k, aux;
    n = arr.length;  
    // Algoritmo de burbuja
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (arr[i] > arr[i + 1]) {
                aux = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = aux;
            }
        }
    }
 return arr    
}


var arreglo = [4, 2, 5, 1, 3]

// console.log(arreglo.sort())
// sort();
console.log(sort(arreglo))

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);


//generateSeed
function generateSeed(arr) {
    return Array.from(arr).sort(() => Math.floor(Math.random() * (5) + (-1)));
}
console.log(generateSeed(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"]))

//encrypt
function encrypt(baseAlphabet, seed, encryptedMessage) {
    var str = ''
    encryptedMessage = encryptedMessage.toLowerCase().split('')
    console.log(encryptedMessage)
    encryptedMessage.forEach(element => {
        var i =baseAlphabet.indexOf(element)
        console.log(i);
        if(i >= 0) {
            str += seed[i];
        } else {
            str += element
        }
    });
    return str
}
console.log(encrypt(['a', 'b', 'd', 'r', 't', 's', 'd', 'n', 'p', 'i', 'g'], [ 'n', 't', 's', 'a', 'i', 'd', 'b', 'p', 'r', 'g', 'd' ], 'Aquí hay demasiados pingüinos' ))

//decrypt
function decrypt(baseAlphabet, seed, encryptedMessage) {
    var str = ''
    encryptedMessage = encryptedMessage.toLowerCase().split('')
    console.log(encryptedMessage)
    encryptedMessage.forEach(element => {
        var i =seed.indexOf(element)
        console.log(i);
        if(i >= 0) {
            str += baseAlphabet[i];
        } else {
            str += element
        }
    });
    return str
}
console.log(decrypt(['a', 'b', 'd', 'r', 't', 's', 'd', 'n', 'p', 'i', 'g'], [ 'n', 't', 's', 'a', 'i', 'd', 'b', 'p', 'r', 'g', 'd' ], 'nquí hny semndgnsod rgpdügpod' ))

module.exports = {
    sort,
    generateSeed,
    encrypt,
    decrypt,
}