//# Exercises 23 jul

//Number and String

//create a file named `tarea_<nombre>.js` in your own branch using.



// Number


// MAX_VALUE
/* Representa el valor numerico positivo maximo representable en JavaScript.
    Tiene un valor aproximado a 1.79E+308. Si el valor es mayor sera representado como Infinity*/

// MIN_VALUE
/* Representa el valor numerico positivo maximo representable en JvaScript.
   Este numero es el mas cercano a 0 que se pueda expresar.
   Tiene un valor aproximado de 5e-324. Valores menores a este seran convertidos a 0.*/

// NaN
/* Es una propiedad del global object.
   El valor inicial de NaN es Not-A-Number.
   NaN nunca es equivalente con cualquier otro numero, incluido el mismo NaN.*/

// NEGATIVE_INFINITY
/* Representa el valor del infinito negativo.*/

// POSITIVE_INFINITY
/* Representa el valor del infinito positivo.*/

// EPSILON
/* Es una propiedad que representa la diferencia entre 1 y el numero de punto flotante mas pequeño mayor que uno.
   Tiene un valor aproximado de 2^-52.*/


// MIN_SAFE_INTEGER
/* Es una constante que representa el minimo valor seguro. 
   Este valor es equivalente a -(2^53 - 1).
   Enteros menores a estos seran considerados como BigInt's.*/

// MAX_SAFE_INTEGER
/* Es el numero mas grande seguro.
   Su valor es 2^53 - 1.
   Numeros mayores a este se consideraran BigInt's.*/

// parseFloat()
/* Convierte un argumento tipo string en un numero punto flotante.
   Ejemplos:*/
   var cadena = "2.5";
   var convertido = cadena.parseFloat(cadena);
   console.log(convertido);

   cadena = "3 + 0.5"
   convertido = cadena.parseFloat(cadena);
   console.log(convertido);

   cadena = "$45.99"
   convertido = cadena.parseFloat(cadena);
   console.log(convertido);

// parseInt()
/* Convierte un argumento de tipo string en un entero de la base especificada.*/
   cadena = "10"
   convertido = cadena.parseInt(cadena);
   console.log(convertido);
   
   cadena = "AB"
   convertido = cadena.parseInt(cadena, 16);
   console.log(convertido);
   
   cadena = "10hola"
   convertido = cadena.parseInt(cadena);
   console.log(convertido);
     
// isFinite()
/* Determina si el valor que se le pasa como argumento es un numero finito.
   Si el argumento es NaN, infinito positivo o infinito negativo, este método devuelve false, de otro modo devuelve true.*/
   var numero = 100;
   var fin = isFinite(numero);
   console.log(numero);

   numero = NaN;
   fin = isFinite(numero);
   console.log(numero);

   numero = Infinity;
   fin = isFinite(numero);
   console.log(numero);

// isInteger()
/* Determina si el valor pasado es de tipo entero. 
   Si el valor seleccionado es un entero, devuelve true, de lo contrario false. 
   Si el valor es NaN o infinito, devuelve false.*/
   var entero = isInteger(10);
   console.log(entero);

   entero = isInteger(12.60);
   console.log(entero);

   entero = isInteger(Infinity);
   console.log(entero);

// isNaN()
/* Evalúa un argumento para determinar si es un número.
    Intenta convertir el parámetro pasado a un número. 
    Si el parámetro no se puede convertir, devuelve true; en caso contrario, devuelve false.*/
    var noNum = isNaN("numero");
    console.log(noNum);

    noNum = isNaN("16");
    console.log(noNum);

    noNum = isNaN(Infinity);
    console.log(noNum);

// isSafeInteger()
/* Determina si el valor provisto es un número que es un entero seguro.*/
   var sInt = isSafeInteger(55);
   console.log(sInt);

   sInt = isSafeInteger(Math.pow(2, 53));
   console.log(sInt);
   
   sInt = isSafeInteger(Infinity);
   console.log(sInt);   

