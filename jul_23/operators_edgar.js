//number

//MAX_VALUE
/* representa el valor numerico positivo maximo en java script*/

//MIN_VALUE
/* representa el valor numerico positivo minimo en javascript*/

//NaN
/* un valor que indica que un dato no es un numero*/

//NEGATIVE_INFINITY
/* representa el valor del infinito negativo en javascript*/

//POSITIVE_INFINITY
/* representa el valor del infinito positivo en javascript*/

//EPSILON
/*representa la diferencia entre 1 y el mas pequeño numero de punto flotante mas grande que 1*/

//MIN_SAFE_INTEGER
/*es el numero mas pequeño seguro que puede manejar javascript*/

//MAX_SAFE_INTEGER
/*es el numero mas grande seguro que puede manejar javascript*/

//parseFloat ()
/* convierte una cadena a un valor de punto flotante*/
console.log (parseFloat ("30.14"));
var cadena = "56.255"
console.log (parseFloat (cadena));
console.log (parseFloat ("45.5 mas que"));

//parseInt ()
/* convierte una cadena a tipo entero de la base especificada*/
console.log (parseInt ("30.14",10));
var cadena = "56.255"
console.log (parseInt (cadena, 10));
console.log (parseInt ("45.5 mas que", 10))

//isFinite ()
// verifica si el argumento que se le pasa es un numero finito
console.log (isFinite(23));
var cadena = "56.255";
console.log (isFinite(cadena));
console.log (isFinite ("45.55 mas que"));

//isInteger ()
// verrifica si el argumento que se le envia es un numero entero
console.log (Number.isInteger (23));
var cadena = "56.255";
console.log (Number.isInteger(cadena));
console.log (Number.isInteger("455.256 mas que"));

//isNaN ()
//evalua el argumento para determinar si es un numero
console.log (isNaN (23));
var cadena = "56.255";
console.log (isNaN(cadena));
console.log (isNaN ("455.256 mas que"));

//isSafeInteger ()
//determina si el argumento es un entero seguro
console.log(Number.isSafeInteger(23));
var cadena = "56.2565";
console.log (Number.isSafeInteger(cadena));
console.log (Number.isSafeInteger("455.3698 mas que"));

//toExponential()
//devuelve una cadena que representa el numero del objeto en notacion exponencial
number = 23;
console.log (number.toExponential (2));
var cadena = 562562;
console.log (cadena.toExponential(3));
var obj = 455.3968;
console.log (obj.toExponential(6));

//toFixed ()
//formatea un numero usando notacion de punto fijo
number = 23;
console.log (number.toFixed (2));
var cadena = 596255;
console.log (cadena.toFixed(5));
var obj = 455.36585;
console.log (obj.toFixed(6));

//toPrecision ()
//devuelve una cadena que representa un objeto number de acuerdo a la precision indicada
number = 23;
console.log (number.toFixed(3));
var cadena = 563214;
console.log (cadena.toFixed(5));
var obj = 455.256;
console.log (obj.toFixed(2));

//string

//fromCharCode ()
console.log (String.fromCharCode (65, 66, 67, 68));

//fromCodePoint ()
console.log (String.fromCodePoint (42));

//charAt ()
cadena = "hola";
console.log (cadena.charAt (3));

//charCodeAt ()
cadena = "hola";
console.log (cadena.charCodeAt (3));

//codePointAt ()
cadena = "hola";
console.log (cadena.codePointAt (1));

//concat ()
cadena ="hola";
vas =" mundo";
console.log (cadena.concat(vas));

//endsWith
cadena ="hola a todos";
console.log (cadena.endsWith("todos"));

//includes
cadena ="hola a todos";
console.log(cadena.includes("hola"));

//indexOf ()
cadena = "hola mundo"
console.log(cadena.indexOf("m"));

//lastindexOf ()
cadena ="hola mundo";
console.log(cadena.lastIndexOf("u"));

//localeCompare()
cadena = "123";
vas = "456";
console.log(cadena.localeCompare(vas));

//normalize ()
cadena = "123456";
console.log(cadena.normalize('NFC'));

//padEnd ()
cadena ="123456";
console.log(cadena.padEnd(15, "89745"));

//padStart ()
cadena ="123456";
console.log (cadena.padStart(15, "89745"));

//repeat ()
cadena ="123";
console.log (cadena.repeat(3));

//replace ()
cadena = "hola a todos";
console.log (cadena.replace("hola", "adios"));

//search ()
cadena = "adios a todos";
console.log(cadena.search("adios"));

//Slice ()
cadena = "123456789";
console.log(cadena.slice(5, 8));

//split ()
cadena ="hola a todo el mundo";
console.log(cadena.split(" "));

//startsWith ()
cadena = "adios a todo el mundo";
console.log(cadena.startsWith("adios"));

