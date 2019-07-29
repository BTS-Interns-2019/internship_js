/*//# Exercises 23 jul

//Number and String

//create a file named tarea_<nombre>.js in your own branch using.



// Number


// MAX_VALUE
/* describe what it is? 
Es el valor máximo numérico que puede interpretar o soportar JS en el equipo donde se solicite el dato.

// MIN_VALUE
/* describe what it is? 
Es el valor mínimo numérico que puede interpretar o soportar JS en el equipo donde se solicite el dato.

// NaN
/* describe what it is? 
Es un tipo de dato en el cual se especifica que el valor que contiene esa variable no es numérica.

// NEGATIVE_INFINITY
/* describe what it is? 
Es la interpretacioón de el valor numérico seleccionado para infinito en negativo.

// POSITIVE_INFINITY
/* describe what it is? 
Es la interpretacioón de el valor numérico seleccionado para infinito en positivo.

// EPSILON
/* describe what it is? 
Es el intervalo mas pequeño entre dos numeros.

// MIN_SAFE_INTEGER
/* describe what it is? 
El menor numero entero seguro con el que puede trabajar JS.

// MAX_SAFE_INTEGER
/* describe what it is? 
El mayor numero entero seguro con el que puede trabajar JS.


// parseFloat()
/* do a description and gime me 3 examples of its ussage 
Metodo que analiza un string y devuelve un numero con decimales.

// parseInt()
/* do a description and gime me 3 examples of its ussage 
1.-var x = parseFloat('45.241poubgh');

2.-var x = 23*parseFloat('45.241poubgh');//1040.543

3.-var z = 35/parseFloat('adef.890'); //NaN

// isFinite()
/* do a description and gime me 3 examples of its ussage 
Determina si el valor que se le pasa es un numerop finito.
1.-Number.isFinite(1000 / 0)// false

2.-Number.isFinite(1000 )// true

3.-Number.isFinite('hdgasjk')/ false

// isInteger()
/* do a description and gime me 3 examples of its ussage 
Determina si el valor que se pasa es entero
1.-Number.isInteger(10);//true

2.-Number.isInteger(10.02);//false

3.-Number.isInteger(NaN);//false

// isNaN()
/* do a description and gime me 3 examples of its ussage 
Determina si el valor que se pasa no es un numero(Not a Number).
1.-Number.isNaN('true?');// false

2.-Number.isNaN(NaN);// true

3.-isNaN('100f');// true

// isSafeInteger()
/* do a description and gime me 3 examples of its ussage 
Determina si el valor que se pasa es un entero seguro.
1.-Number.isSafeInteger(Math.pow(2,53));//false

2.-Number.isSafeInteger(Math.pow(2,53)-1);//true

3.-Number.isSafeInteger(256.12897456245612564565641256412);//false

// toExponential()
/* do a description and gime me 3 examples of its ussage 
Metodo que regresa el numero que se le pase en notacion exponencial en string
1.- 1235.698745.toExponential(5);//'1.23570e+3'

2.- 1235.698745.toExponential(2);//'1.24e+3'

3.- 1235.698745.toExponential(9);//'1.235698745e+3'

// toFixed()
/* do a description and gime me 3 examples of its ussage 
Metodo que formatea un numero decimal y lo redondea al numero de decimales que se le indique
1.-123.45678.toFixed(2);//'123.46'

2.-123.45678.toFixed(5);//'123.45678'

3.-123.45678.toFixed(1);//'123.5'

// toPrecision()
/* write a description and gime me 3 examples of its ussage 
Metodo que retorna en string el numero a la precision que se le especifique,
1.-123.454.toPrecision(5);//'123.45'

2.-1.02564.toPrecision(3);//'1.03'

3.-12.568952.toPrecision(6);//'12.5690'

// String

// fromCharCode()
/* give me an example that does an action a string 
Metodo que devuelve una cadena creada a partir de la secuencia especificada de codigo UTF-16.
1.-String.fromCharCode(13, 432, 19, 561)\\'\rư\u0013ȱ'

// fromCodePoint()
/* give me an example that does an action a string 
Metodo que retorna una cadena creada al usar una secuencia de codigo.
1.-String.fromCodePoint(9721, 9333, 8842, 0x2F507)//'◹⑵⊊𯔇'

// charAt()
/* give me an example that does an action a string 
Metodo que devuelve una nueva cadena de la posicion que se le indique en la cadena.
1.-'esto no es lo que parece'.charAt(8);//'e'

// charCodeAt()
/* give me an example that does an action a string 
Metodo que devuelve el valor numerico en la posicion que se le indique en la cadena.
1.-'crei que la tarea era poca'.charCodeAt(13);//97

// codePointAt()
/* give me an example that does an action a string 
Metodo que retorna un numero positivo valor del unicode que representa ese caracter.
1.-'jhgvjh'.codePointAt(2)//103

// concat()
/* give me an example that does an action a string 
Metodo que concatena dos cadenas y devuelve una nueva cadena.
1.-'cadena 1'.concat(' ','cadena2');//'cadena 1 cadena2'

// endsWith()
/* give me an example that does an action a string 
Metodo que retorna un booleano al determinar si la cadena a evaluar termina con la cadena de caracteres que se le especifiquen.
1.- 'juanjo no tiene quien lo cuide'.endsWith('de',30);//true

// includes()
/* give me an example that does an action a string 
Metodo que retorna un booleano al determinar si en la cadena a evaluar se encuentra determinado fragmento de cadena que se pase.
1.-'esta oracion'.includes('ora');//true

// indexOf()
/* give me an example that does an action a string 
Metodo que retorna la posicion en la que se encuentra el fragmento de caracter que se le pase a buscar.
Si no lo encuentra regresa un -1.
1.-'esta cadena contiene letras'.indexOf('tie');//15

// lastIndexOf()
/* give me an example that does an action a string 
Metodo que retorna el numero de la ultima posicion donde se encuentra la cadena a evaluar dentro de otra cadena.
Retorna -1 si no encuentra coincidencias.
1.-'En esta cadena debe encontra cadena de cadenas0'.lastIndexOf('den');//41

// localeCompare()
/* give me an example that does an action a string 
Método devuelve un número que indica si una cadena de referencia aparece antes o después o si es la misma que la cadena dada en orden de clasificación.
1.-'ahora'.localeCompare('comes');//-1

// normalize()
/* give me an example that does an action a string 
Metodo que regresa la forma normalizada del unicode de un string dado.
var word1 = "igual"

var word2 = word1.normalize('NFD');

word1 != word2// true

// padEnd()
/* give me an example that does an action a string 
Metodo que rellena una cadena con otra cadena dada, el relleno comienza desde el final de la cadena actual.
'primer cadena a rellenar'.padEnd(35,'#')//'primer cadena a rellenar###########'

// padStart()
/* give me an example that does an action a string 
Metodo que rellena una cadena con otra cadena dada, el relleno comienza desde el inicio de la cadena actual.
'Cadena a rellanar'.padStart(27,'^')//'^^^^^^^^^^Cadena a rellanar'

// repeat()
/* give me an example that does an action a string 
Metodo que regresa una nueva cadena conteniendo la cadena original el numero de veces que se le hayan indicado.
'l'.repeat(15)//'lllllllllllllll'

// replace()
/* give me an example that does an action a string 
Metodo que regresa una nueva cadena con la cadena que coincida con lo que se desee reemplazar.
var temp = 'El maestro Caps siempre nos da clases antes que el maestro Braus';
temp.replace('maestro','sensei');//'El sensei Caps siempre nos da clases antes que el maestro Braus'

var regExp = /maestro/gi;
temp.replace(regExp,'sensei');//'El sensei Caps siempre nos da clases antes que el sensei Braus'

// search()
/* give me an example that does an action a string 
Metodo que realiza una busqueda de coincidencias entre una expresion regular y un objeto String. Regresa el indice de la primer coincidencia.
var bar = 'El objeto que buscaban nunca fue encontrado';
var expre = \[A-Z]\;\\0
var expre = \[a-z]\;\\1
bar.search(expre);

// slice()
/* give me an example that does an action a string 
Metodo que divide una seccion de una cadena y la retorna como una nueva cadena sin modificar la cadena original.
var cadena = 'Esta cadena es para el ejemplo del slice';
cadena.slice(20);//'el ejemplo del slice'

// split()
/* give me an example that does an action a string 
Metodo que divide un objeto string en un arreglo de strings separados por un string dado donde se haran cada separacion.
var cad = 'Cadena para el uso del metodo split';
var newCad; //variable donde se retornara la cadena en un arreglo separado por los espacios.

newCad = cad.split(' '); \\[ 'Cadena', 'para', 'el', 'uso', 'del', 'metodo', 'split' ]

// startsWith()
/* give me an example that does an action a string 
Metodo que devuelve true o false si la cadena comienza con el caracter de una cadena especificada.
var cad = "Con que letra inicia esta cadena?"

cad.startsWith('Con');\\true

cad.startsWith('con');\\false

// substring()
/* give me an example that does an action a string 
Metodo que retorna parte del string delimitado por el inicio y finde los indices dados o del inicio y el final de la cadena.
var cad = 'cuasimodo';

cad.substring(3,6);\\'sim'
cad.substring(5);\\'modo'

// toLocaleLowerCase()
/* give me an example that does an action a string 
Metodo que retorna una cadena convertida a minusculas de acuerdo al mapeo de la localidad.
'ELJONA'.toLocaleLowerCase();\\'eljona'

// toLocaleUpperCase()
/* give me an example that does an action a string 
Metodo que retorna una cadena convertida a minusculas de acuerdo al mapeo de la localidad.
'eljona'.toLocaleUpperCase();\\'ELJONA'

// toLowerCase()
/* give me an example that does an action a string 
Metodo que retorna una cadena convertida en minusculas.
var str = 'CADENA CON MUCHOS CARACTERES EN MAYUSCULA';

str.toLowerCase();\\'cadena con muchos caracteres en mayuscula'

// toString()
/* give me an example that does an action a string 
Metodo que devuelve una cadena representando el objeto en especifico.
var str = new String('String');\\[String: 'String']

// toUpperCase()
/* give me an example that does an action a string 
Metodo que retorna una cadena convertida en mayusculas.
var str = 'cadena con muchos caracteres en mayuscula';

str.toUpperCase();\\'CADENA CON MUCHOS CARACTERES EN MAYUSCULA'

// trim()
/* give me an example that does an action a string 
Metodo que regresa una cadena eliminando los espacios vacios que pueda contener, al inicio y al final de la cadena.
var trab = '     juarez    ';

trab.trim();\\'juarez'

// trimEnd()
/* give me an example that does an action a string 
Metodo que devuelve una cadena sin los espacios en blanco que encuentre al final.
var eject = '      jimenez     ';
eject.trimEnd();\\'      jimenez'

// trimStart()
/* give me an example that does an action a string 
Metodo que devuelve una cadena sin los espacios en blanco que encuentre al inicio.
var eject = '      jimenez     ';
eject.trimStart();\\'jimenez     '

 give me 3 example using all the String functions above over the same String*/

