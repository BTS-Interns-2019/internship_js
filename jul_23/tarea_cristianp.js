// 2

// MAX_VALUE
/* describe what it is? */
/*Max value es una propiedad que indica el numero mayor positivo representable en javascript
si se le agrega un numero mas (+1) este es representado como infinity, como es una propiedad estatica
este debe representarse como Number.MAX_VALUE//*/

// MIN_VALUE
/* describe what it is? */
/*Min value es el numero negativo menor que soporta javascript, un numero menos se convierte en 0.
Debe ser utilizada como Number.MIN_VALUE como propiedad, no como objeto//*/

// NaN
/* describe what it is? */
/*NaN indica un numero que no es un numero, no es equivalente a ningun numero ni a un mismo nan //*/

// NEGATIVE_INFINITY
/* describe what it is? */
/*Esta propiedad Indica el valor del infinito negativo (-infinity) aplica la ley de los signos
cuando se multiplica por +inifity mas por menos da menos, menos por menos mas. multiplicado por
cero resulta como NaN y cualquier numero dividido por -infinity da -0//*/

// POSITIVE_INFINITY
/* describe what it is? */
/*Esta propiedad es el infinito positivo solo se puede acceder a ella como Number.POSITIVE_INFINITY 
cualquier numero dividido por INFINITY da cero aplica las reglas de la multiplicacion mas por mas
da mas, mas por menos menos, igual en la divicion. Multiplicado por cero da NaN. al igual que
multiplicarlo por NaN da NaN. dividirlo por infinity o positive da NaN etc.//*/

// EPSILON
/* describe what it is? */
 /*Tiene el valor de 2.2204460492503130808472633361816E-16, o .2-52 aunque no es el valor
 maximo flotante que puede representar javascript, pero es el denominado como mas pequeño entre el 1 y
 1.1//*/

// MIN_SAFE_INTEGER
/* describe what it is? */
/*Constante que representa el entero seguro minimo en javascript. minimo dado que es negativo.
 (-9,007,199,254,740,991) aunque la pagina oficial dice que son -9 cuatrillones ,opino que son 
 -9 mil billones. Si se le resta uno y se le aplica el metodo isSafeIteger, este retorna false//*/

// MAX_SAFE_INTEGER
/* describe what it is? */
/*Constante que representa el entero seguro maximo en javascript o en los navegadores. al parecer
el aumentar un numero mas a esta constante difiere en resultados, y puede pasar condiciones que
no deberian. Tambien al agregar 1 (++) a MAX_SAFE_INTEGER y evaluarlo con el metodo isSafeInteger
este retorna false//*/



// parseFloat()
/* do a description and gime me 3 examples of its ussage */
/*Funcion que analisa un argumento y devuelve un numero con decimal o punto flotante, se puede
analizar cualquier valor incluso cadenas, aunque estas retornen NaN //*/
console.log("....parseFloat");
a = parseFloat('3.14');
console.log(a);
b= parseFloat("236.545asd");
console.log(b);
c = parseFloat("asdasdasd");
console.log(c);

// parseInt()
/* do a description and gime me 3 examples of its ussage */
/*función analiza un argumento de cadena y devuelve un número entero, en este se espesifica
la base de sistema numerico al que se va a convertir como binario, exadecimal, octal//*/
console.log("....parseint");
d = parseInt(2.1523)
console.log(d);
f = parseInt('0xF', 16);
console.log(f);
g = parseInt('10110', 2);
console.log(g);

// isFinite()
/* do a description and gime me 3 examples of its ussage */
/*Esta funcion determina si cierto numero es finito devolvera negativo solo con NaN infinito positivo
y negativo de lo contrario devuelve true//*/
console.log("....Finite");
console.log(isFinite(Infinity));
console.log(isFinite(NaN));
console.log(isFinite(0));

// isInteger()
/* do a description and gime me 3 examples of its ussage */
/*Analiza el parametro para determinar si es un entero o no devolviendo true o false//*/
console.log("....Integer");
console.log(isFinite(98456165884612));
console.log(isFinite(NaN));
console.log(isFinite(Infinity));

// isNaN()
/* do a description and gime me 3 examples of its ussage */
/* determina si un valor dentro del argumento es numero o no//*/
console.log("....NaN");
console.log(isNaN(NaN));
console.log(isNaN("asdasd"));
console.log(isNaN(parseInt("12345asdasd")));
console.log(isNaN(12345));

// isSafeInteger()
/* do a description and gime me 3 examples of its ussage */
/*Este metodo determina si el valor pasado como argumento es un entero seguro//*/
console.log("....isSafeInteger");
console.log(Number.isSafeInteger(-9007199254740992));
console.log(Number.isSafeInteger(-9007199254740991));
console.log(Number.isSafeInteger(9007199254740992));