// toExponential()
/* Regresa un string representando el numero en notacion cientifica.
   En el parametro podemos mandar los digitos decimales que desees que tenga.*/
   numero = 1234567890;
   console.log(numero.toExponential());

   numero = 123456.321654;
   console.log(numero.toExponential());

   numero = 1234567890.1234;
   console.log(numero.toExponential(2));

// toFixed()
/* Formatea un número usando notación de punto fijo.
   Si es necesario redondear toFixed lo hara.*/
   numero = 3.14159265359;
   console.log(numero.toFixed(4));
   
   numero = 2.718281828459045235360;
   console.log(numero.toFixed(4));

   numero = 1.234567890123456789;
   console.log(numero.toFixed(2));

// toPrecision()
/* Devuelve una cadena que representa un objeto Number según la precisión especificada.*/
   numero = 3.14159265359;
   console.log(numero.toPrecision(4));

   numero = 2.718281828459045235360;
   console.log(numero.toPrecision(4));

   numero = 1.234567890123456789;
   console.log(numero.toPrecision(2));

// String


// fromCharCode()
/* Devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.*/
   cadena = cadena.fromCharCode(72, 111, 108, 97);
   console.log(cadena);

   cadena = cadena.fromCharCode(200, 205, 205, 205, 188);
   console.log(cadena);

   cadena = cadena.fromCharCode(81, 85, 69, 32, 72, 79, 78, 71, 79, 33);
   console.log(cadena);

// fromCodePoint()
/* Devuelve una cadena creada por una secuencia de puntos de codigo.*/
   cadena = cadena.fromCodePoint(0x404);
   console.log(cadena);

   cadena = cadena.fromCodePoint(0x2F804);
   console.log(cadena);

   cadena = cadena.fromCodePoint(0x1D306, 0x61, 0x1D307);
   console.log(cadena);

// charAt()
/* Devuelve en un nuevo String el carácter UTF-16 de una cadena, indicando la posicion del caracter en el argumento.*/
   cadena = "Hola Mundo!".fromCodePoint(2);
   console.log(cadena);

   cadena = "Que Hongo!".fromCodePoint(6);
   console.log(cadena);

   cadena = "Hi".fromCodePoint(4);
   console.log(cadena);

// charCodeAt()
/* Devuelve un número indicando el valor Unicode del carácter en el índice proporcionado.*/
   numero = "Hola Mundo!".charCodeAt(2);
   console.log(numero);

   numero = "Que Hongo!".charCodeAt(6);
   console.log(numero);

   numero = "Hi".charCodeAt(4);
   console.log(numero);

// codePointAt()
/* Devuelve un entero no negativo que equivale al valor Unicode code point del carácter.*/
   numero = "Hello World".codePointAt(4);
   console.log(numero);

   numero = "\uD800\uDC00".codePointAt(4);
   console.log(numero);

   numero = "XYZ".codePointAt(6);
   console.log(numero);

// concat()
/* Se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.*/
   cadena = "Marlon ";
   var cadena2 = "Torres";
   var cadena3 = cadena.concat(cadena2);
   console.log(cadena3);

   cadena = ['a', 'b', 'c'];
   var cadena2 = [1, 2, 3];
   var cadena3 = cadena.concat(cadena2);
   console.log(cadena3);

   cadena = "QUE ";
   var cadena2 = "ONDA";
   var cadena3 = cadena.concat(cadena2);
   console.log(cadena3);

// endsWith()
/* Determina cuando una cadena termina con los caracteres de otra cadena, devuelve true o false según sea.*/
   console.log("Hola, Mundo como estan todos".endsWith("todos"));
   console.log("Hola, Mundo como estan todos".endsWith("estan"));
   console.log("Hola, Mundo como estan todos".endsWith("estan", 22));
   
// includes()
/* Determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.*/
   console.log("Hola, Mundo como estan todos".includes(","));
   console.log("Hola, Mundo como estan todos".includes(",", 8));
   cadena = ['cat', 'dog', 'mouse'];
   console.log(cadena.includes('mouse'));

