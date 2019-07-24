
// Number


// MAX_VALUE
/* El número más grande representable en JS  */

// MIN_VALUE
/* El número más pequeño representable en JS */

// NaN
/* Not a Number Es una propiedad de los objetos que describe si es un número o no*/

// NEGATIVE_INFINITY
/* un número negativo infinito */

// POSITIVE_INFINITY
/* un numero positivo infinito */

// EPSILON
/* esta propiedad representa la difernecia enre 1 y el numero  más pequeño con punto flotante */

// MIN_SAFE_INTEGER
/* El entero negativo más pequeño que se maneja de forma segura */

// MAX_SAFE_INTEGER
/* El entero negativo más grande que se maneja de forma segura */



// parseFloat()
/* recive un string y lo devuelve como un numero con punto flotante */
parseFloat("62632.234hola"); //62632.234
parseFloat("sldkaf"); //NaN
parseFloat("3.3"); //3.3

// parseInt()
/* recive un string en cualquier base numerica y lo convierte a un entero en base decimal */
parseInt(10);  //10  (default base 10)
parseInt(10,2); //2
parseInt("1E",16); //30

// isFinite()
/* devuelve true si en parametro es finito y false de lo contrario */
isFinite(Infinity); //false
isFinite(0); //true
isFinite("34"); //true

// isInteger()
/* Determina es el valor es entero */
Number.isInteger("20"); //false
Number.isInteger(3); //true
Number.isInteger(3.12); //false

// isNaN()
/* determina si el parametro dado es NaN o no */
isNaN(37,5); //true
isNaN(' '); //false
isNaN({}); //true

// isSafeInteger()
/* Determina si el parametro dado es un entero seguro (asegurando que se a tipo Number) */
Number.isSafeInteger(Infinity); //false
Number.isSafeInteger('3'); //false
Number.isSafeInteger(4); //true

// toExponential()
/* Cambia un nkúmero a su expreción exponencial */
77.1234.toExponential(); //7.71234e+1
7 .toExponential //7e+0
8 .toExponential //8e+0

// toFixed()
/* Formatea el objeto Number que lo llama a las cifras depues del punto que se pasen como parametro */
77 .toFixed(3); //77.000
12.3425345.toFixed(2); //12.34
12.2.toFixed(4); //12.2000

// toPrecision()
/* Dependiendo del parametro recivido n, se formatea a la n cifras a partir de la primer cifra significativa*/
5.123456.toPrecision(); //5.123456
5 .toPrecision(7); //5.000000
0.003423.toPrecision(3); //0.00342

// String


// fromCharCode()
String.fromCharCode(99) //"c"

// fromCodePoint()
String.fromCodePoint(999) //'ϧ'

// charAt()
"holis".charAt(0) // 'h'

// charCodeAt()
'ABC'.charCodeAt(0); // 65

// codePointAt()
'ABC'.codePointAt(0); // returns 65

// concat()
"1".concat([2,3,4]); // '12,3,4'

// endsWith()
"hola".endsWith("la"); //true

// includes()
"hola numero 2".includes("ro"); //true

// indexOf()
"hola numero 2".indexOf("ro"); //9

// lastIndexOf()
"hola numero 2".lastIndexOf("o"); //10

// localeCompare()
"y".localeCompare("e"); //1

// normalize()
'\u1E9B\u0323'.normalize('NFC'); //"ẛ̣"

// padEnd()
"hola".padEnd(10,"10"); //"hola101010"

// padStart()
"hola".padStart(10,"10"); //"101010hola"

// repeat()
"hola".repeat(10); //"holaholaholaholaholaholaholaholaholahola"

// replace()
"holao".replace("o","a"); //"halao"

// search()
"como anDan Todos".search(/[A-Z]/g); //7

// slice()
"como anDan Todos".slice(1,4); //"omo"

// split()
"como anDan Todos".split(" "); //["como", "anDan", "Todos"]

// startsWith()
"como anDan Todos".startsWith("com"); //true

// substring()
'Mozilla'.substring(1, 10); //"ozilla"

// toLocaleLowerCase()
"Hola".toLocaleLowerCase(); // "Hola"

