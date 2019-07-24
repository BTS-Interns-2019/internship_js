// Number

// MAX_VALUE
/* Propiedad que representa el valor numérico positivo máximo representable en JavaScript */
// MIN_VALUE
/* Propiedad que representa el menor valor positivo numérico representable en JavaScript */
// NaN
/* Es una variable de alcance global, su nombre en Not a Number y nunca es 
equivalente con cualquier otro número, incluido el mismo. Por ello se utiliza la funcion
isNaN() para ello, se presenta cuando un valor numerico o string no puede ser parseado a su contraparte */
// NEGATIVE_INFINITY
/* Es el mismo que el valor negativo de la propiedad del objeto global Infinity, su comportamiento es un poco
distinto a su función matemática; si se multiplica por POSITIVE_INFINITY resulta NEGATIVE_INFINITY, si se 
multiplica por NEGATIVE_INFINITY resulta NEGATIVE_INFINITY, si se multiplica por 0 resulta NaN, si se multiplica 
por NaN resulta NaN, divido por cualquier valor negativo excepto NEGATIVE_INFINITY, da como resultado POSITIVE_INFINITY,
divido por cualquier valor positivo excepto POSITIVE_INFINITY, da como resultado NEGATIVE_INFINITY, divido por 
NEGATIVE_INFINITY o por POSITIVE_INFINITY, da como resultado NaN y cualquier numero divido por NEGATIVE_INFINITY 
da como resultado cero*/
// POSITIVE_INFINITY
/* Es el mismo valor de la propiedad Infinity del objeto global, su comportamiento es un poco distinto a su funcion;
multiplicado por POSITIVE_INFINITY da como resultado POSITIVE_INFINITY, multiplicado por POSITIVE_INFINITY da como 
resultado NEGATIVE_INFINITY, multiplicado por 0 da como resultado NaN, multiplicado por NaN da como resultado NaN,
dividido por cualquier valor negativo excepto NEGATIVE_INFINITY, da como resultado NEGATIVE_INFINITY, divido por 
cualquier valor positivo excepto POSITIVE_INFINITY, da como resultado POSITIVE_INFINITY, divido por INFINITY o 
por POSITIVE_INFINITY, da como resultado NaN y cualquier numero divido por POSITIVE_INFINITY da como resultado cero */
// EPSILON
/* Propiedad que representa la diferencia entre 1 y el numero con punto flotante más pequeño que sea mayor a 1  */
// MIN_SAFE_INTEGER
/* Propiedad que representa el valor minimo flotante de doble precision de forma exacta y segura para su correcta comparacion */
// MAX_SAFE_INTEGER
/* Propiedad que representa el valor maximo flotante de doble precision de forma exacta y segura para su correcta comparacion */

// parseFloat()
/* Convierte una cadena de caracteres y devuelve un numero de punto flotante */
var cadena1 = '24.12';
var cadena2 = "Hola";
var cadena3 = "0.12E+4";
var flotante1 = parseFloat(cadena1);//Obtiene 24.12
var flotante2 = parseFloat(cadena2);//Obtiene NaN
var flotante3 = parseFloat(cadena3);//Obtiene 1200
// parseInt()
/* Convierte un argumento en un valor entero en alguna base especificada */
var argumento1 = 14.85;
var argumento2 = "5C";
var argumento3 = "1101001101001110101";
var entero1 = parseInt(argumento1);//Obtiene 14
var entero2 = parseInt(argumento2, 16);//Obtiene 92
var entero3 = parseInt(argumento3, 2);//Obtiene 432757
// isFinite()
/* Determina si el parametro con el que se le relaciona es finito */
isFinite(28);//true
isFinite(Infinity);//false
isFinite("0");//true
// isInteger()
/* Determina si el valor relacionado es entero */
Number.isInteger(16);//true
Number.isInteger(2.5);//false
Number.isInteger('12');//false
// isNaN()
/* Determina si el valor relacionado se puede convertir a numero, si no se puede regresa verdadero */
isNaN(NaN);//true
isNaN("Hola");//true
isNaN('15');//false
// isSafeInteger()
/* Determina si el valor relacionado es un entero seguro, es decir, puede ser exactamente representado como 
un número IEEE-754 de doble presición, y su representación IEEE-754 no puede ser el resultado de redondear 
cualquier otro entero para  adaptarse a la representación de IEEE-754 */
Number.isSafeInteger(22);//true
Number.isSafeInteger(Infinity);//false
Number.isSafeInteger(Math.pow(2, 53) -1);//true
// toExponential()
/* Metodo que devuelve un numero en una cadena expuesta en la notacion exponencial */
var numero1 = 53.2;
var numero2 = 0.00032015;
var numero3 = 125000020;
var notacion1 = numero1.toExponential();//Regresa '5.32e+1'
var notacion2 = numero2.toExponential();//Regresa '3.2015e-4'
var notacion3 = numero3.toExponential();//Regresa ''1.2500002e+8''
// toFixed()
/* Metodo que devuelve una representacion en cadena de caracteres sin uso de punto decimal y es capaz de capturar la cantidad de digitos 
despues del punto decimal*/
var numerofijo = 100.00253214;
var sindecimal = numerofijo.toFixed();//Regresa 100
var condos = numerofijo.toFixed(2);//Regresa 100.00
var condiez = numerofijo.toFixed(10);//Regresa 100.0025321400
// toPrecision()
/* Metodo que devuelve una cadena que representa un objeto de tipo Number segun la precision especificada */
var flotantexp = 4.3216783324071501842;
var precbaja = flotantexp.toPrecision(1);//Regresa 4
var precmedia = flotantexp.toPrecision(5);//Regresa 4.3217
var precalta = flotantexp.toPrecision();//Regresa 4.32167833240715