// indexOf()
/* Retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.*/
   console.log("Hola, Mundo como estan todos".indexOf(","));
   console.log("Hola, Mundo como estan todos".indexOf(",", 8));
   cadena = ['cat', 'dog', 'mouse'];
   console.log(cadena.indexOf('mouse'));

// lastIndexOf()
/* Devuelve la posicion (indice) en la que se encuentra el valorBusqueda, 
   dentro del objeto String que realiza la llamada, de la última ocurrencia del valor especificado; 
   o -1 si no se halla. La búsqueda se realiza empezando por el final de la cadena que realiza la llamada, empezando en indiceDesde.*/
   console.log("Hola, Mundo como estan todos".lastIndexOf("o"));

// localeCompare()
   console.log('Marlon'.localeCompare("Torres"));

// normalize()
/* give me an example that does an action a string */
   console.log('\u1E9B\u0323'.normalize('NFC'));

// padEnd()
/* give me an example that does an action a string */
   console.log("Esta historia continuara".padEnd(30, '.'));

// padStart()
/* give me an example that does an action a string */
   console.log(" Ahora mismo".padStart(15, '.'));

// repeat()
/* give me an example that does an action a string */
   console.log("y sigue ".repeat(8));

// replace()
/* give me an example that does an action a string */
   console.log("Hola mundo, como estan todos".replace("o", "e"));

// search()
/* give me an example that does an action a string */
   console.log("Hola mundo, como estan todos".search("como"));

// slice()
/* give me an example that does an action a string */
   var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
   var masculinos = nombres.slice(1, 3);

// split()
/* give me an example that does an action a string */
   var cadena = "Marlon Esteban Torres Huerta"
   var partes = cadena.split(" ");

// startsWith()
/* give me an example that does an action a string */
   console.log("Hola mundo".startsWith("Ho"));

// substring()
/* give me an example that does an action a string */
   console.log("Hola mundo".substring(6, 11));

// toLocaleLowerCase()
/* give me an example that does an action a string */
   console.log("Hola mundo".toLocaleLowerCase());

// toLocaleUpperCase()
/* give me an example that does an action a string */
   console.log("Hola mundo".toLocaleUpperCase());

// toLowerCase()
/* give me an example that does an action a string */
   console.log("Hola mundo".toLowerCase());

// toString()
/* give me an example that does an action a string */
   numero = 10;
   console.log(numero.toString());

// toUpperCase()
/* give me an example that does an action a string */
   console.log("Hola mundo".toUpperCase());

// trim()
/* give me an example that does an action a string */
   console.log("     Hola mundo".trim());

// trimEnd()
/* give me an example that does an action a string */
   console.log("     Hola mundo      ".trimEnd());

// trimStart()
/* give me an example that does an action a string */
   console.log("     Hola mundo      ".trimStart());


