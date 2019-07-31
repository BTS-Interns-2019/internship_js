let sortEspecial;
let obj1 = [
    {cost: 20, name: "hola"},
    {cost: 15, name: "Jose"},
    1
];

function sort(array, callback) {
    if (Array.isArray(array)) {

        let aux = 0;
        let result = [];
        // array= array.toString().split(",")
        array.forEach((value, idx,) => {
            array.forEach((val, index) => {
                if (callback === undefined) {
                    if (array[index] > array[index + 1]) {
                        aux = array[index] + "";
                        array.splice(index, 1, array[index + 1]);
                        array.splice(index + 1, 1, aux);
                    }
                } else {
                    array.forEach(() => {
                        array.forEach((val, index) => {
                            if (callback(array[index], array[index + 1])) {
                                aux = array[index];
                                array.splice(index, 1, array[index + 1]);
                                array.splice(index + 1, 1, aux);
                            }
                        })
                    });
                }
            })
        });
        for (let i = 0; i < array.length; i++) {
            result[i] = array[i] * 1
        }
        return array;
    } else {
        return "Solo arreglos";
    }
}

console.log(sort([6, 4, 21, 2]));
// console.log(sort([2, 5, 8, 9, 1], (a,b) => {
//     return(a>b)
// }));
//[2, 5, 8, 9, 1]

///The secret communication
let stringBase = "adios";
let alphabet = ["a", "e", "i", "o", "u", "g"];
let message = stringBase.split("");
let seed;
let encryptMessage = "";
let deecryptMessage = "";
base = alphabet.splice();

function generateSeed(baseAlpha) {
    for (let i = 0; i < baseAlpha.length; i++) {
        let rndmPos = Math.floor(Math.random() * i);
        let temp = baseAlpha[i];
        baseAlpha[i] = baseAlpha[rndmPos]
        baseAlpha[rndmPos] = temp
    }
    seed = baseAlpha
    return seed
}

console.log(alphabet);
console.log(generateSeed(alphabet.concat()))


function encrypt(baseAlphabet, seed, message) {
    let result = "";
    for (i = 0; i < message.length; i++) {
        if (baseAlphabet.includes(message[i])) {
            let letterOr = baseAlphabet.indexOf(message[i]);
            let lettEnc = seed.indexOf(message[i]);
            message[i] = seed[letterOr];
            result = message;
        }

    }
    encryptMessage = result.join("");
    return encryptMessage;
}

console.log(encrypt(alphabet, seed, message));

function decrypt(baseAlphabet, seed, encMessage) {
    let result = "";
    for (let i = 0; i < message.length; i++) {
        if (alphabet.includes(message[i])) {
            let letterOr = baseAlphabet.indexOf(message[i])
            let lettEnc = seed.indexOf(message[i])
            message[i] = alphabet[lettEnc];
            result = message
        }

    }
    deecryptMessage = result.join("");
    return deecryptMessage;
}

console.log(decrypt(alphabet, seed, encryptMessage))
module.exports = {sort, decrypt, encrypt, generateSeed};