// toExponential()
/* do a description and gime me 3 examples of its ussage */
/*método devuelve una cadena que representa el objeto Número en notación exponencial.//*/
console.log("....toExponential");
var h = 32145.258741;
console.log(h.toExponential());
console.log((1243.1.toExponential()));
console.log(3.1916.toExponential(1));

// toFixed()
/* do a description and gime me 3 examples of its ussage */
/*Este método formatea un número usando notación de punto fijo.//*/
console.log("....toFixed");
var i = 78974.48579;
console.log(i.toFixed());
console.log(i.toFixed(1));
console.log(i.toFixed(4));


// toPrecision()
/* write a description and gime me 3 examples of its ussage */
/*método devuelve una cadena que representa el Numberobjeto con la precisión especificada.
parametros opcionales, un entero que espesifica el numero de digitos significados//*/
console.log("....toPrecision");
var j = 456.4564;
console.log(j.toPrecision());
console.log(j.toPrecision(2));
console.log(j.toPrecision(6));


// String


// fromCharCode()
/* give me an example that does an action a string */
/*Este método estático que devuelve una cadena creada mediante el uso de una secuencia de
valores Unicode especificada.//*/
console.log("....fromCharCode");
console.log(String.fromCharCode(65,66,67));
console.log(String.fromCharCode(952,92,658));
var pa ="";
for(var p = 0; p <=3500; p++)
{
    pa += String.fromCharCode(p) + " ";
}
console.log(pa);

// fromCodePoint()
/* give me an example that does an action a string */
/*Método estático devuelve una cadena creada utilizando la secuencia especificada de puntos de código.
//*/
console.log("....fromCodePoint");
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2F804));
console.log(String.fromCodePoint(10001, 10002, 10003));
var pa ="";
for(var p = 8000; p <=10000; p++)
{
    pa += String.fromCharCode(p) + " ";
}
console.log(pa);
// charAt()
/* give me an example that does an action a string */
/*devuelve en un nuevo String el carácter UTF-16 de una cadena.//*/
console.log("....charAt");
var cadena="la ñostia ya me canse";

console.log("índice " + cadena.charAt(0))
console.log("índice " + cadena.charAt(1))
console.log("índice " + cadena.charAt(3))

// charCodeAt()
/* give me an example that does an action a string */
/* método que devuelve un número indicando el valor Unicode del carácter en el índice proporcionado.//*/
console.log("....charCodeAt");
console.log("Cris".charCodeAt(0));

// codePointAt()
/* give me an example that does an action a string */
/*método devuelve un entero no negativo que es el valor de punto de código Unicode.//*/
console.log("....codePointAt");
var ic = '☃';

console.log(ic.codePointAt(1));

// concat()
/* give me an example that does an action a string */
/*se utiliza para combinar dos o más cadenas. Este método no cambia las cadenas existentes, sino
que retorna una nueva cadena.//*/
console.log("....concat");
cadena1="tengo ";
cadena2="mucho ";
cadena3="sueño'.";
cadena4=cadena1.concat(cadena2,cadena3);
console.log(cadena4);

// endsWith()
/* give me an example that does an action a string */
/*método determina si una cadena termina con los caracteres de una cadena
específica, devolviendo trueo falsesegún corresponda.//*/
console.log("....endsWith");
var pal = "Tengo mucha hambre";
console.log(pal.endsWith('hambre'));

// includes()
/* give me an example that does an action a string */
/*Este metodo determina si una matriz incluye un determinado elemento, devuelve
true o false según corresponda.//*/
console.log("....includes");
console.log([1, 2, 3].includes(2));

// indexOf()
/* give me an example that does an action a string */
/*Este metodo retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó
retorna -1 si el elemento no esta presente.//*/
console.log("....indexOf");
var array = [25, 15, 5];
console.log(array.indexOf(5));

// lastIndexOf()
/* give me an example that does an action a string */
/*devuelve el último índice en el que un cierto elemento puede encontrarse en el arreglo, ó -1 si
el elemento no se encontrara. El arreglo es recorrido en sentido contrario, empezando por el índice
fromIndex.//*/
console.log("....lastIndexOf");
var array = [2, 5, 9, 2];
console.log(array.lastIndexOf(2));



// localeCompare()
/* give me an example that does an action a string */
/*método devuelve un número que indica si una cadena de referencia viene antes o después o si es la
misma que la cadena dada en orden de clasificación.//*/
console.log("....localeCompare");
console.log('a'.localeCompare('c'));


// normalize()
/* give me an example that does an action a string */
/*retorna la Forma de Normalización Unicode de la cadena dada (si el valor no es una cadena, primero
    será convertido a ese tipo).//*/
console.log("....normalize");
var str = '\u1E9B\u0323';
console.log(str.normalize('NFC'));

// padEnd()
/* give me an example that does an action a string */
/*método que rellena la cadena actual con una cadena dada (repetida, si es necesario) para que la cadena
resultante alcance una longitud determinada. El relleno se aplica desde el final de la cadena actual.//*/
console.log("....padEnd");
console.log('fackpor'.padEnd(10, "ñoño"));

