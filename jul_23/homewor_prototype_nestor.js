// # Exercises 23 jul

// Number and String

// create a file named `tarea_<nombre>.js` in your own branch using.

// ```

// // Number


// // MAX_VALUE
// /* describe what it is? */
// Es el maximo valor numerico en javascript

// // MIN_VALUE
// /* describe what it is? */
// Es el minnimo valor numerico en javascript

// // NaN
// /* describe what it is? */
// No es un numero
// // NEGATIVE_INFINITY
// /* describe what it is? */
// Es el valor negativo de infinity 

// // POSITIVE_INFINITY
// /* describe what it is? */
// Es el valor positivo de infinity
// // EPSILON
// /* describe what it is? */
// Representa la diferencia entre 1 y el numero flotante mas pequeno mayor que 1

// // MIN_SAFE_INTEGER
// /* describe what it is? */
// Es el valor minimo que es seguro utilizar

// // MAX_SAFE_INTEGER
// /*
//  describe what it is? */
// Es el valor maximo que es seguro utilizar


// // parseFloat()
// /* do a description and gime me 3 examples of its ussage */
// console.log(var a = parseFloat("10")); // 10
// console.log(var b = parseFloat("10.03")); // 10.03
// console.log(var c = parseFloat("4 dedos")); // 4

// // parseInt()
// /* do a description and gime me 3 examples of its ussage */
// console.log(var d = parseInt("10")); // 10
// console.log(var e = parseInt("10.03")); // 10
// console.log(var f = parseInt("4 dedos")); // 4
// // isFinite()
// /* do a description and gime me 3 examples of its ussage */
// console.log(var g = isFinite(0));
// console.log(var h = isFinite(2e64));
// console.log(var i = isFinite(Infinity));
// // isInteger()
// /* do a description and gime me 3 examples of its ussage */

// // isNaN()
// /* do a description and gime me 3 examples of its ussage */

// // isSafeInteger()
// /* do a description and gime me 3 examples of its ussage */

// // toExponential()
// /* do a description and gime me 3 examples of its ussage */

// // toFixed()
// /* do a description and gime me 3 examples of its ussage */

// // toPrecision()
// /* write a description and gime me 3 examples of its ussage */


// // String


// // fromCharCode()
// /* give me an example that does an action a string */

// // fromCodePoint()
// /* give me an example that does an action a string */

// // charAt()
// /* give me an example that does an action a string */

// // charCodeAt()
// /* give me an example that does an action a string */

// // codePointAt()
// /* give me an example that does an action a string */

// // concat()
// /* give me an example that does an action a string */

// // endsWith()
// /* give me an example that does an action a string */

// // includes()
// /* give me an example that does an action a string */

// // indexOf()
// /* give me an example that does an action a string */

// // lastIndexOf()
// /* give me an example that does an action a string */

// // localeCompare()
// /* give me an example that does an action a string */

// // normalize()
// /* give me an example that does an action a string */

// // padEnd()
// /* give me an example that does an action a string */

// // padStart()
// /* give me an example that does an action a string */

// // repeat()
// /* give me an example that does an action a string */

// // replace()
// /* give me an example that does an action a string */

// // search()
// /* give me an example that does an action a string */

// // slice()
// /* give me an example that does an action a string */

// // split()
// /* give me an example that does an action a string */

// // startsWith()
// /* give me an example that does an action a string */

// // substring()
// /* give me an example that does an action a string */

// // toLocaleLowerCase()
// /* give me an example that does an action a string */

// // toLocaleUpperCase()
// /* give me an example that does an action a string */

// // toLowerCase()
// /* give me an example that does an action a string */

// // toString()
// /* give me an example that does an action a string */

// // toUpperCase()
// /* give me an example that does an action a string */

// // trim()
// /* give me an example that does an action a string */

// // trimEnd()
// /* give me an example that does an action a string */

// // trimStart()
// /* give me an example that does an action a string */



// /* give me 3 example using all the String functions above over the same String*/


// ```
// var res = String.fromCharCode(72, 69, 76, 80);
// console.log(res);
// console.log(String.fromCodePoint(9731, 9733, 9842, 0x2F804));
// var str = "HELLO WORLD";
// console.log(str.charAt(2) + str.charAt(4) + str.charAt(8) + str.charAt(10));
// var str = "HELLO WORLD";
// console.log(str.charCodeAt(2) + " " + str.charCodeAt(4) + " " + str.charCodeAt(8) + " " + str.charCodeAt(10))
// var str = "LORD"
// console.log(str.codePointAt(0) + " " + str.codePointAt(1) + " " + str.codePointAt(2) + " " + str.codePointAt(3));
// var array1 = ['a', 'b', 'c'];
// var array2 = ['d', 'e', 'f'];
// console.log(array1.concat(array2));
// var str = "Hello world, welcome to the universe.";
// console.log(str.lastIndexOf("w"));
// var str1 = "ab";
// var str2 = "cd";
// console.log(str1.localeCompare(str2));
// var totn_string1 = 'caf\u00E9';
// var totn_string2 = 'cafe\u0301';
// console.log(totn_string1.normalize());
// console.log(totn_string2.normalize());
// console.log(totn_string1 === totn_string2);
// console.log(totn_string1.normalize() === totn_string2.normalize());
// const str1 = 'Breaded Mushrooms';
// console.log(str1.padEnd(25, '.'));
// var totn_string = 'TechOnTheNet';
// console.log(totn_string.padStart(20,'A'));
// var str = "Hello world!";
// console.log(str.repeat(2));
// var str = "Hello World!";
// console.log(str.replace("Hello", "Bye"));
// var str = "Hello World!"; 
// console.log(str.startsWith("He"));
// var str = "Hello world!";
// console.log(str.substring(1, 4));
// var str = "Hello world!";
// console.log(str.toLocaleLowerCase());
// var str = "Hello world!";
// console.log(str.toLocaleUpperCase());
// var num = 15;
// console.log(typeof num.toString());
// var str = "       Hello World!        ";
// console.log(str.trim());
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
// console.log(example("  hola mundo  ", 72));
// console.log(example("  adios mundo  ", 84));
// console.log(example("  hola rabbino  ", 22));



// primer ejercicio 1111111
// for(var i = 0; i < 15; i++){
//     var res = i;
//     console.log( res *= 2);
// }
// segundo ejercicio 22222222
// var x = 1
// for (let i = 0; i < 15; i++) {
//     if(i == 0 || i == 1){
//         console.log(i);
//     }else {
//         console.log(x *= 2);
//     }    
// }
// tercer ejercicio 333333333
// for(var i = 0, x = 9; x > 0; i++, x--){
//     console.log(i,x,i,x);
// }

let matrix = [
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9]
];
// cuarto ejercicio 444444444
// i = 0;
// while (i < 9) {
//     columna = matrix[i];
//     x = 0;
//     while(x < 9){
//         if(columna[x] == columna[i]){
//             x++;
//             continue;
//         }
//         columna[x] = 0;
//         x++
//     }
//     i++;
//     x = 0;
//     console.log(columna);
    
// }

// var i = 0;
// j = 0;
// while (i < matrix.length) {
//     var array1 = matrix[i];
//     while (j < array1.length) {
//         if(array1[j] == i+1){
//             j++;
//             continue;
//         }
//         array1[j] = 0;
//         j++;
//     }
//     i++;
//     j = 0;
//     console.log(array1);
// }