//subString ()
cadena ="parangaricutirimicuaro";
console.log(cadena.substring(5, 12));

//toLocaleLowerCase ()
console.log('DESTROZAR'.toLocaleLowerCase());

//toLocaleUpperCase ()
console.log ('destrozar'.toLocaleUpperCase());

//toLowerCase ()
console.log('ACABADO'.toLowerCase());

//toUpperCase
console.log('acabado'.toUpperCase());

//toString ()
cadena ="estoy aburrido";
console.log(cadena.toString());

//trim ()
cadena =" parangaricutirimicuaro ";
console.log(cadena.trim());

//trimEnd ()
cadena ="   parangaricutirimicuaro     ";
console.log(cadena.trimEnd());

//trimstart ()
cadena ="   parangaricutirimicuaro    ";
console.log(cadena.trimStart());


// 3 examples using all the strings functions

example1 (" hola a todos mis amigos presentes ")
function example1 (cadena){
    console.log(cadena.charAt(10));
    console.log(cadena.charCodeAt(20));
    console.log(cadena.codePointAt(30));
    console.log(cadena.concat(" que tal"));
    console.log(cadena.endsWith ("mis"));
    console.log(cadena.includes("presentes"));
    console.log(cadena.indexOf("todos"));
    console.log(cadena.lastIndexOf("amigos"));
    console.log(cadena.localeCompare("que tal"));
    console.log(cadena.normalize('NFD'));
    console.log(cadena.padEnd(60, "que tal"));
    console.log(cadena.padStart(60, "que tal"));
    console.log(cadena.repeat(2));
    console.log(cadena.replace("hola", "adios"));
    console.log(cadena.search("mis"));
    console.log(cadena.slice(15, 25));
    console.log(cadena.split(" "));
    console.log(cadena.startsWith("amigos"));
    console.log(cadena.substring(15, 30));
    console.log(cadena.toLocaleUpperCase());
    console.log(cadena.toLocaleLowerCase());
    console.log(cadena.toUpperCase());
    console.log(cadena.toLowerCase());
    console.log(cadena.toString());
    console.log(cadena.trim());
    console.log(cadena.trimEnd());
    console.log(cadena.trimStart());
}

example2 (" 12323455674545457894265446846846246462423846434646 ")
function example2 (cadena){
    console.log(cadena.charAt(10));
    console.log(cadena.charCodeAt(20));
    console.log(cadena.codePointAt(30));
    console.log(cadena.concat(" que tal"));
    console.log(cadena.endsWith ("mis"));
    console.log(cadena.includes("presentes"));
    console.log(cadena.indexOf("todos"));
    console.log(cadena.lastIndexOf("amigos"));
    console.log(cadena.localeCompare("que tal"));
    console.log(cadena.normalize('NFD'));
    console.log(cadena.padEnd(60, "que tal"));
    console.log(cadena.padStart(60, "que tal"));
    console.log(cadena.repeat(2));
    console.log(cadena.replace("hola", "adios"));
    console.log(cadena.search("mis"));
    console.log(cadena.slice(15, 25));
    console.log(cadena.split(" "));
    console.log(cadena.startsWith("amigos"));
    console.log(cadena.substring(15, 30));
    console.log(cadena.toLocaleUpperCase());
    console.log(cadena.toLocaleLowerCase());
    console.log(cadena.toUpperCase());
    console.log(cadena.toLowerCase());
    console.log(cadena.toString());
    console.log(cadena.trim());
    console.log(cadena.trimEnd());
    console.log(cadena.trimStart());
}

example3 ("hola 13354455 pequeño 6278545426 saltamontes")
function example3 (cadena){
    console.log(cadena.charAt(10));
    console.log(cadena.charCodeAt(20));
    console.log(cadena.codePointAt(30));
    console.log(cadena.concat(" que tal"));
    console.log(cadena.endsWith ("mis"));
    console.log(cadena.includes("presentes"));
    console.log(cadena.indexOf("todos"));
    console.log(cadena.lastIndexOf("amigos"));
    console.log(cadena.localeCompare("que tal"));
    console.log(cadena.normalize('NFD'));
    console.log(cadena.padEnd(60, "que tal"));
    console.log(cadena.padStart(60, "que tal"));
    console.log(cadena.repeat(2));
    console.log(cadena.replace("hola", "adios"));
    console.log(cadena.search("mis"));
    console.log(cadena.slice(15, 25));
    console.log(cadena.split(" "));
    console.log(cadena.startsWith("amigos"));
    console.log(cadena.substring(15, 30));
    console.log(cadena.toLocaleUpperCase());
    console.log(cadena.toLocaleLowerCase());
    console.log(cadena.toUpperCase());
    console.log(cadena.toLowerCase());
    console.log(cadena.toString());
    console.log(cadena.trim());
    console.log(cadena.trimEnd());
    console.log(cadena.trimStart());
}