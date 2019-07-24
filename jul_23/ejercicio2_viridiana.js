//# Exercises 23 jul

//Number and String

//create a file named `tarea_<nombre>.js` in your own branch using.

```

// Number
El objeto Number es un objeto envolvente que permite trabajar con valores numéricos. 
Un objeto Number se crea utilizando el constructor Number() . 
Un objeto número de tipo primitivo se crea utilizando la función Number()

// MAX_VALUE
La propiedad Number.MAX_VALUE representa el valor numérico positivo máximo representable en JavaScript.
Dado que MAX_VALUE es una propiedad estática de Number, siempre ha de usarse como Number.MAX_VALUE, y no como propiedad del objeto que has creado.

// MIN_VALUE
La propiedad Number.MIN_VALUE representa el menor valor positivo numérico representable en JavaScript.
Ya que MIN_VALUE es una propiedad estática de Number, debes utilizarla como Number.MIN_VALUE, más que como una propiedad del objeto Number que has creado.

// NaN
NaN es una propiedad,es una variable de alcance global.
El valor inicial de NaN es Not-A-Number (No es Un Número) - lo mismo que el valor de Number.NaN.

// NEGATIVE_INFINITY
La propiedad Number.NEGATIVE_INFINITY representa el valor del infinito negativo.}}
No se tiene que crear un objeto Number para acceder a esta propiedad estática (use Number.NEGATIVE_INFINITY).

// POSITIVE_INFINITY
La propiedad Number.POSITIVE_INFINITY representa el infinito positivo.

// EPSILON
Propiedad representa la diferencia entre 1 y el número de punto flotante más pequeño mayor que 1.
No es necesario crear un Numberobjeto para acceder a esta propiedad estática (uso Number.EPSILON).

// MIN_SAFE_INTEGER
La Number.MIN_SAFE_INTEGER constante representa el entero seguro mínimo en JavaScript ( ).-(253 - 1)
Para representar enteros más pequeños que esto, considere usar BigInt.

// MAX_SAFE_INTEGER
La Number.MAX_SAFE_INTEGERconstante representa el entero seguro máximo en JavaScript ( ).253 - 1
Para enteros más grandes, considere usar BigInt.
```
// parseFloat()
//La función analiza un argumento y devuelve un número de punto flotante.
//Si encuentra un carácter distinto de un signo (+ o -), un número (0-9), un punto decimal o un exponente, devuelve el valor hasta ese punto e ignora ese carácter y todos los caracteres sucesivos.
console.log(parseFloat("years 10"));  // returns NaN
console.log(parseFloat("10 20 30"));  // returns 10
console.log(parseFloat("10.33"));  // returns 10.33

// parseInt()
//analiza un argumento de cadena y devuelve un número entero de la base o base determinada.
var d = console.log(parseInt("34 45 66"))
var f = console.log(parseInt("40 years"))
var e = console.log(parseInt("10", 16))

// isFinite() determina si el valor pasado es un número finito.
console.log(Number.isFinite('123')) //false
console.log(Number.isFinite(Infinity)) //false
console.log(Number.isFinite(0 / 0)) //false

// isInteger() determina si el valor pasado es de tipo entero.
console.log(Number.isInteger('123')) //false
console.log(Number.isInteger(0)) //true
console.log(Number.isInteger(false)) //false

// isNaN() método determina si el valor pasado es NaNy su tipo es Number. Es una versión más robusta del original, global isNaN().
console.log(Number.isNaN('NaN'));// false
console.log(Number.isNaN({}));// false
console.log(Number.isNaN('blabla'));// false

// isSafeInteger() determina si el valor provisto es un número que es un entero seguro.
console.log(Number.isSafeInteger(NaN)); // false
console.log(Number.isSafeInteger('3'));// false
console.log(Number.isSafeInteger(Infinity));// false 

// toExponential() método devuelve una cadena que representa el objeto Número en notación exponencial.
var numObj = 77.1234;

console.log(numObj.toExponential());  // logs 7.71234e+1
console.log(numObj.toExponential(4)); // logs 7.7123e+1
console.log(77.1234.toExponential()); // logs 7.71234e+1
// toFixed() formatea un número usando notación de punto fijo.
var numObj = 12345.6789;
console.log(numObj.toFixed());// Returns '12346': note rounding, no fractional part
console.log(numObj.toFixed(1));// Returns '12345.7': note rounding
console.log(numObj.toFixed(6));// Returns '12345.678900': note added zeros