function example1(){

    console.log('ESTE ES EL INICIO DE LA FUNCION 1 CON EJEMPLOS');

    var cadena = 'Estos son varios caracteres: aqui hay mas';

    var newCharAt = cadena.charAt(11);
    console.log(newCharAt);

    var newCharCodeAt = cadena.charCodeAt(11);
    console.log(newCharCodeAt);

    var cadena2 = cadena.concat(', ','esto es parte de la otra cadena.');
    console.log(cadena2);

    if (cadena.endsWith('mas')){
        console.log('La cadena termina con la palabra \'mas\'');
    }else {
        console.log('La cadena no termina con la palabra \'mas\'');
    }

    var temp = 'son';
    console.log(`La cadena "${cadena}" ${cadena.includes(temp)? 'contiene' : 'no contiene'} la palabra: `+ temp);

    console.log('la palabra \'caracteres\' se encuentra a partir del indice: '+cadena.indexOf('caracteres'));

    console.log('la ultima letra \'a\' se encuentra a partir del indice: '+cadena.lastIndexOf('a'));

    if (cadena.localeCompare(cadena2) < 0){
        console.log(cadena +' Siempre viene antes que '+ cadena2);
    }else if (cadena2 > 0){
        console.log(cadena +' Siempre viene después que '+ cadena2);
    }else {
        console.log('Las cadenas son las mismas');
    }

    var word1 = 'estos';
    var word2 = word1.normalize('NFC');

    if (word1 != word2){
        console.log('palabra normalizada correctamente mediante NFC');
    }else{
        console.log('palabra no normalizada'+' ejemplo de normalize');
    }

    console.log(cadena.padEnd(50, '#')+' ejemplo de padEnd');

    console.log(cadena.padStart(80, '#')+' ejemplo de padStart');

    console.log(cadena2.repeat(5)+ 'ejemplo de \'repeat\'');

    console.log(cadena.replace('caracteres','mishis'));

    console.log(cadena.search(/caracteres/)+ ' ejemplo de String.search(regExp)');

    console.log(cadena.slice(12,25)+ ' ejemplo de Slice');

    console.log(cadena.split('')+' ejemplode split');

    if (cadena.startsWith('Es')){
        console.log('La cadena evaluada comienza con \'Es\'')
    }else{
        console.log('La cadena evaluada NO comienza con \'Es\'')
    }

    console.log(cadena.substr(10,25)+ '. Ejemplo usando substring de la cadena: '+ cadena);

    var cadenaU = cadena.toUpperCase();

console.log(cadenaU+ ' Ejemplo de toUpperCase');

console.log(cadenaU.toLowerCase()+ ' Ejemplo de toLowerCase');

var cadenaObj = new String('objeto');

console.log(cadenaObj+ '. Ejemplo de to String');

var cadena3 = '        ';

cadena3 += cadena.concat('       ');

console.log (cadena3+ '. Cadena con espacios al inicio y al final. '+cadena3.trim()+ '. Cadena despues de aplicarle trim. ' );

console.log (cadena3+ '. Cadena con espacios al inicio y al final. '+cadena3.trimEnd()+ '. Cadena despues de aplicarle trimEnd. ' );

console.log (cadena3+ '. Cadena con espacios al inicio y al final. '+cadena3.trimStart()+ '. Cadena despues de aplicarle trimStart. ' );

console.log('ESTE ES EL FINAL DE LA FUNCION 1 CON EJEMPLOS\n');
}

