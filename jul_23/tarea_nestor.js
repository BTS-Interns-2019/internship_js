# Exercises 23 jul

Number and String

create a file named `tarea_<nombre>.js` in your own branch using.

```

// Number


// MAX_VALUE
/* describe what it is? */
Es el maximo valor numerico en javascript

// MIN_VALUE
/* describe what it is? */
Es el minnimo valor numerico en javascript

// NaN
/* describe what it is? */
No es un numero
// NEGATIVE_INFINITY
/* describe what it is? */
Es el valor negativo de infinity 

// POSITIVE_INFINITY
/* describe what it is? */
Es el valor positivo de infinity
// EPSILON
/* describe what it is? */
Representa la diferencia entre 1 y el numero flotante mas pequeno mayor que 1

// MIN_SAFE_INTEGER
/* describe what it is? */
Es el valor minimo que es seguro utilizar

// MAX_SAFE_INTEGER
/*
 describe what it is? */
Es el valor maximo que es seguro utilizar


// parseFloat()
/* do a description and gime me 3 examples of its ussage */
Pasa un string numero a numero flotante
parseFloat("10"); // 10
parseFloat("10.03") // 10.03
parseFloat("4 dedos") // 4

// parseInt()
/* do a description and gime me 3 examples of its ussage */
Pasa un string numero a numero entero
parseInt("10"); // 10
parseInt("10.03") // 10
parseInt("4 dedos") // 4
// isFinite()
/* do a description and gime me 3 examples of its ussage */
Compara si el valor es infinito
isFinite(0); // true
isFinite(2e64); // true
isFinite(Infinity); // false
// isInteger()
/* do a description and gime me 3 examples of its ussage */
Compara si el valor es un numero entero
Number.isInteger(-100000); // true
Number.isInteger(99999999999999999999999); // true
Number.isInteger(0.1); // false
// isNaN()
/* do a description and gime me 3 examples of its ussage */
Compara si el valor es no es un numero
isNaN(0) //false
isNaN('123') //false
isNaN('Hello') //true
// isSafeInteger()
/* do a description and gime me 3 examples of its ussage */
Determina si el valor dado es un numero entero seguro
Number.isSafeInteger(9007199254740990) // true
Number.isSafeInteger(3) // true
Number.isSafeInteger(9007199254740992) // false
// toExponential()
/* do a description and gime me 3 examples of its ussage */
Convierte un numero en exponencial
var num = 5.56789; num.toExponential(); // 5.56789e+0
var num = 10.987654; num.toExponential(); // 1.0987654e+1
var num = 990.35238464; num.toExponential(); // 9.9035238464e+2

// toFixed()
/* do a description and gime me 3 examples of its ussage */
Regresa el numero con los decimales especificados
var num = 5.56789; num.toFixed(2); // 5.56
var num = 990.35238464; num.toFixed(2) // 990.35
var num = 10.987654; num.toFixed(2) // 10.98
// toPrecision()
/* write a description and gime me 3 examples of its ussage */
formatea el numero a un length especifico
var num = 13.3714
num.toPrecision(2); // 13
num.toPrecision(3); // 13.3
num.toPrecision(8); // 13.371400 
var num = 0.001658853;
num.toPrecision(3) //0.00166

// String


// fromCharCode()
/* give me an example that does an action a string */
var res = String.fromCharCode(72, 69, 76, 80);
console.log(res); // HELP
// fromCodePoint()
/* give me an example that does an action a string */
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2F804));
// charAt()
/* give me an example that does an action a string */
var str = "HELLO WORLD";
console.log(str.charAt(2) + str.charAt(4) + str.charAt(8) + str.charAt(10)); // LORD
// charCodeAt()
/* give me an example that does an action a string */
ar str = "HELLO WORLD";
console.log(str.charCodeAt(2) + " " + str.charCodeAt(4) + " " + str.charCodeAt(8) + " " + str.charCodeAt(10)) // 76 79 82 68
// codePointAt() 
/* give me an example that does an action a string */
var str = "LORD"
console.log(str.codePointAt(0) + " " + str.codePointAt(1) + " " + str.codePointAt(2) + " " + str.codePointAt(3)); // 76 79 82 68
// concat()
/* give me an example that does an action a string */
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
console.log(array1.concat(array2)); // ["a", "b", "c", "d", "e", "f"]
// endsWith()
/* give me an example that does an action a string */
var str = "Hello world, welcome to the universe.";
console.log(str.endsWith("universe.")); // true
// includes()
/* give me an example that does an action a string */
var str = "Hello world, welcome to the universe.";
console.log(str.includes("world")); // true
// indexOf()
/* give me an example that does an action a string */
var str = "Hello world, welcome to the universe.";
console.log(str.indexOf("w")); // 6
// lastIndexOf()
/* give me an example that does an action a string */
var str = "Hello world, welcome to the universe.";
console.log(str.lastIndexOf("w")); // 13
// localeCompare()
/* give me an example that does an action a string */
var str1 = "ab";
var str2 = "cd";
console.log(str1.localeCompare(str2)); // -1
// normalize()
/* give me an example that does an action a string */
var totn_string1 = 'caf\u00E9';
var totn_string2 = 'cafe\u0301';
console.log(totn_string1.normalize()); // café
console.log(totn_string2.normalize()); // café
console.log(totn_string1 === totn_string2); // false
console.log(totn_string1.normalize() === totn_string2.normalize()); // true
// padEnd()
/* give me an example that does an action a string */
const str1 = 'Breaded Mushrooms';
console.log(str1.padEnd(25, '.')); // Breaded Mushrooms........
// padStart()
/* give me an example that does an action a string */
var totn_string = 'TechOnTheNet';
console.log(totn_string.padStart(20,'A')); // AAAAAAAATechOnTheNet
// repeat()
/* give me an example that does an action a string */
var str = "Hello world!";
console.log(str.repeat(2)); // Hello world!Hello world!
// replace()
/* give me an example that does an action a string */
var str = "Hello World!";
console.log(str.replace("Hello", "Bye")); Bye World!
// search()
/* give me an example that does an action a string */
var str = "Hello World!"; 
console.log(str.search(" ")); // 5
// slice()
/* give me an example that does an action a string */
var str = "Hello World!"; 
console.log(str.slice(0,5)); Hello
// split()
/* give me an example that does an action a string */
var str = "Hello World!"; 
console.log(str.split(" ")); // [ 'Hello', 'World!' ]
// startsWith()
/* give me an example that does an action a string */
var str = "Hello World!"; 
console.log(str.startsWith("He")); // true
// substring()
/* give me an example that does an action a string */
var str = "Hello world!";
console.log(str.substring(1, 4)); // ell
// toLocaleLowerCase()
/* give me an example that does an action a string */
var str = "Hello world!";
console.log(str.toLocaleLowerCase()); // hello world!
// toLocaleUpperCase()
/* give me an example that does an action a string */
var str = "Hello world!";
console.log(str.toLocaleUpperCase()); // HELLO WORLD!
// toLowerCase()
/* give me an example that does an action a string */
var str = "Hello world!";
console.log(str.toLowerCase()); // hello world!
// toString()
/* give me an example that does an action a string */
var num = 15;
console.log(typeof num.toString()); // string
// toUpperCase()
/* give me an example that does an action a string */
var str = "Hello world!";
console.log(str.toUpperCase()); // hello world!
// trim()
/* give me an example that does an action a string */
var str = "       Hello World!        ";
console.log(str.trim()); // Hello World
// trimEnd()
/* give me an example that does an action a string */
var totn_string = '   TechOnTheNet   ';
console.log(totn_string.trimEnd()); // '   TechOnTheNet'
// trimStart()
/* give me an example that does an action a string */
var totn_string = '   TechOnTheNet   ';
console.log(totn_string.trimStart()); // 'TechOnTheNet   '
/* give me 3 example using all the String functions above over the same String*/
function example(data, n){
    console.log( String.fromCharCode(n) );
    console.log( String.fromCodePoint(n) );
    console.log( data.charAt(5) );
    console.log( data.charCodeAt(5) );
    console.log( data.codePointAt(4) );
    console.log( data.concat(n) );
    console.log( data.endsWith(" ") );
    console.log( data.includes("ola") );
    console.log( data.indexOf("o") );
    console.log( data.lastIndexOf("o") );
    console.log( data.localeCompare(data) );
    console.log( data.normalize() );
    console.log( data.padEnd(25, '.') );
    console.log( data.padStart(25, '.') );
    console.log( data.repeat(2) );
    console.log( data.replace("a", "4") );
    console.log( data.search("a") );
    console.log( data.slice(0,5) );
    console.log( data.split("") );
    console.log( data.startsWith("h") );
    console.log( data.substring(1,4) );
    console.log( data.toLocaleLowerCase() );
    console.log( data.toLocaleUpperCase() );
    console.log( data.toLowerCase() );
    console.log( n.toString() );
    console.log( data.toUpperCase() );
    console.log( data.trim() );
    console.log( data.trimEnd() );
    console.log( data.trimStart() );
    return "Terminado!";
}
console.log(example("  hola mundo  ", 72));
console.log(example("  adios mundo  ", 84));
console.log(example("  hola rabbino  ", 22));
```
