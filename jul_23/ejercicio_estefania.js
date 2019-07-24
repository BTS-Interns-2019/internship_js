
//Number

/* MAX_VALUE
Representa el valor numérico positivo máximo que existe en JavaScript. Si el valor dado es mayor que este valor será representado como Infinity.
Al ser MAX_VALUE una propiedad estática de Number, siempre ha de usarse como Number.MAX_VALUE, y no como propiedad del objeto que has creado.
*/

/* MIN_VALUE
representa el número más cercano a 0 que JavaScript pueda representar, Los valores menores que MIN_VALUE 
(“subdesbordamiento de valores”) son convertidos a 0.*/

/* NaN
NaN es una variable de alcance global. Su valor inicial es Not-A-Number. Nunca es equivalente con cualquier otro número, 
incluido el mismo NaN.*/

/* NEGATIVE_INFINITY
Esta propiedad representa un valor infinito negativo.*/

/*POSITIVE_INFINITY
 Propiedad que representa el valor infinito positivo.*/

/* EPSILON
Es una propiedad que representa la diferencia entre 1 y el número de punto flotante más pequeño mayor que 1. */

/* MIN_SAFE_INTEGER
Es el número 'seguro' más pequeño en JavaScript. Seguro, en este contexto, se refiere a la habilidad de 
representar enteros de forma exacta y compararlos de forma correcta. */

/* MAX_SAFE_INTEGER
Es el número 'seguro' más grande en JavaScript. Seguro, en este contexto, se refiere a la habilidad de 
representar enteros de forma exacta y compararlos de forma correcta. */

/* parseFloat()
Es una función de nivel superior y no está asociada con ningún objeto. Analiza su argumento y devuelve un número de punto flotante. 
Si encuentra un carácter distinto de un signo (+ o -), un número (0-9), un punto decimal o un exponente, devuelve el valor hasta ese punto e 
ignora ese carácter y todos los caracteres sucesivos. */

console.log(parseFloat(3.1416));
console.log(parseFloat('3.1416'));
console.log(parseFloat('20.893'));

/*parseInt()
Función que convierte su primer argumento en una cadena, analiza esa cadena y luego devuelve un entero o NaN. */
console.log(parseInt('17', 8));
console.log(parseInt("20 dias"));
console.log(parseInt(""));

/* isFinite()
Esta función determina si el valor que se le pasa como argumento es un número finito. Si es necesario, 
realiza una conversión a un numero al parametro pasado. */
console.log(isFinite(0));  
console.log(isFinite(NaN));
console.log(isFinite(100));    

/* isInteger()
Determina si el valor es dado es de tipo entero. Si el valor seleccionado es un entero, devuelve true, de lo contrario false. 
Si el valor es NaN o infinito, devuelve false.*/
console.log(Number.isInteger(1));  
console.log(Number.isInteger('10'))
console.log(Number.isInteger(true))

/* isNaN()
Evalúa un argumento para determinar si es un número. */
console.log(isNaN(NaN)) 
console.log(isNaN("hola mundo")) 
console.log(isNaN("67"))

/* isSafeInteger()
Es un método que determina si el valor provisto es un número que es un entero seguro.*/
console.log(Number.isSafeInteger(34.1));                  // false
console.log(Number.isSafeInteger(11.0));
console.log(Number.isSafeInteger(NaN));

/* toExponential()
Método que devuelve una cadena que representa el objeto Número en notación exponencial.*/
var numero = 66;
console.log(numero.toExponential()); 
console.log(numero.toExponential(4)); 
console.log(numero.toExponential(2));

// toFixed()
/*Formatea un número usando notación de punto fijo.*/
var number = 654321.1234;
console.log(number.toFixed());
console.log(number.toFixed(1));     
console.log(number.toFixed(6));