function example2(){

    console.log('ESTE ES EL INICIO DE LA FUNCION 2 CON EJEMPLOS');

    var cadena = 'Esta es otra linea de caracteres par su uso en este ejemplo';

    var newCharAt = cadena.charAt(11);
    console.log(newCharAt);

    var newCharCodeAt = cadena.charCodeAt(11);
    console.log(newCharCodeAt);

    var cadena2 = cadena.concat(', ','esto es parte de la otra cadena.');
    console.log(cadena2);

    if (cadena.endsWith('mas')){
        console.log('La cadena termina con la palabra \'mas\'');
    }else {
        console.log('La cadena no termina con la palabra \'mas\'');
    }

    var temp = 'son';
    console.log(`La cadena "${cadena}" ${cadena.includes(temp)? 'contiene' : 'no contiene'} la palabra: `+ temp);

    console.log('la palabra \'caracteres\' se encuentra a partir del indice: '+cadena.indexOf('caracteres'));

    console.log('la ultima letra \'a\' se encuentra a partir del indice: '+cadena.lastIndexOf('a'));

    if (cadena.localeCompare(cadena2) < 0){
        console.log(cadena +' Siempre viene antes que '+ cadena2);
    }else if (cadena2 > 0){
        console.log(cadena +' Siempre viene después que '+ cadena2);
    }else {
        console.log('Las cadenas son las mismas');
    }

    var word1 = 'estos';
    var word2 = word1.normalize('NFC');

    if (word1 != word2){
        console.log('palabra normalizada correctamente mediante NFC');
    }else{
        console.log('palabra no normalizada'+' ejemplo de normalize');
    }

    console.log(cadena.padEnd(50, '#')+' ejemplo de padEnd');

    console.log(cadena.padStart(80, '#')+' ejemplo de padStart');

    console.log(cadena2.repeat(5)+ 'ejemplo de \'repeat\'');

    console.log(cadena.replace('caracteres','mishis'));

    console.log(cadena.search(/caracteres/)+ ' ejemplo de String.search(regExp)');

    console.log(cadena.slice(12,25)+ ' ejemplo de Slice');

    console.log(cadena.split('')+' ejemplode split');

    if (cadena.startsWith('Es')){
        console.log('La cadena evaluada comienza con \'Es\'')
    }else{
        console.log('La cadena evaluada NO comienza con \'Es\'')
    }

    console.log(cadena.substr(10,25)+ '. Ejemplo usando substring de la cadena: '+ cadena);

    var cadenaU = cadena.toUpperCase();

console.log(cadenaU+ ' Ejemplo de toUpperCase');

console.log(cadenaU.toLowerCase()+ ' Ejemplo de toLowerCase');

var cadenaObj = new String('objeto');

console.log(cadenaObj+ '. Ejemplo de to String');

var cadena3 = '        ';

cadena3 += cadena.concat('       ');

console.log (cadena3+ '. Cadena con espacios al inicio y al final. '+cadena3.trim()+ '. Cadena despues de aplicarle trim. ' );

console.log (cadena3+ '. Cadena con espacios al inicio y al final. '+cadena3.trimEnd()+ '. Cadena despues de aplicarle trimEnd. ' );

console.log (cadena3+ '. Cadena con espacios al inicio y al final. '+cadena3.trimStart()+ '. Cadena despues de aplicarle trimStart. ' );

console.log('ESTE ES EL FINAL DE LA FUNCION 2 CON EJEMPLOS\n');
}