// toPrecision() método devuelve una cadena que representa el Numberobjeto con la precisión especificada.
numObj = 0.000123

console.log(numObj.toPrecision());    // logs '0.000123'
console.log(numObj.toPrecision(5));   // logs '0.00012300'
console.log(numObj.toPrecision(2));   // logs '0.00012'

// String


// fromCharCode()
console.log(String.fromCharCode(65,66,67));

// fromCodePoint()
console.log(String.fromCodePoint(42));

// charAt()
var example = 'Aprendiendo a usar charAt';
var position = 6;
console.log('The character at position ' + position + ' is ' + example.charAt(position));

// charCodeAt()
console.log("ABC".charCodeAt(0))

// codePointAt()
console.log('ABC'.codePointAt(1)); 

// concat()
var palabra1 = 'Hola';
var palabra2 = 'Viridiana';

console.log(palabra1.concat(' ', palabra2));
console.log(palabra2.concat(', ', palabra1));

// endsWith()
const s = 'Hola como estas!';
console.log(s.endsWith('estas', 15));

// includes()
const ejemplo = 'Empezando, la tarea, en la noche, con hambre, y sueño';

console.log(ejemplo.includes('la tarea'));      
console.log(ejemplo.includes('hola'));    
console.log(ejemplo.includes('en la noche')); 

// indexOf()
var parrafo1 = 'Habia una vez una familia que tenia un perro y un gato';

var palabraAbuscar = 'perro';
var indexOfFirst=parrafo1.indexOf(palabraAbuscar);

console.log('The index of the first "' + palabraAbuscar + '" from the beginning is ' + indexOfFirst);
// lastIndexOf()
console.log("Bienvenidos".lastIndexOf("e"));

// localeCompare()
console.log('a'.localeCompare('a'));

// normalize()
var example1 = '\u1E9B\u0323';
console.log(example1.normalize('NFC'));
// padEnd()
const complit1 = 'Itati';

console.log(complit1.padEnd(15, '*'));

// padStart()
const example1 = '11';

console.log(example1.padStart(3, '0'));

// repeat()
console.log('hola'.repeat(2));

// replace()
var re = /Tobby/gi;
var str = "Tobby juega en la casa, y Tobby es feliz";
var newstr = str.replace(re, "Petra");
console.log((newstr));

// search()
var parrafo = 'Sólo tú eliges la importancia que le das a las cosas. ';
var buscar = /[.]/g;

console.log(parrafo.search(buscar));

// slice()
var c1 = "La tarea es para mañana";
var c2 = c1.slice(4, -1);
console.log(c2);

// split()
var myExample = "Hola viri. Cómo estás hoy?";
var divisiones = myExample.split(" ", 3);

console.log((divisiones));

// startsWith()
var cadena1 = 'Comer unos deliciosos tacos';

console.log(cadena1.startsWith('unos'));   
console.log(cadena1.startsWith('Comer')); 
// substring()
var ejemploCadena = "JavaScript";

console.log((ejemploCadena.substring(0,3)));
console.log((ejemploCadena.substring(3,0)));

// toLocaleLowerCase()
console.log('HOLA'.toLocaleLowerCase());

// toLocaleUpperCase()
var city = 'guadalajara';

console.log(city.toLocaleUpperCase('TR'));

// toLowerCase()
var textoMayusculas="BUENOS DIAS"
console.log(textoMayusculas.toLowerCase())

// toString()
var obj1 = new String("prueba");

console.log(obj1);

// toUpperCase()
var oracion1 = 'Aprendiendo a usar metodos de JavaScript';

console.log(oracion1.toUpperCase());

// trim()
var ejem = '   Hello world!   ';
console.log(ejem.trim());

// trimEnd()
var ejem = '   Hello world!   ';
console.log(ejem.trimEnd());

// trimStart()
var ejem = '   Hello world!   ';
console.log(ejem.trimStart());