/*toPrecision()
Devuelve una cadena que representa el Numberobjeto con la precisión especificada. */
var numero2 = 8.123456;
console.log(numero2.toPrecision()); 
console.log(numero2.toPrecision(3));   
console.log(numero2.toPrecision(1));


// String

// fromCharCode()
console.log(String.fromCharCode(60, 61, 62));

// fromCodePoint()
console.log(String.fromCodePoint(40));

// charAt()
var str = "Hola mundo";
console.log(str.charAt(3));

// charCodeAt()
var str = "Hola mundo";
console.log(str.charCodeAt(3));

// codePointAt()
console.log('ABCDEFGH'.codePointAt(6));  

// concat()
var str1 = "Adiós ";
var str2 = "Mundo!";
console.log(str1.concat(str2));

// endsWith()
var str = "Adiós mundo, esto ha terminado.";
console.log(str.endsWith("terminado."));

// includes()
var str = "Probando includes...";
console.log(str.includes("includes"));

// indexOf()
var str = "Aquí estamos ingresando texto";
console.log(str.indexOf("estamos"));


// lastIndexOf()
var str = "Vamos a escribir un poco de texto";
console.log(str.lastIndexOf("texto"));

// localeCompare()
var str = "Adiós mundo, esto ha terminado.";
var str2 = "Hola mundo, esto no ha terminado.";
console.log(str.localeCompare(str2));

// normalize()
var str = '\u1E9B\u0323';
console.log(str.normalize());  

// padEnd()
var str1 = 'Vamos a probar texto rellenando el final';
console.log(str1.padEnd(60, '**'));

// padStart()
var str2 = "Vamos a probar texto rellenando el inicio";
console.log(str2.padStart(60, '**'));

// repeat()
var str = "¿Crees que se repita algo?";
console.log(str.repeat(3));

// replace()
var str2 = "Vamos a sustituir pingüinos";
console.log(str2.replace("pingüinos", "gatos"));

// search()
var str2 = "Estamos buscando casas";
console.log(str2.search("casas"));

// slice()
var str3 = "Vamos a dividir palabras";
console.log(str3.slice(0, 8));

// split()
var str3 = "Vamos a dividir palabras";
console.log(str3.split(" "));

// startsWith()
var str2 = "Con que inicia esta frase";
console.log(str2.startsWith("Con"));

// substring()
var str = "El substring esta mostrándose";
console.log(str.substring(3, 13));

// toLocaleLowerCase()
var str = "Estamos mostrando texto";
console.log(str.toLocaleLowerCase());

// toLocaleUpperCase()
var str = "Estamos mostrando aun más texto";
console.log(str.toLocaleUpperCase());

// toLowerCase()
var str2 = "Agregando Texto Para EJEMPLIFICAR";
console.log(str2.toLowerCase());

// toString()
var str = "El ejemplo de toString";
console.log(str.toString());

// toUpperCase()
var str = "este texto solo es una demostración";
console.log(str.toLocaleUpperCase());

// trim()
var str3 = "             Dejando espacio deliberadamente         ";
console.log(str3.trim());

// trimEnd()
var str3 = "              Dejando espacio deliberadamente nuevamente         ";
console.log(str3.trimEnd());

// trimStart()
var str3 = "              Dejando espacio deliberadamente para finalizar        ";
console.log(str3.trimStart());