// padStart()
/* give me an example that does an action a string */
/*rellena la cadena actual con una cadena dada (repetida eventualmente) de modo que la cadena resultante
alcance una longitud dada. El relleno es aplicado desde el inicio (izquierda) de la cadena actual.//*/
console.log("....padStart");
console.log('pl'.padStart(10, "cris"));

// repeat()
/* give me an example that does an action a string */
/*construye y devuelve una nueva cadena que contiene el número especificado de copias de la cadena en la cual
fue llamada, concatenados.//*/
console.log("....repeat");
console.log("cris".repeat(5));

// replace()
/* give me an example that does an action a string */
/*halla un emparejamiento entre una expresión regular y una cadena, y reemplaza la subcadena emparejada con
una nueva subcadena.//*/
console.log("....replace");
var cadena = "merry Xmas...";
var nuevaCadena = cadena.replace(/xmas/i, "Christmas");
console.log(nuevaCadena);

// search()
/* give me an example that does an action a string */
/*ejecuta una búsqueda que encaje entre una expresión regular y el objeto String desde el que se llama.//*/
console.log("....search");
var pk = "la ostia me duelen las nachas";
console.log(pk.search("ostia"));

// slice()
/* give me an example that does an action a string */
/* extrae una sección de una cadena y devuelve una cadena nueva.//*/
console.log("....slice");
var cadena1 = "que cansadp";
var cadena2 = cadena1.slice(3, -2);
console.log(cadena2);

// split()
/* give me an example that does an action a string */
/*divide un objeto de tipo String en un array (vector) de cadenas mediante la separacion
de la cadena en subcadenas//*/
console.log("....split");
var miCadena = "Hola Mundo. Cómo estás hoy?";
var divisiones = miCadena.split(" ");
console.log(divisiones[1], divisiones[2]);

// startsWith()
/* give me an example that does an action a string */
/*indica si un string inicia con los caracteres de otro string, regresando true o false según sea el caso.//*/
console.log("....startsWith");
var str = 'Ser, o no ser. ¡Esa es la cuestión!';
console.log(str.startsWith('Ser'));

// substring()
/* give me an example that does an action a string */
/*método que devuelve un subconjunto de un objeto String.//*/
console.log("....substring");
var cad = "mestizo";
console.log(cad.substring(0,3));


// toLocaleLowerCase()
/* give me an example that does an action a string */
/*método que devuelve el valor de la cadena de llamada convertido a
minúsculas, de acuerdo con las asignaciones de casos específicas del entorno local.//*/
console.log("....toLocaleLowerCase");
var gf = "AAAAAAHHHH!";
console.log(gf.toLocaleLowerCase());

// toLocaleUpperCase()
/* give me an example that does an action a string */
/*método que devuelve el valor de la cadena de llamada convertido a mayúsculas, de acuerdo con
las asignaciones de casos específicas de la localidad.//*/
console.log("....toLocaleUpperCase");
var gf = "aaaaaahhhhhh";
console.log(gf.toLocaleUpperCase());

// toLowerCase()
/* give me an example that does an action a string */
/*devuelve el valor en minúsculas de la cadena que realiza la llamada.//*/
console.log("....toLowerCase");
console.log("Mexico".toLowerCase());

// toString()
/* give me an example that does an action a string */
/*método que devuelve una cadena que representa al objeto especificado.//*/
console.log("....toString");
cadena = new String("Hello world");
console.log(cadena.toString());

// toUpperCase()
/* give me an example that does an action a string */
/*método que devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.//*/
console.log("....toUpperCase");
console.log( "alphabet".toUpperCase() );

// trim()
/* give me an example that does an action a string */
/*Este método elimina los espacios en blanco de ambos extremos de una cadena. Los espacios en
blanco en este contexto son todos los caracteres de espacio en blanco (espacio, tabulador, espacio
    de no interrupción, etc.) y todos los caracteres de línea de terminación (LF, CR, etc.).//*/
console.log("....trim");
var orig = '   foo  ';
console.log(orig.trim());

// trimEnd()
/* give me an example that does an action a string */
/*método elimina los espacios en blanco del final de una cadena. trimRight()Es un alias de este método.//*/
console.log("....trimEnd");
var orig = '   foo  ';
console.log(orig.trimEnd());

// trimStart()
/* give me an example that does an action a string */
/*método elimina los espacios en blanco desde el principio de una cadena. trimLeft()Es un alias de
este método.//*/
console.log("....trimStart");
var orig = '   foo  ';
console.log(orig.trimStart());


/* give me 3 example using all the String functions above over the same String*/
var c = "Cristian";
console.log(c);
console.log(c.toUpperCase());
console.log(c.toLowerCase());
console.log(c.localeCompare('r'));
console.log(c.charAt(4));
console.log(c.charCodeAt(0));
var d = "rabbin";
console.log(c.concat(d));


