//Number
//Tipo de dato primitivo que como su nombre lo especifica es un numero.
//MAX_VALUE
//Nos devuelve el valor maximo que puede tener un numero, que es 1.79E+308
//MIN_VALUE
//De forma opuesta, min_value nos devuelve el valor minimo postivo al que llega un numero
//NaN
//Propiedad que nos indica que algo no es numero.
//NEGATIVE_INIFINITY
//Repreasenta un valor inifinito negativo
//POSITIVE_INIFINITY
//Representa un valor infinito positivo
//EPSILON
//Nos da el numero entre 1 y el numero de punto flontante mas grande
//MIN_SAFE_INTEGER
//Representa el numero mas queño que JS usa de forma segura
//MAX_SAFE_INTEGER
//El numero mas grande que JS puede usar de forma segura


//parseFloat(). Convierte a un numero en un numero de punto flotante
parseFloat("20");
parseFloat(50/3);
parseFloat(2);
//parseInt(). Convierte un valor a numero entero
parseInt("15");
parseInt("2"+"2");
parseInt("1452256563");
//isInfninite(). Nos permite saber si algo es infinito o no
if(isFinite(2)){
    console.log("si");
}
console.log(isFinite(Infinity)?"Si":"No");
console.log(isFinite(-Infinity)?"Si":"No");
//isInteger() Devuelve true si el valor es un numero entero
Number.isInteger(25);
Number.isInteger("Hola");
Number.isInteger(true);
//isNaN() is nos devuelve true si algo no es numero
isNaN(5);
isNaN(NaN);
isNaN("Hola");
//isSafeInteger(). Devuelve true si es un safe integer
Number.isSafeInteger(5);
Number.isSafeInteger(Infinity);
Number.isSafeInteger(5.1);
//toExponential(). 
//Devuelve un string que represenrta el nuemero en exponente
console.log(Number.parseInt(2).toExponential(3));
console.log(Number.parseInt("holo").toExponential(2));
Number.parseInt("25").toExponential(3);
//toFixed(). Formate un numero, recorriendo el punto hasta donde el usuario lo indique
let numero = 125.0248;
numero.toFixed(3);
Number.parseFloat("3.14159265").toFixed(4);
Number.parseFloat("2.000e+0").toFixed(2);
//toPrecision()
//Devuelve el numero con la precision especificada
numero.toPrecision(3);
Number.parseFloat(3.14159).toPrecision(8);
Number.parseFloat("2.15e+5").toPrecision(8);

//String

String.fromCharCode(64);

String.fromCodePoint(500);

myName="Urbano";
myName.charAt(0);

myName.charCodeAt(2);

myName.codePointAt(5);

myName.concat(" GP");

myName.endsWith("no");

myName.includes("Urba");

myName.indexOf("r");

myName.lastIndexOf("o");

let other="URbANO";
myName.localeCompare(other)

let normal="\u0041\u030A";
normal.normalize()

normal.padEnd(25,'**');

normal.padStart(25,'**');

normal.repeat(10);

other.replace("U","G");

other.search("b");

other.slice(2);

other.startsWith("U");

myName.substring(3,5);

other.toLocaleLowerCase();

other.toLocaleUpperCase();

other.toLowerCase();

numero.toString();

myName.toUpperCase();

spaceStr="    Holo    ";
spaceStr.trim()

spaceStr.trimEnd();

spaceStr.trimStart();

let str="supercalifragilisticoespialidoso";
let pais = "Mexico";
let musica= "Panteon Rococo"; 

str.padStart(50,"**");
str.padEnd(50,"**");
String.fromCharCode(str.substring(5).charCodeAt());
String.fromCodePoint(str.substring(6).charCodeAt())
str.charAt(4);
str.charCodeAt(6);
str.codePointAt(9);
str.concat(" nice!!");
str.endsWith("o");
str.includes("fr");
str.indexOf("s");
str.lastIndexOf("o");
str.localeCompare(other);
str.normalize();
str.repeat(5);
str.search("super");
str.slice(2);
str.split("");
str.startsWith("s");
str.toLocaleLowerCase();
str.toLocaleUpperCase();
str.toLowerCase();
str.toUpperCase();
str.toString();
str.trim();
str.trimStart();
str.trimEnd();


pais.padStart(50,"//");
pais.padEnd(50,"//");
String.fromCharCode(pais.substring(2).charCodeAt());
String.fromCodePoint(pais.substring(3).charCodeAt())
pais.charAt(4);
pais.charCodeAt(6);
pais.codePointAt(9);
pais.concat(" Viva!!");
pais.endsWith("o");
pais.includes("xi");
pais.indexOf("s");
pais.lastIndexOf("o");
pais.localeCompare(other);
pais.normalize();
pais.repeat(5);
pais.search("x");
pais.slice(2);
pais.split("");
pais.startsWith("M");
pais.toLocaleLowerCase();
pais.toLocaleUpperCase();
pais.toLowerCase();
pais.toUpperCase();
pais.toString();
pais.trim();
pais.trimStart();
pais.trimEnd();


musica.padStart(50,"||");
musica.padEnd(50,"||");
String.fromCharCode(musica.substring(5).charCodeAt());
String.fromCodePoint(musica.substring(6).charCodeAt())
musica.charAt(4);
musica.charCodeAt(6);
musica.codePointAt(9);
musica.concat(" saywot!!");
musica.endsWith("co");
musica.includes("te");
musica.indexOf("r");
musica.lastIndexOf("o");
musica.localeCompare(other);
musica.normalize();
musica.repeat(5);
musica.search("panteon");
musica.slice(2);
musica.split("");
musica.startsWith("p");
musica.toLocaleLowerCase();
musica.toLocaleUpperCase();
musica.toLowerCase();
musica.toUpperCase();
musica.toString();
musica.trim();
musica.trimStart();
musica.trimEnd();