function example3(){

    console.log('ESTE ES EL INICIO DE LA FUNCION 3 CON EJEMPLOS\n');

    var cadena = 'mas caracteres para su uso en la funcion de ejemplos con metodos String';

    var newCharAt = cadena.charAt(11);
    console.log(newCharAt);

    var newCharCodeAt = cadena.charCodeAt(11);
    console.log(newCharCodeAt);

    var cadena2 = cadena.concat(', ','esto es parte de la otra cadena.');
    console.log(cadena2);

    if (cadena.endsWith('mas')){
        console.log('La cadena termina con la palabra \'mas\'');
    }else {
        console.log('La cadena no termina con la palabra \'mas\'');
    }

    var temp = 'son';
    console.log(`La cadena "${cadena}" ${cadena.includes(temp)? 'contiene' : 'no contiene'} la palabra: `+ temp);

    console.log('la palabra \'caracteres\' se encuentra a partir del indice: '+cadena.indexOf('caracteres'));

    console.log('la ultima letra \'a\' se encuentra a partir del indice: '+cadena.lastIndexOf('a'));

    if (cadena.localeCompare(cadena2) < 0){
        console.log(cadena +' Siempre viene antes que '+ cadena2);
    }else if (cadena2 > 0){
        console.log(cadena +' Siempre viene después que '+ cadena2);
    }else {
        console.log('Las cadenas son las mismas');
    }

    var word1 = 'estos';
    var word2 = word1.normalize('NFC');

    if (word1 != word2){
        console.log('palabra normalizada correctamente mediante NFC');
    }else{
        console.log('palabra no normalizada'+' ejemplo de normalize');
    }

    console.log(cadena.padEnd(50, '#')+' ejemplo de padEnd');

    console.log(cadena.padStart(80, '#')+' ejemplo de padStart');

    console.log(cadena2.repeat(5)+ 'ejemplo de \'repeat\'');

    console.log(cadena.replace('caracteres','mishis'));

    console.log(cadena.search(/caracteres/)+ ' ejemplo de String.search(regExp)');

    console.log(cadena.slice(12,25)+ ' ejemplo de Slice');

    console.log(cadena.split('')+' ejemplode split');

    if (cadena.startsWith('Es')){
        console.log('La cadena evaluada comienza con \'Es\'')
    }else{
        console.log('La cadena evaluada NO comienza con \'Es\'')
    }

    console.log(cadena.substr(10,25)+ '. Ejemplo usando substring de la cadena: '+ cadena);

    var cadenaU = cadena.toUpperCase();

console.log(cadenaU+ ' Ejemplo de toUpperCase');

console.log(cadenaU.toLowerCase()+ ' Ejemplo de toLowerCase');

var cadenaObj = new String('objeto');

console.log(cadenaObj+ '. Ejemplo de to String');

var cadena3 = '        ';

cadena3 += cadena.concat('       ');

console.log (cadena3+ '. Cadena con espacios al inicio y al final. '+cadena3.trim()+ '. Cadena despues de aplicarle trim. ' );

console.log (cadena3+ '. Cadena con espacios al inicio y al final. '+cadena3.trimEnd()+ '. Cadena despues de aplicarle trimEnd. ' );

console.log (cadena3+ '. Cadena con espacios al inicio y al final. '+cadena3.trimStart()+ '. Cadena despues de aplicarle trimStart. ' );
}

example1();
example2();
example3();