// toLocaleUpperCase()
"Hola".toLocaleUpperCase(); //"HOLA"

// toLowerCase()
"Hola".toLocaleLowerCase(); // "Hola"

// toString()
1 .toString(); // "1"

// toUpperCase()
"Hola".toLocaleUpperCase(); //"HOLA"

// trim()
"    hola todos   ".trim(); // "hola todos"

// trimEnd()
"    hola todos   ".trimEnd(); // "    hola todos"

// trimStart()
"    hola todos   ".trimStart(); // "hola todos   "


/* give me 3 example using all the String functions above over the same String*/
let str="    A este string le voy a hacer un      monton de   cosillas    ";
str=str.concat(String.fromCharCode(99),String.fromCodePoint(99));
str+=str.charAt(15).charCodeAt(0);
str+=str.codePointAt(16);
if(str.endsWith("3") || str.includes("a")){
    str.padEnd(50,"*");
    str.padStart(52," ");
    str.repeat(0);
    str.replace("o","a");
}
str.indexOf("as");
str.lastIndexOf("as");
str.localeCompare("e");
str+='\u1E9B\u0323'.normalize('NFC');
str.search(/[A-Z]/g);
str=str.slice(0,40);
str.toLocaleLowerCase();
str.toLocaleUpperCase();
str.toLowerCase();
str.toUpperCase();
str+=12 .toString();
str=str.trimEnd().trimStart().trim();
str=str.substring(1,25);
if(str.startsWith(" este")){
    str=str.split(" ");
}
//console.log(str);

/* give me 2 example using all the String functions above over the same String*/
str2="     --nuevo-- string para jugar    ";
str2=str2.concat(
    String.fromCharCode(99),
    String.fromCodePoint(999),
    str2.charAt(0),
    str2.charCodeAt(0),
    str2.codePointAt(0),
    str2.concat([2,3,4]),
    str2.endsWith("la"),
    str2.includes("ro"),
    str2.indexOf("ro"),
    str2.lastIndexOf("o"),
    str2.localeCompare("e"),
    '\u1E9B\u0323'.normalize('NFC'),
    str2.padEnd(10,"50"),
    str2.padEnd(10,"52"),
    str2.repeat(3),
    str2.replace("o","a"),
    str2.search(/[A-Z]/g),
    str2.slice(1,40),
    str2.split(" "),
    str2.startsWith("com"),
    str2.substring(1, 10),
    str2.toLocaleLowerCase(),
    str2.toLocaleUpperCase(),
    str2.toLocaleLowerCase(),
    str2.toString(),
    str2.toLocaleUpperCase(),
    str2.trimEnd(),
    str2.trimStart(),
    str2.trim(),
);
str2=str2.split(" ");
//console.log(str2);


    /* give me 1 example using all the String functions above over the same String*/
let str3="Este es el ultimo    stringcito y stoy cansadito, todavia tengo que hacer mi otra tarea :'(";
str3+=String.fromCharCode(99);
str3+=String.fromCodePoint(999);
str3+=str3.charAt(0);
str3+=str3.charCodeAt(0);
str3+=str3.codePointAt(0);
str3+=str3.concat([2,3,4]);
str3+=str3.endsWith("la");
str3+=str3.includes("ro");
str3+=str3.indexOf("ro");
str3+=str3.lastIndexOf("o");
str3+=str3.localeCompare("e");
str3+='\u1E9B\u0323'.normalize('NFC');
str3+=str3.padEnd(200,"  ");
str3+=str3.padEnd(250,"  ");
str3+=str3.repeat(10);
str3+=str3.replace("o","a");
str3+=str3.search(/[A-Z]/g);
str3+=str3.slice(1,-4);
str3+=str3.startsWith("com");
str3+=str3.toLocaleLowerCase();
str3+=str3.toLocaleUpperCase();
str3+=str3.toLocaleLowerCase();
str3+=str3.substring(1, 10000);
str3+=1324.2345.toString();
str3+=str3.toLocaleUpperCase();
str3+=str3.trimEnd();
str3+=str3.trimStart();
str3+=str3.trim();
str3=str3.split(" ");
//console.log(str3);