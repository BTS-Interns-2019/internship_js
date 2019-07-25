// Number

// Max_VALUE
/* Es el valor maximo que puede asignar a una variable */

// MIN_VALUE
/* Es el valor minimoque se le puede asignar a una variable  */

/* NAN */
/* es un valor primitivo para designa un No numero */

/* NEGATIVE_INTINITY */
/* Se representa con "-INFINITY" es un valor infinito negativo */

/* POSITIVE_INTINITY */
/* se representa con "INTINITY"  es un valor infinito postivo*/

/* EPSILON */
/* La propiedad Number.EPSILON representa la diferencia entre 1 y el número de punto flotante más pequeño mayor que 1. */

/*MIN_SAFE_INTEDER */
/* Representa el entero seguro minimo en js (-(253-1)) */

/*MAX_SAFE_INTEGER*/
/* El valor entero seguro maximo n javascript */

/* parseFloat() */
/* Parsea un numero flotante 
    parseFloat("1.2454457")
    parseFloat('3.14')
    parseFloat('314e-2');
*/

/* parseInt() */
/* parseInt('15px', 10); 
   parseInt('17', 8);
   parseInt('F', 16);
*/


// isFinite()
/* funciona para determinar si un numero es finito
isFinite(0);         
isFinite(2e64);      
isFinite(910);
*/

// isInteger()
/* determina si el valor es in entero
    Number.isInteger(0);        
    Number.isInteger(1);        
    Number.isInteger(-100000);
*/

// isNaN()
/* Determina si un valor es un not a number o no
    isNaN(NaN);      
    isNaN(undefined);
    isNaN({}); 

*/

// isSafeInteger()
/* DEtermina si el valor porporcionado es un numero entero seguro
    Number.isSafeInteger(3);                    // true
Number.isSafeInteger(Math.pow(2, 53));      // false
Number.isSafeInteger(Math.pow(2, 53) - 1);
*/

// toExponential()
/* 
    Este metodo devuelve una cadena que representa al numero en notacion exponencial
console.log(numObj.toExponential());  // logs 7.71234e+1
console.log(numObj.toExponential(4)); // logs 7.7123e+1
console.log(numObj.toExponential(2)); // logs 7.71e+1
*/

// toFixed()
/* funciona para acomodar un numero flotante a los numeros despues del punto
    2.34.toFixed(1);        // Returns '2.3'
    2.35.toFixed(1);        // Returns '2.4'. Note it rounds up
    2.55.toFixed(1);        // Returns '2.5'. Note it rounds down - see warning above

*/

// toPrecision()
/* devuelve una cadena que representa un numero en la precicion especifica


    console.log(numObj.toPrecision(5));   // logs '5.1235'
    console.log(numObj.toPrecision(2));   // logs '5.1'
    console.log(numObj.toPrecision(1));   // logs '5'
*/




// String


// fromCharCode()
/* String.fromCharCode(65) // regresa "ABC" */

// fromCodePoint()
/* String.fromCodePoint(9731) return ☃ */

// charAt()
/*  i = "the quick brown"
    i = 4
    i.charAt(index)
    q
 */

// charCodeAt()
/* 
    var sentence = 'The quick brown fox jumps over the lazy dog.';

    var index = 4;

    console.log('The character code ' + sentence.charCodeAt(index) + ' is equal to ' + sentence.charAt(index));
    expected output: "The character code 113 is equal to q"

*/

// codePointAt()
/* 
    var icons = '☃★♲';

console.log(icons.codePointAt(1));
 expected output: "9733"
*/

// concat()
/* 
    var str1 = 'bien';
    var str2 = 'desvelado';

    str1.concat( " ",str2);
*/

// endsWith()
/* 
    const str1 = 'Cats are the best!';

    console.log(str1.endsWith('best', 17));
    expected output: true
*/

// includes()
/* 
var sentence = 'te pasaste de lanza CAPS.';

var word = 'CAPS';

console.log(`The word "${word}" ${sentence.includes(word)? 'is' : 'is not'} in the sentence`);
expected output: "the word "CAPS" is in the sentence."
*/

// indexOf()
/* var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison', 2));
expected output: 4

*/

// lastIndexOf()
// /* give me an example that does an action a string */
// var str = "Hello world, welcome to the universe.";
// console.log(str.lastIndexOf("w")); // 13


// localeCompare()
// /* give me an example that does an action a string */
// var str1 = "ab";
// var str2 = "cd";
// console.log(str1.localeCompare(str2)); // -1


