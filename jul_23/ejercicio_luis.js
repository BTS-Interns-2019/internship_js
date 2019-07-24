// Number


// MAX_VALUE
/* Reresa el valor mas alto que puede valer un number */

// MIN_VALUE
/*Reresa el valor mas bajo que puede valer un number */

// NaN
/* Regresa si un valor es numerico o no */

// NEGATIVE_INFINITY
/* Regresa infinito negativo */

// POSITIVE_INFINITY
/* Regresa infinito positivo */

// EPSILON
/* Regresa 1 - el numero flotante mas pequeño mayor que uno */

// MIN_SAFE_INTEGER
/* El entero mas pequeño sin usar BigInt */

// MAX_SAFE_INTEGER
/* El entero mas grande sin usar BigInt*/



// parseFloat()
/* regresa el valor flotante de lo que recibe
 parseFloat("2.5") //2.5
 parseFloat(3)//3.0
 parseFloat(2.6)//2.8
*/

// parseInt()
/* regresa el valor entero de lo que recibe
parseInt(4.5)//4
parseInt("3")//3
parseInt(2)//2
*/

// isFinite()
/* regresa si el valor que recibe representa infinito 
//isInfinite(x/0)//true
//isInfinite(Number.POSITIVE_INFINITE)//true
//isInfinite(1)//false
*/

// isInteger()
/* regresa si el valor que recibe es entero
//isInteger(2.3)//false
isInteger(34)//true
isInteger(-4)//true
*/

// isNaN()
/* recibe un parametro y regresa si no es un numero
// isNan(2)//false
// isNan("ddff")//true
// isNan(null)//true
*/

// isSafeInteger()
/* recibe un parametro y regresa si esta dentro de la precisión de integer
//Number.isSafeIteger(Math.pow(2, 53))//false
//Number.isSafeIteger(4)//true
Number.isSafeIteger(Math.pow(2, 54))//false
*/

// toExponential()
/* regresa el numero  en notacion exponencial
//5.56789.toExponential()//5.56789e+0
//(2.567*4.7656464).toExponential()//1.22334143088e+1
//6.toExponential()//6e+0
*/

// toFixed()
/* Convierte un numero en string manteniendo las decimales especificadas
// 5.56789.toFixed(2)//"5.56"
// 23.767542.toFixed(3)//"23.767"
// 32.09823.toFixed(1)// "32.0"
*/

// toPrecision()
/* Regresa el numero con la longitud especificada
//12.995.toPrecision(3)//13.0
//138.1345.toPrecision(2)//128.13
//2.111 .toPrecision(1)//2
*/


// String


// fromCharCode()
/* regresa el caracter correspondiente en UTF-16
//String.fromCharcode(61) // "="
//String.fromCharcode(64) //"@"
//String.fromCharcode(43) //"+"
*/

// fromCodePoint()
/* regresa la cadena correspondiente en ASCII 
//String.fromCodePoint(91,64,93)//[@]
//String.fromCodePoint(35,33)//#!
//String.fromCodePoint(83,79,83)//SOS
*/

// charAt()
/* regresa el caracter en la posicion dada, de ese string 
//"hamburguera".charAt(3)//'b'
//"hp".charAt(1)//'p'
//"uhtguig".chartAt(2)//'h'
*/

// charCodeAt()
/* La diferencia con charAt es que en vez de regresar el caracter regresa el valor en ASCII 
// "@[]".charCodeAt(0)//64
// "@[]".charCodeAt(1)//91
// "@[]".charCodeAt(2)//93
*/

// codePointAt()
/* igual que el anterior pero con UTF-16
// "@[]".codePointAt(0)//64
// "@[]".codePointAt(1)//91
// "@[]".codePointAt(2)//93
*/