/* give me 3 example using all the String functions above over the same String*/
   var ejemplo = "Marlon Esteban Torres Huerta";

   ejemplo = ejemplo.fromCharCode(64);
   ejemplo = ejemplo.fromCharCode(65, 112, 120);
   ejemplo = ejemplo.fromCharCode(25, 32, 118);

   ejemplo = ejemplo.fromCodePoint(123, 125);
   ejemplo = ejemplo.fromCodePoint(124, 124);
   ejemplo = ejemplo.fromCodePoint(164);

   ejemplo = "Marlon Esteban Torres Huerta";

   console.log(ejemplo.charAt(1));
   console.log(ejemplo.charAt(12));
   console.log(ejemplo.charAt(16));

   console.log(ejemplo.codePointAt(1));
   console.log(ejemplo.codePointAt(12));
   console.log(ejemplo.codePointAt(16));

   console.log(ejemplo.concat(" soy yo"));
   console.log(ejemplo.concat(" mi nombre es"));
   console.log(ejemplo.charAt(" llllllll"));

   console.log(ejemplo.endsWith("a"));
   console.log(ejemplo.endsWith("Huerta"));
   console.log(ejemplo.endsWith("s", 21));

   console.log(ejemplo.includes("o"));
   console.log(ejemplo.includes("a"));
   console.log(ejemplo.includes("rr"));

   console.log(ejemplo.lastIndexOf("s"));
   console.log(ejemplo.lastIndexOf("n"));
   console.log(ejemplo.lastIndexOf("o", 6));

   console.log(ejemplo.localeCompare("Hola Mundo"));
   console.log(ejemplo.charAt("Que Hongo"));
   console.log(ejemplo.charAt("Un stRING"));

   console.log(ejemplo.normalize("NFC"));
   console.log(ejemplo.normalize("NFD"));
   console.log(ejemplo.normalize("NFKC"));

   console.log(ejemplo.padEnd(ejemplo.length + 6));
   console.log(ejemplo.padEnd(ejemplo.length + 10));
   console.log(ejemplo.padEnd(ejemplo.length + 4));

   console.log(ejemplo.padStart(ejemplo.length + 6));
   console.log(ejemplo.padStart(ejemplo.length + 10));
   console.log(ejemplo.padStart(ejemplo.length + 4));

   console.log(ejemplo.repeat(2));
   console.log(ejemplo.repeat(1));
   console.log(ejemplo.repeat(3));

   console.log(ejemplo.replace("o", "e"));
   console.log(ejemplo.replace(" ", ""));
   console.log(ejemplo.replace("n", "s"));

   console.log(ejemplo.search("on"));
   console.log(ejemplo.search("an"));
   console.log(ejemplo.search("en"));

   console.log(ejemplo.slice(2, 10));
   console.log(ejemplo.slice(10, 16));
   console.log(ejemplo.slice(6, 12));

   var arr = ejemplo.split("");
   arr = ejemplo.split(" ");
   arr = ejemplo.split("n"); 

   console.log(ejemplo.startsWith("M"));
   console.log(ejemplo.startsWith("Marlon"));
   console.log(ejemplo.startsWith("E", 7));

   console.log(ejemplo.substring(2, 10));
   console.log(ejemplo.substring(10, 16));
   console.log(ejemplo.substring(6, 12));

   console.log(ejemplo.toLocaleLowerCase());
   console.log(ejemplo.toLocaleLowerCase());
   console.log(ejemplo.toLocaleLowerCase());

   console.log(ejemplo.toLocaleUpperCase());
   console.log(ejemplo.toLocaleUpperCase());
   console.log(ejemplo.toLocaleUpperCase());

   console.log(ejemplo.toLowerCase());
   console.log(ejemplo.toLowerCase());
   console.log(ejemplo.toLowerCase());

   console.log(ejemplo.toUpperCase());
   console.log(ejemplo.toUpperCase());
   console.log(ejemplo.toUpperCase());

   ejemplo = 96;
   console.log(ejemplo.toString());
   ejemplo = 9;
   console.log(ejemplo.toUpperCase());
   ejemplo = 6;
   console.log(ejemplo.toUpperCase());

   ejemplo = "      Marlon    Esteban Torres   Huerta      ";
   console.log(ejemplo.trim());
   ejemplo = " Marlon    Esteban Torres   Huerta      ";
   console.log(ejemplo.trim());
   ejemplo = "      Marlon    Esteban Torres Huerta      ";
   console.log(ejemplo.trim());
   
   ejemplo = "      Marlon    Esteban Torres   Huerta      ";
   console.log(ejemplo.trimEnd());
   ejemplo = "      Marlon Esteban Torres   Huerta      ";
   console.log(ejemplo.trimEnd());
   ejemplo = " Marlon    Esteban Torres   Huerta      ";
   console.log(ejemplo.trimEnd());

   ejemplo = "      Marlon    Esteban Torres   Huerta      ";
   console.log(ejemplo.trimStart());
   ejemplo = "      Marlon Esteban Torres   Huerta      ";
   console.log(ejemplo.trimStart());
   ejemplo = " Marlon    Esteban Torres   Huerta      ";
   console.log(ejemplo.trimStart());