// normalize()
// /* give me an example that does an action a string */
// var totn_string1 = 'caf\u00E9';
// var totn_string2 = 'cafe\u0301';
// console.log(totn_string1.normalize()); // café
// console.log(totn_string2.normalize()); // café
// console.log(totn_string1 === totn_string2); // false
// console.log(totn_string1.normalize() === totn_string2.normalize()); // true


// padEnd()
// /* give me an example that does an action a string */
// const str1 = 'Breaded Mushrooms';
// console.log(str1.padEnd(25, '.')); // Breaded Mushrooms........

// padStart()
// /* give me an example that does an action a string */
// var totn_string = 'TechOnTheNet';
// console.log(totn_string.padStart(20,'A')); // AAAAAAAATechOnTheNet

// repeat()
// /* give me an example that does an action a string */
// var str = "Hello world!";
// console.log(str.repeat(2)); // Hello world!Hello world!

 // replace()
// /* give me an example that does an action a string */
// var str = "Hello World!";
// console.log(str.replace("Hello", "Bye")); Bye World!

 // search()
// /* give me an example that does an action a string */
// var str = "Hello World!"; 
// console.log(str.search(" ")); // 5

 // slice()
// /* give me an example that does an action a string */
// var str = "Hello World!"; 
// console.log(str.slice(0,5)); Hello

 // split()
// /* give me an example that does an action a string */
// var str = "Hello World!"; 
// console.log(str.split(" ")); // [ 'Hello', 'World!' ]

 // startsWith()
// /* give me an example that does an action a string */
// var str = "Hello World!"; 
// console.log(str.startsWith("He")); // true

 // substring()
// /* give me an example that does an action a string */
// var str = "Hello world!";
// console.log(str.substring(1, 4)); // ell

 // toLocaleLowerCase()
// /* give me an example that does an action a string */
// var str = "Hello world!";
// console.log(str.toLocaleLowerCase()); // hello world!

 // toLocaleUpperCase()
// /* give me an example that does an action a string */
// var str = "Hello world!";
// console.log(str.toLocaleUpperCase()); // HELLO WORLD!

// toLowerCase()
// /* give me an example that does an action a string */
// var str = "Hello world!";
// console.log(str.toLowerCase()); // hello world!

 // toString()
// /* give me an example that does an action a string */
// var num = 15;
// console.log(typeof num.toString()); // string

// toUpperCase()
// /* give me an example that does an action a string */
// var str = "Hello world!";
// console.log(str.toUpperCase()); // hello world!

 // trim()
// /* give me an example that does an action a string */
// var str = "       Hello World!        ";
// console.log(str.trim()); // Hello World

 // trimEnd()
// /* give me an example that does an action a string */
// var totn_string = '   TechOnTheNet   ';
// console.log(totn_string.trimEnd()); // '   TechOnTheNet'

// trimStart()
// /* give me an example that does an action a string */
// var totn_string = '   TechOnTheNet   ';
// console.log(totn_string.trimStart()); // 'TechOnTheNet   '


// /* give me 3 example using all the String functions above over the same String*/
// function example(data, n){
//     console.log( String.fromCharCode(n) );
//     console.log( String.fromCodePoint(n) );
//     console.log( data.charAt(5) );
//     console.log( data.charCodeAt(5) );
//     console.log( data.codePointAt(4) );
//     console.log( data.concat(n) );
//     console.log( data.endsWith(" ") );
//     console.log( data.includes("ola") );
//     console.log( data.indexOf("o") );
//     console.log( data.lastIndexOf("o") );
//     console.log( data.localeCompare(data) );
//     console.log( data.normalize() );
//     console.log( data.padEnd(25, '.') );
//     console.log( data.padStart(25, '.') );
//     console.log( data.repeat(2) );
//     console.log( data.replace("a", "4") );
//     console.log( data.search("a") );
//     console.log( data.slice(0,5) );
//     console.log( data.split("") );
//     console.log( data.startsWith("h") );
//     console.log( data.substring(1,4) );
//     console.log( data.toLocaleLowerCase() );
//     console.log( data.toLocaleUpperCase() );
//     console.log( data.toLowerCase() );
//     console.log( n.toString() );
//     console.log( data.toUpperCase() );
//     console.log( data.trim() );
//     console.log( data.trimEnd() );
//     console.log( data.trimStart() );
//     return "Terminado!";
// }
// console.log(example("  hola mundo  ", 55));
// console.log(example("  adios mundo  ", 82));
// console.log(example("  Adios ", 30));
// ```
