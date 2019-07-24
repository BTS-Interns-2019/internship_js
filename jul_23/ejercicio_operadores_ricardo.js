// Number


// MAX_VALUE

    // Devuelve el mayor de cero o más números
    // Math.max([valor1[, valor2[, ...]]])



// MIN_VALUE

    // Devuelve el menor de cero o mas números
    // Math.min([valor1[, valor2[, ...]]])

// NaN

    // Es un valor representando un Not-A-Number (No es un número)

// NEGATIVE_INFINITY

    // Es una propiedad que representa el infinito negativo

// POSITIVE_INFINITY

    //Representa el infinito positivo y no se tiene que crear un objeto para acceder a esta propiedad estática

// EPSILON

    // tiene el valor aproximado de 2.2204460492503130808472633361816E-16, o 2^52

// MIN_SAFE_INTEGER

    //Esta constante representa el integer minimo seguro de JavaSript(-(2^53 -1))
    
// MAX_SAFE_INTEGER

    //Esta constante representa el maximo integer seguro de JavaScript



// parseFloat()
    // Convierte un argumento de tipo cadena y devuelve un número de tipo flotante
 console.log(parseFloat("3.14"));
 console.log(parseFloat("123.413"));
 console.log(parseFloat("6342.1231"));


// parseInt()
    //Convierte un argumento de tipo cadena y devuelve un entero de la base especificada.
console.log(parseInt("17",8));
console.log(parseInt("F",16));
console.log(parseInt("15",10));

// isFinite()
    //determina si el valor que se le pasa como argumento es un numero finito

    console.log(isFinite(Infinity));
    console.log(isFinite(-Infinity));
    console.log(isFinite(NaN));
    

// isInteger()
    //Determina si el valor pasado es de tipo entero
    console.log( Number.isInteger("hola"));
    console.log( Number.isInteger(1231.32131));
    console.log( Number.isInteger([]));
    


// isNaN()
    //Evalua si el argumento es un número o no
    console.log(isNaN(1));
    console.log(isNaN(0/0));
    console.log(isNaN("Hola"));
    

// isSafeInteger()
    //El metodo determina si el valor obtenido es un entero seguro
    console.log(Number.isSafeInteger(5000));
    console.log(Number.isSafeInteger(5.000));
    console.log(Number.isSafeInteger(5000000000));
    

// toExponential()
    //devuelve un string representando el numero objeto en notacion exponencial
    console.log(77 .toExponential());
    console.log(9832 .toExponential());
    console.log(9438.12 .toExponential());


// toFixed()
    //formatea un número usando notación de punto fijo
    console.log(parseFloat(13243.4535).toFixed(4));
    console.log(parseFloat(123.456).toFixed(2));
    console.log(parseFloat(1321.6).toFixed(1));

// toPrecision()
      //Devuelve una cadena que representa un objeto number según la precisión especificada
    console.log(parseFloat(123.456).toPrecision(4));
    console.log(parseFloat(98749.90).toPrecision(3));
    console.log(parseFloat(9841.8547).toPrecision(6));



// String


// fromCharCode()
console.log(String.fromCharCode(65,66,67));
    
// fromCodePoint()
console.log(String.fromCodePoint(65,90));

// charAt()
console.log("Hola mundo".charAt(2));

// charCodeAt()
console.log("ABC".charCodeAt(0));

// codePointAt()
console.log('ABC'.codePointAt(0));

// concat()
cadena1="hola "
cadena2="mundo"
cadena4=cadena1.concat(cadena2);
console.log(cadena4);

// endsWith()
let str = "Hola mundo";
console.log(str.endsWith('mundo'));

// includes()
str = "Hola mundo";
console.log(str.includes('mundo'));

// indexOf()
console.log("Blue Whale".indexOf("Blue"));

// lastIndexOf()
"canal".lastIndexOf("a");

// localeCompare()
console.log('a'.localeCompare('c'));

// normalize()
console.log('\u1E9B\u0323'.normalize('NFC'));

// padEnd()
console.log('abc'.padEnd(10)+"LOL");

// padStart()
console.log('abc'.padStart(10));

// repeat()
console.log('abc'.repeat(2));

// replace()
console.log("Peras y Manzanas".replace("Manzanas", "Peras"));

// search()
console.log("Hola mundo".search("mundo"));

// slice()
console.log("La mañana se nos echa encima.".slice(3, -2));

// split()
console.log("Hola Mundo".split(""));

// startsWith()
console.log("Hola mundo".startsWith('Hola'));

// substring()
console.log("Hola mundo".substring(0,3));

// toLocaleLowerCase()
console.log("HOLa MunDo".toLocaleLowerCase());

// toLocaleUpperCase()
console.log("HOLa MunDo".toLocaleUpperCase());

// toLowerCase()
console.log("HOLa MunDo".toLowerCase());
// toString()
cadena = new String("Hello world");
console.log(cadena.toString());

// toUpperCase()
console.log("HOLa MunDo".toUpperCase());

// trim()
console.log("    Hola mundo  ".trim());