// String

// fromCharCode() utf-8
String.fromCharCode(77,105,103,117,101,108);//Imprime "Miguel"
// fromCodePoint() unicode
String.fromCodePoint(77,105,103,117,101,108);//Imprime "Miguel"
// charAt()
palabra = "Hola Mundo";
palabra.charAt(6);//Regresa la letra u de Mundo
// charCodeAt()
nombrej = "伊達政宗";
nombrej.charCodeAt(1);//Regresa valor utf 36948
// codePointAt()
nombrej.codePointAt(1);//Regresa valor unicode 36948
// concat()
parte1 = "Hola";
parte2 = ", ";
parte3 = "Mundo";
mensaje = parte1.concat(parte2,parte3);//Regresa 'Hola, Mundo'
// endsWith()
mensaje.endsWith('ndo');//Regresa true por Mundo
// includes()
mensaje.includes('ola');//Regresa true por Hola
// indexOf()
mensaje.indexOf('Mundo');//Regresa la pocision 6
// lastIndexOf()
ciudad = "Guadalajara";
ciudad.lastIndexOf('a');//Regresa posicion de la ultima 'a'
// localeCompare()
'A'.localeCompare('B');//Regresa -1 dado que la letra A va antes que la B
// normalize()
var str = '\u1E9B\u0323';
str.normalize('NFKC');//Regresa valor cuando no sea string 'ṩ'
// padEnd()
var cadenafin = "hola";
cadenafin.padEnd(10,'123456789');//Regresa 'hola123456'
// padStart()
cadenafin.padStart(10,'123456789');//Regresa '123456hola'
// repeat()
saludo = "Hola, ";
saludo.repeat(3);//Regresa 'Hola, Hola, Hola, '
// replace()
var re = /manzanas/gi;
var str = "Las manzanas son redondas, y las manzanas son jugosas.";
var newstr = str.replace(re, "duraznos");//Remplaza manzanas por duraznos
// search()
var palabra = 'Este mensaje es prueba de search';
palabra.search('de');//Regresa la posicion 23
// slice()
var apellidos = ['Gonzalez','Sanchez','Gutierrez','Gomez','Juarez','Ramirez','Martinez'];
var con_g = apellidos.slice(2,4);//Captura Gutierrez y Gomez
// split()
var divpal = palabra.split(' ');//Divide la palabra por espacio
// startsWith()
palabra.startsWith('Este');//Regresa true
// substring()
var palabradiez = palabra.substring(0,10);//Solo toma los primeros 10 caracteres del mensaje
// toLocaleLowerCase()
var tllc = palabra.toLocaleLowerCase();//Los vuelve en minusculas
// toLocaleUpperCase()
var tluc = palabra.toLocaleUpperCase();//Los vuelve en mayusculas
// toLowerCase()
palabra.toLowerCase();//Los vuelve en minusculas
// toString()
var obj = {a:1,b:2,c:3}
obj.toString();//Retorna [object Object]
// toUpperCase()
palabra.toUpperCase();//Los vuelve en mayusculas
// trim()
var stuff = '     hola     ';
stuff.trim();//Quita espacios iniciales y finales de hola
// trimEnd()
stuff.trimEnd();//Quita espacios finales de hola
// trimStart()
stuff.trimStart();//Quita espacios iniciales de hola

