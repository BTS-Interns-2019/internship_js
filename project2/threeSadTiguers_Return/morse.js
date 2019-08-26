/* 
Funcion Morse, esta funcion inicialmente convierte de binario(0 y 1) a lenguaje humano.
Toma el string de bits que el usuario le envía, 
convierte el string de valores de unidad a simples bits
y después los separa en partes de una letra, letras y palabras,
para finalmente regresar un string con el mensaje decodificado en lenguaje humano.
*/

function morse(binaryMorseCode) { 

    let bit = [];
    for (i = 0, j = 2; i < binaryMorseCode.length; i += 2, j += 2) { // recorre la variable recibida de 2 en dos
        bit.push(binaryMorseCode.slice(i, j));// obtiene los valores de 2 en dos y los convierte en un solo string
    }                                         //agregandolos al array bit

    let result = "";
    for (i = 0; i < bit.length; i++) {  //recorre los bits duplicados 
        result += Array.from(new Set(bit[i])).join(''); //toma los valores duplicados y los convierte en bits
    }

    return Morse.decode(result);    //envia result a la función Morse.decode y retorna su resultado
}



let Morse = {} //Morse es el objeto maestro
Morse.decode = function (bits) {    //decode es unan funcion dentro del objeto Morse

    return bits.replace(/0+$/, '').split('0000000').map(function (word) { //cada 0 significa que el bit pertenece a la misma letra, se dividen cada 7 ceros por palabras y lo obtenido lo mapea
        return word.split('000').map(function (c) {   //cada palabra es dividida por letras con el indicador de los "000"                      
            return Morse.bits[c]; //cada letra la compara con el objeto Morse.alpha
        }).join('');
    }).join(' ');
}

Morse.alpha = { // este objeto contiene la base a comparar de las palabras en bits para convertirlas en letras
    'A': '10111',
    'B': '111010101',
    'C': '11101011101',
    'D': '1110101',
    'E': '1',
    'F': '101011101',
    'G': '111011101',
    'H': '1010101',
    'I': '101',
    'J': '1011101110111',
    'K': '111010111',
    'L': '101110101',
    'M': '1110111',
    'N': '11101',
    'O': '11101110111',
    'P': '10111011101',
    'Q': '1110111010111',
    'R': '1011101',
    'S': '10101',
    'T': '111',
    'U': '1010111',
    'V': '101010111',
    'W': '101110111',
    'X': '11101010111',
    'Y': '1110101110111',
    'Z': '11101110101',
    '0': '1110111011101110111',
    '1': '10111011101110111',
    '2': '101011101110111',
    '3': '1010101110111',
    '4': '10101010111',
    '5': '101010101',
    '6': '11101010101',
    '7': '1110111010101',
    '8': '111011101110101',
    '9': '11101110111011101',
    '.': '10111010111010111',
    ',': '1110111010101110111',
    '?': '101011101110101',
    "'": '1011101110111011101',
    '!': '1110101110101110111',
    '/': '1110101011101',
    '(': '111010111011101',
    ')': '1110101110111010111',
    '&': '10111010101',
    ':': '11101110111010101',
    ';': '11101011101011101',
    '=': '1110101010111',
    '+': '1011101011101',
    '-': '111010101010111',
    '_': '10101110111010111',
    '"': '101110101011101',
    '$': '10101011101010111',
    '@': '10111011101011101',
    ' ': '0',
}

Morse.bits = {} 

for (let x in Morse.alpha) { 
    Morse.bits[Morse.alpha[x]] = x//compara morse bits con alpha y extrae la letra del objeto
}



module.exports = morse;