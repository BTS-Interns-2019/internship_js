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
isIteger(25);
isInteger("Hola");
isInteger(true);
//isNaN() is nos devuelve true si algo no es numero
isNaN(5);
isNaN(NaN);
isNaN("Hola");
//isSafeInteger(). Devuelve true si es un safe integer
Number.isSafeInteger(5);
Number.isSafeInteger(Infinity);
Number.isSafeInteger(5.1);
//toExponential(). 