// trimEnd()
console.log("    Hola mundo  ".trimEnd());

// trimStart()
console.log("    Hola mundo  ".trimStart());

/* give me 3 example using all the String functions above over the same String*/



//Ejemplo 1

texto = "  Lorem ipsuM dolor sit aMet, conseCtetur adipisISng eLIt, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ";
a1 = "  Hola    ";
a2 = "Mundo           ";
a3 = "";
console.log(String.fromCharCode(65,66,67) +texto);
console.log(String.fromCodePoint(65,90)+texto);
console.log(texto.charAt(2));
console.log(texto.charCodeAt(0));
console.log(texto.codePointAt(0));
a3 = texto.concat(a1,a2);
console.log(a3);
console.log(texto.endsWith('mundo'));
console.log(texto.includes('Mundo'));
console.log(texto.indexOf("Blue"));
console.log(texto.lastIndexOf("a"));
console.log(texto.localeCompare(a1));
console.log(texto.normalize('NFC'));
console.log(texto.padEnd(10)+a2);
console.log(texto.padStart(10));
console.log(texto.repeat(2));
console.log(texto.replace("Lorem", a1));
console.log(texto.search("sit"));
console.log(texto.slice(10, -10));
console.log(texto.split(""));
console.log(texto.startsWith('dolor'));
console.log(texto.substring(0,3));
console.log(texto.toLocaleLowerCase());
console.log(texto.toLocaleUpperCase());
console.log(texto.toLowerCase());
console.log(texto.toString());
console.log(texto.toUpperCase());
console.log(texto.trim());
console.log(texto.trimEnd());
console.log(texto.trimStart());




//Ejemplo 2

texto = "       Los tacos al pastor, de adobada (en Baja California) o de trompo (en Monterrey y noreste de México) 1​ son la variedad de tacos más populares en la mayor parte de México, 2​3​ originados en la Ciudad de México por influencia libanesa.4​ En julio de 2019 fueron elegidos como la mejor comida del mundo por el sitio de guía gastronómica Taste Atlas      ."
a1 = "  Lorem    ";
a2 = "Ipsum          ";
a3 = "";
console.log(String.fromCharCode(65,66,67) +texto);
console.log(String.fromCodePoint(65,90)+texto);
console.log(texto.charAt(2));
console.log(texto.charCodeAt(0));
console.log(texto.codePointAt(0));
a3 = texto.concat(a1,a2);
console.log(a3);
console.log(texto.endsWith('Lorem'));
console.log(texto.includes('Ipsum'));
console.log(texto.indexOf("LOL"));
console.log(texto.lastIndexOf("b"));
console.log(texto.localeCompare(a1));
console.log(texto.normalize('NFC'));
console.log(texto.padEnd(10)+a2);
console.log(texto.padStart(10));
console.log(texto.repeat(2));
console.log(texto.replace("tacos ", a1));
console.log(texto.search("pastor"));
console.log(texto.slice(10, -10));
console.log(texto.split(" "));
console.log(texto.startsWith('mejor'));
console.log(texto.substring(0,3));
console.log(texto.toLocaleLowerCase());
console.log(texto.toLocaleUpperCase());
console.log(texto.toLowerCase());
console.log(texto.toString());
console.log(texto.toUpperCase());
console.log(texto.trim());
console.log(texto.trimEnd());
console.log(texto.trimStart());


//Ejemplo3

texto = "       cientists used to think that your brain stopped growing new cells once you reached adulthood. Happily, current research shows that this conventional wisdom simply isn’t true! As you get older, you can continue to grow new brain cells and even reverse some of the natural brain cell loss that occurs with age. To encourage your brain to grow new cells, try adopting healthy habits like exercising regularly and doing stress-relieving activities     ."
a1 = "  Lorem    ";
a2 = "Ipsum          ";
a3 = "";
console.log(String.fromCharCode(65,66,67) +texto);
console.log(String.fromCodePoint(65,90)+texto);
console.log(texto.charAt(2));
console.log(texto.charCodeAt(0));
console.log(texto.codePointAt(0));
a3 = texto.concat(a1,a2);
console.log(a3);
console.log(texto.endsWith('cientists'));
console.log(texto.includes('brain'));
console.log(texto.indexOf("LOL"));
console.log(texto.lastIndexOf("a"));
console.log(texto.localeCompare(a1));
console.log(texto.normalize('NFC'));
console.log(texto.padEnd(10)+a2);
console.log(texto.padStart(10));
console.log(texto.repeat(2));
console.log(texto.replace("Happily ", a1));
console.log(texto.search("how"));
console.log(texto.slice(10, -10));
console.log(texto.split("a"));
console.log(texto.startsWith('research'));
console.log(texto.substring(0,3));
console.log(texto.toLocaleLowerCase());
console.log(texto.toLocaleUpperCase());
console.log(texto.toLowerCase());
console.log(texto.toString());
console.log(texto.toUpperCase());
console.log(texto.trim());
console.log(texto.trimEnd());
console.log(texto.trimStart());