// concat()
/* concatena 2 arrays
// ['a', 'b', 'c'].concat(['d', 'e', 'f'])//['a', 'b', 'c','d', 'e', 'f']
 ['a', 'b', 'c'].concat(['d', ['e', 'f'])//['a', 'b', 'c','d', 'e', 'f']
  ['a', 'b', 'c'].concat(['d', 'e', 'f'],['g', 'h', 'i'])//['a', 'b', 'c','d', 'e', 'f','g','h','i']
*/

// endsWith()
/* Regresa si el string termina con el parametro recibido
//"hamburguesa".endsWith("a")//true
//"hamburguesa".endsWith("esa")//true
//"hamburguesa".endsWith("bur")//false
*/

// includes()
/* regresa si el string contiene el parametro
//"hamburguesa".contains("gues")//true
//"hamburguesa".contains("gueza")//false
//"hamburguesa".contains("ha")//true
*/

// indexOf()
/* Regresa la primer posicion donde aparece el parametro, -1 si no lo encuentra
//"hamburguesa".indexOf("g")//6
//"hamburguesa".indexOf("u")//4
//"hamburguesa".indexOf("z")//-1
*/

// lastIndexOf()
/* Regresa la ultima posicion donde aparece el parametro en el string -1 si no esta
//"hamburguesa".lastIndexOf("g")//6
//"hamburguesa".lastIndexOf("u")//7
//"hamburguesa".lastIndexOf("z")//-1
*/

// localeCompare()
/* regresa -1 si el string va primero que el parametro alfabeticamente, 1 si va despues, 0 iguales
//"ab".localeCompare("cd")//-1
//"ab".localeCompare("ab")//0
//"cd".localeCompare("ab")//1
*/

// normalize()
/* no le entendi */

// padEnd()
/* Rellena el string con el parametro hasta que tenga la longitud dada
// "hola".padEnd(".",5)//"hola."
// "yrrverv".padEnd("*",3)//"yrrverv"
// "rtgtgrtg".padEnd("10"," ")//"rtgtgrtg  "
*/

// padStart()
/* Tambien rellena el string pero al principio 
// "hola".padStart(".",5)//".hola"
// "yrrverv".padEnd("*",3)//"yrrverv"
// "rtgtgrtg".padEnd("10"," ")//"  rtgtgrtg"
*/

// repeat()
/* repite el string n veces
//"hola".repeat(2)//"holahola"
//"j".repeat(3)//"jjj"
//"luis".repeat(1)//"luis"
*/

// replace()
/* reemplaza en el string
//"hola".replace("o","4")//h4la
//"holaa".replace("a"."e")//holea
//"hola".replace("h","h")//hola
*/

// search()
/* busca un un string y si lo encuentra regresa la posicion, si no -1
//"hamburguesa".search("gue")//6
//"hamburguesa".search("ur")//4
//"hamburguesa".search("rerg")//-1
*/

// slice()
/* regresa el string desde la posicion del primer parametro hasta el segundo
//"hamburguesa".slice(0,3)//"ham"
//"hamburguesa".slice(1,3)//am
//"hamburguesa".slice(3,7)//burg
*/

// split()
/* regresa un arreglo diviendo el string cada vez que aparece el parametro
//"hamburguesas".split("a")//["h","mburgues","s"]
//"hamburguesas".split("u")//["hamb","rg","esas"]
//"hamburguesas".split("x")//["hamburguesas"]
*/

// startsWith()
/* Regresa si el string empieza con el parametro
//"hamburguesa".startsWith("a")//false
//"hamburguesa".startsWith("ham")//true
//"hamburguesa".startsWith("bur")//false
*/

// substring()
/* parecido al slice
//"hamburguesa".substring(0,3)//"ham"
//"hamburguesa".substring(1,3)//am
//"hamburguesa".substring(3,7)//burg
*/

// toLocaleLowerCase()
/* Regresa el string en minusculas
// "EFREG".toLocaleLowerCase()//"efreg"
// "UUHerfrU".toLocaleLowerCase()//"uuherfru"
// "efr".toLocaleLowerCase()//"efr"
*/