/* give me 3 example using all the String functions above over the same String*/
var oracion1 = "     Este es un mensaje, tu puedes decidir si lo quieres ver, o no. 12     ";
var re1 = /,/gi;
oracion1.trimEnd();
oracion1.trimStart();
var aux1 = oracion1.trim();
var sp1 = aux1.split(' ');
var val1 = (sp1.length-1);
var vls1 = ""+val1;
String.fromCharCode(vls1);
String.fromCodePoint(vls1);
aux1.charAt(12);
aux1.charCodeAt(15);
aux1.codePointAt(18);
sp1[0].concat(sp1[val1]);
aux1.endsWith('mundo');
aux1.includes('saje');
aux1.indexOf('tu');
aux1.lastIndexOf('er');
sp1[0].localeCompare(sp1[val1]);
aux1.normalize('NFKC');
var rep1 = aux1.repeat(5);
aux1.padEnd(80,rep1);
aux1.padStart(80,rep1);
aux1.replace(re1, "_");
aux1.search('es');
sp1.slice(1,3);
aux1.startsWith('mensaje');
aux1.substring(5,15);
sp1.toString();
aux1.toLocaleLowerCase();
aux1.toLocaleUpperCase();
aux1.toLowerCase();
aux1.toUpperCase();

var oracion2 = "  hola hola hola hola hola hola hola hola hola hola hola mi querido mundo. 33  ";
var re2 = /hola/gi;
oracion2.trimEnd();
oracion2.trimStart();
var aux2 = oracion2.trim();
var sp2 = aux2.split(' ');
var val2 = (sp2.length-1);
var vls2 = ""+val2;
String.fromCharCode(vls2);
String.fromCodePoint(vls2);
aux2.charAt(25);
aux2.charCodeAt(21);
aux2.codePointAt(6);
sp2[0].concat(sp2[val2]);
aux2.endsWith('33');
aux2.includes('er');
aux2.indexOf('mi');
aux2.lastIndexOf('ola');
sp2[0].localeCompare(sp2[val2]);
aux2.normalize('NFKC');
var rep2 = aux2.repeat(8);
aux2.padEnd(110,rep2);
aux2.padStart(110,rep2);
aux2.replace(re2, "adios");
aux2.search('mi');
sp2.slice(4,7);
aux2.startsWith('mensaje');
aux2.substring(12,30);
sp2.toString();
aux2.toLocaleLowerCase();
aux2.toLocaleUpperCase();
aux2.toLowerCase();
aux2.toUpperCase();

var oracion3 = "  la lista es, una naranja, una pera, una manzana, un durazno, una banana, una uva, una fresa, una guayaba. ,71  ";
var re3 = /una/gi;
oracion3.trimEnd();
oracion3.trimStart();
var aux3 = oracion3.trim();
var sp3 = aux3.split(',');
var val3 = (sp3.length-1);
var vls3 = ""+val3;
String.fromCharCode(vls3);
String.fromCodePoint(vls3);
aux3.charAt(7);
aux3.charCodeAt(19);
aux3.codePointAt(10);
sp3[0].concat(sp3[val3]);
aux3.endsWith('melones');
aux3.includes('ra');
aux3.indexOf('nza');
aux3.lastIndexOf('na');
sp3[0].localeCompare(sp3[val3]);
aux3.normalize('NFKC');
var rep3 = aux3.repeat(6);
aux3.padEnd(125,rep3);
aux3.padStart(125,rep3);
aux3.replace(re3, "cinco");
aux3.search('es');
sp3.slice(1,5);
aux3.startsWith('la');
aux3.substring(8,24);
sp3.toString();
aux3.toLocaleLowerCase();
aux3.toLocaleUpperCase();
aux3.toLowerCase();
aux3.toUpperCase(); 