/* give me 3 example using all the String functions above over the same String*/
console.log("***********PRIMERA CADENA***********");
var primerstr = "     Vamos a probar todos los métodos en este primer primerstring.      "
console.log(primerstr.charAt(6));
console.log(primerstr.charCodeAt(8));
console.log(primerstr.codePointAt(5));
var otrostr = "Cadena para hacer la concatenación"  
console.log(primerstr.concat(otrostr));
console.log(primerstr.endsWith("primerstring."));
console.log(primerstr.includes("todos los"));
console.log(primerstr.indexOf("métodos"));
console.log(primerstr.lastIndexOf("primerstring"));
var otrostr = "Cadena para hacer la comparación"  
console.log(primerstr.localeCompare(otrostr));
console.log(primerstr.normalize());  
console.log(primerstr.padEnd(80, '**'));
console.log(primerstr.padStart(80, '**'));
console.log(primerstr.repeat(4));
console.log(primerstr.replace("Vamos", "Van"));
console.log(primerstr.search("primer"));
console.log(primerstr.slice(6, 17));
console.log(primerstr.split(" "));
console.log(primerstr.startsWith("Vamos"));
console.log(primerstr.substring(3, 13));
console.log(primerstr.toLocaleLowerCase());
console.log(primerstr.toLocaleUpperCase());
console.log(primerstr.toLowerCase());
console.log(primerstr.toString());
console.log(primerstr.toLocaleUpperCase());
console.log(primerstr.trim());
console.log(primerstr.trimEnd());
console.log(primerstr.trimStart());

console.log("***********SEGUNDA CADENA***********");
var segundostr = "     Vamos a probar todos los métodos en este mejorado y renovado string.   "
console.log(segundostr.charAt(16));
console.log(segundostr.charCodeAt(7));
console.log(segundostr.codePointAt(10));
var otrostr = "Cadena número dos para hacer la concatenación"  
console.log(segundostr.concat(otrostr));
console.log(segundostr.endsWith("string."));
console.log(segundostr.includes("probar"));
console.log(segundostr.indexOf("mejorado"));
console.log(segundostr.lastIndexOf("string"));
var otrostr = "Cadena para hacer una nueva comparación"  
console.log(segundostr.localeCompare(otrostr));
console.log(segundostr.normalize());  
console.log(segundostr.padEnd(70, '-'));
console.log(segundostr.padStart(70, '-'));
console.log(segundostr.repeat(2));
console.log(segundostr.replace("probar", "mostrar"));
console.log(segundostr.search("renovado"));
console.log(segundostr.slice(10, 30));
console.log(segundostr.split(" "));
console.log(segundostr.startsWith("Vamos"));
console.log(segundostr.substring(10, 31));
console.log(segundostr.toLocaleLowerCase());
console.log(segundostr.toLocaleUpperCase());
console.log(segundostr.toLowerCase());
console.log(segundostr.toString());
console.log(segundostr.toLocaleUpperCase());
console.log(segundostr.trim());
console.log(segundostr.trimEnd());
console.log(segundostr.trimStart());

console.log("***********TERCERA CADENA***********");

var tercerstr = "     Este es el útimo string y aun falta más tarea :(((   "
console.log(tercerstr.charAt(25));
console.log(tercerstr.charCodeAt(29));
console.log(tercerstr.codePointAt(0));
var otrostr = " Y la cadena final para la concatenación"  
console.log(tercerstr.concat(otrostr));
console.log(tercerstr.endsWith(" "));
console.log(tercerstr.includes(":("));
console.log(tercerstr.indexOf("más"));
console.log(tercerstr.lastIndexOf(" "));
var otrostr = "La última cadena que será comparada"  
console.log(tercerstr.localeCompare(otrostr));
console.log(tercerstr.normalize());  
console.log(tercerstr.padEnd(60, ':('));
console.log(tercerstr.padStart(60, ':('));
console.log(tercerstr.repeat(6));
console.log(tercerstr.replace("último", "mortal"));
console.log(tercerstr.search("falta"));
console.log(tercerstr.slice(20, 40));
console.log(tercerstr.split(" "));
console.log(tercerstr.startsWith(" "));
console.log(tercerstr.substring(10, 31));
console.log(tercerstr.toLocaleLowerCase());
console.log(tercerstr.toLocaleUpperCase());
console.log(tercerstr.toLowerCase());
console.log(tercerstr.toString());
console.log(tercerstr.toLocaleUpperCase());
console.log(tercerstr.trim());
console.log(tercerstr.trimEnd());
console.log(tercerstr.trimStart());