/* give me 3 example using all the String functions above over the same String*/
 var ejemplo1= 'Iniciando el ejercicio';

 console.log(String.fromCharCode(65,66,67));
 console.log(String.fromCodePoint(42));
 console.log(ejemplo1.charAt(6));
 console.log(ejemplo1.concat(" feliz!"));
 console.log(ejemplo1.endsWith('estas', 15));
 console.log(ejemplo1.includes("el"));
 console.log(ejemplo1.indexOf("e"));
 console.log(ejemplo1.lastIndexOf("o"));
 console.log(ejemplo1.localeCompare('a'));
 console.log(ejemplo1.normalize());
 console.log(ejemplo1.padEnd(40,"*"));
 console.log(ejemplo1.padStart(40,"0"));
 console.log(ejemplo1.repeat(5));
 console.log(ejemplo1.replace(i, "o"));
 console.log(ejemplo1.search("."));
 console.log(ejemplo1.slice(2));
 console.log(ejemplo1.split(","));
 console.log(ejemplo1.startsWith("i"));
 console.log((ejemplo1.substring(0,3)));
 console.log(ejemplo1.toLocaleLowerCase());
 console.log(ejemplo1.toLocaleUpperCase());
 console.log(ejemplo1.toLowerCase());
 console.log(ejemplo1.toUpperCase());
 console.log(ejemplo1.toString());
 console.log(ejemplo1.trim());
 console.log(ejemplo1.trimStart());
 console.log(ejemplo1.trimEnd());
 console.log(ejemplo1.charCodeAt(0));
 console.log(ejemplo1.codePointAt(1));

 let ejemplo2='Avanzando en el ejercicio'

 console.log(String.fromCharCode(65,66,67));
 console.log(String.fromCodePoint(42));
 console.log(ejemplo2.charAt(6));
 console.log(ejemplo2.concat(" medio feliz!"));
 console.log(ejemplo2.endsWith('estas', 15));
 console.log(ejemplo2.includes("el"));
 console.log(ejemplo2.indexOf("e"));
 console.log(ejemplo2.lastIndexOf("o"));
 console.log(ejemplo2.localeCompare('a'));
 console.log(ejemplo2.normalize());
 console.log(ejemplo2.padEnd(40,"*"));
 console.log(ejemplo2.padStart(40,"0"));
 console.log(ejemplo2.repeat(5));
 console.log(ejemplo2.replace(i, "o"));
 console.log(ejemplo2.search("."));
 console.log(ejemplo2.slice(2));
 console.log(ejemplo2.split(","));
 console.log(ejemplo2.startsWith("i"));
 console.log((ejemplo2.substring(0,3)));
 console.log(ejemplo2.toLocaleLowerCase());
 console.log(ejemplo2.toLocaleUpperCase());
 console.log(ejemplo2.toLowerCase());
 console.log(ejemplo2.toUpperCase());
 console.log(ejemplo2.toString());
 console.log(ejemplo2.trim());
 console.log(ejemplo2.trimStart());
 console.log(ejemplo2.trimEnd());
 console.log(ejemplo2.charCodeAt(0));
 console.log(ejemplo2.codePointAt(1));

 let ejemplo3='Casi finzaliando el ejercicio'
 console.log(String.fromCharCode(65,66,67));
 console.log(String.fromCodePoint(42));
 console.log(ejemplo3.charAt(6));
 console.log(ejemplo3.concat(" muy feliz!"));
 console.log(ejemplo3.endsWith('estas', 15));
 console.log(ejemplo3.includes("el"));
 console.log(ejemplo3.indexOf("e"));
 console.log(ejemplo3.lastIndexOf("o"));
 console.log(ejemplo3.localeCompare('a'));
 console.log(ejemplo3.normalize());
 console.log(ejemplo3.padEnd(40,"*"));
 console.log(ejemplo3.padStart(40,"0"));
 console.log(ejemplo3.repeat(5));
 console.log(ejemplo3.replace(i, "o"));
 console.log(ejemplo3.search("."));
 console.log(ejemplo3.slice(2));
 console.log(ejemplo3.split(","));
 console.log(ejemplo3.startsWith("i"));
 console.log((ejemplo3.substring(0,3)));
 console.log(ejemplo3.toLocaleLowerCase());
 console.log(ejemplo3.toLocaleUpperCase());
 console.log(ejemplo3.toLowerCase());
 console.log(ejemplo3.toUpperCase());
 console.log(ejemplo3.toString());
 console.log(ejemplo3.trim());
 console.log(ejemplo3.trimStart());
 console.log(ejemplo3.trimEnd());
 console.log(ejemplo3.charCodeAt(0));
 console.log(ejemplo3.codePointAt(1));