// toLocaleUpperCase()
/* Regresa el string en mayusculas
// "EFREG".toLocaleUpperCase()//"EFREG"
// "UUHerfrU".toLocaleUpperCase()//"UUHERFRU"
// "efr".toLocaleUpperCase()//"EFR"
*/

// toLowerCase()
/* Regresa el string en minusculas
// "EFREG".toLocaleLowerCase()//"efreg"
// "UUHerfrU".toLocaleLowerCase()//"uuherfru"
// "efr".toLocaleLowerCase()//"efr"
*/

// toString()
/* Regresa el valor en string
//14.toString()//"14"
//false.toString()//"false"
//"try".toString()//"try"
*/

// toUpperCase()
/* Regresa el string en mayusculas
// "EFREG".toLocaleUpperCase()//"EFREG"
// "UUHerfrU".toLocaleUpperCase()//"UUHERFRU"
// "efr".toLocaleUpperCase()//"EFR"
*/

// trim()
/* regresa el string sin espacios al principio y al final
//"  hola   ".trim()//"hola"
//"hola  ".trim()//hola
//"   hola".trim()//hola
*/

// trimEnd()
/* regresa el string sin espacios al final
//"  hola   ".trim()//"  hola"
//"hola  ".trim()//"hola"
//"   hola".trim()//"   hola"

// trimStart()
/* regresa el string sin espacios al principio
//"  hola   ".trim()//"hola   "
//"hola  ".trim()//"hola  "
//"   hola".trim()//"hola"



/* give me 3 example using all the String functions above over the same String*/
let s = "4yei8fBn";
console.log(s.charAt(0));
console.log(s.charAt(1));
console.log(s.charAt(2));
console.log(s.charCodeAt(0));
console.log(s.charCodeAt(1));
console.log(s.charCodeAt(2));
console.log(s.codePointAt(0));
console.log(s.codePointAt(1));
console.log(s.codePointAt(2));
console.log(s.concat('a'));
console.log(s.concat('b'));
console.log(s.concat('c'));
console.log(s.endsWith("Bn"));
console.log(s.endsWith("thn"));
console.log(s.endsWith("n"));
console.log(s.includes("Bn"));
console.log(s.includes("thn"));
console.log(s.includes("n"));
console.log(s.indexOf("B"));
console.log(s.indexOf("h"));
console.log(s.indexOf("n"));
console.log(s.lastIndexOf("B"));
console.log(s.lastIndexOf("h"));
console.log(s.lastIndexOf("n"));
console.log(s.localeCompare("B"));
console.log(s.localeCompare("h"));
console.log(s.localeCompare("2r"));
console.log(s.normalize("NFD"));
console.log(s.normalize("NFC"));
console.log(s.normalize("NFKC"));
console.log(s.padEnd("D",10));
console.log(s.padEnd("C",15));
console.log(s.padEnd("KC1",30));
console.log(s.padStart("D",10));
console.log(s.padStart("C",15));
console.log(s.padStart("KC1",30));
console.log(s.repeat(2));
console.log(s.repeat(4));
console.log(s.repeat(1));
console.log(s.replace("4","Y"));
console.log(s.replace("B","m"));
console.log(s.replace("n","q"));
console.log(s.search("4"));
console.log(s.search("B"));
console.log(s.search("n"));
console.log(s.slice(0,4));
console.log(s.slice(1,4));
console.log(s.slice(2,4));
console.log(s.split("4"));
console.log(s.split("B"));
console.log(s.split("n"));
console.log(s.startsWith("4"));
console.log(s.startsWith("4B"));
console.log(s.startsWith("n"));
console.log(s.substring(0,4));
console.log(s.substring(1,4));
console.log(s.substring(2,4));
console.log(s.toLocaleLowerCase());
console.log(s.toLocaleUpperCase());
console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.toString());
console.log(s.trim());
console.log(s.trimEnd());
console.log(s.trimStart());