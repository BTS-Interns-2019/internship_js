

// 3 break
for(var i=0; i<10; i++){
    if (i === 6){
        break;
    }
    console.log("Linea: " + i);
}

et:
for(var i=0; i<10; i++){
    for(var j=0; j<5; j++){
        console.log("Linea: " + i) + " Interacion: " + j;
        if (j === 2){
            break et;
        }
    }
}

var a = 0;
while(a < 6){
    console.log(a);
    a++;
    if(a == 4){
        break;
    }

}
// 3 continue
for(var i=0; i<10; i++){
    if (i === 6){
        continue;
    }
    console.log("Linea: " + i);
}


for(var i=0; i<10; i++){
    for(var j=0; j<5; j++){
        console.log("Linea: " + i) + " Interacion: " + j;
        if (j === 2){
            continue;
        }
    }
}

var a = 0;
while(a < 6){
    console.log(a);
    a++;
    if(a == 4){
        continue;
    }

}

// 3 if else
a=6;
i=3;
if(a > 5){
    console.log("a es mayor a 5");
} else {
    console.log("a no es mayor a 5");
}

if(i > a){
    console.log("i es mayor que a");
} else {
    console.log("i es menor o igual que a");
}

if(i > a){
    console.log("i es mayor que a");
} else if(i === a){
    console.log("i es igual que a");
} else {
    console.log("i es menor que a");
}

// 3 switch
var tipo = "hola";
switch(typeof tipo){
    case 'number' : {
        console.log("variable tipo number");
    }

    case 'string' : {
        console.log("variable tipo string");
    }

    case 'boolean' : {
        console.log("variable tipo booleano");
    }

    default : {
        console.log("variable de un tipo raro");
    }
}

var a = 12;
switch(true){
    case a < 10 : {
        console.log("variable a tiene solo un digito");
    }

    case a > 10 && a < 100 : {
        console.log("variable a tiene dos digitos");
    }

    case a > 100 && a < 1000 : {
        console.log("variable a tiene 3 digitos");
    }

    default : {
        console.log("variable a es negativa y/o tiene mas de 3 digitos");
    }
}

tipo = "marlon";
switch(tipo){
    case "marlon" : {
        console.log("hola marlon");
    }

    case "jorge" : {
        console.log("hola jorge");
    }

    case "miriam" : {
        console.log("hola miriam");
    }

    default : {
        console.log("y tu quien eres?");
    }
}

// 3 try...catch (2 throw)
var vari1 = "19f64"
try{
    for(var i=0; i<vari1.length; i++){
        if(vari1.charCodeAt(i) >= 48 && vari1.charCodeAt(i) <= 57){
            throw "ERROR: El password no debe contener numeros";
        }
    }
}
catch (err){
    console.error(err);
}

try{
    noExiste();
}
catch (err){
    console.error(err);
}

// 3 let
let x = 12
if(x == 12){
    let x = 8;
    console.log("variable x dentro del bloque vale: " + x);
}
console.log("variable x fuera del bloque vale: " + x);

if(x == 12){
    let x = 16;
    console.log("variable x dentro del bloque vale: " + x);
}
console.log("variable x fuera del bloque vale: " + x);

if(x == 12){
    let x = 4;
    console.log("variable x dentro del bloque vale: " + x);
}
console.log("variable x fuera del bloque vale: " + x);


// 3 const
const no_cambia = 10;
const inmutable = 6;
const siempre_asi = 8;

// 3 function
void function saluda (numero){
    for(var i=0; i<numero; i++){
        console.log("que onda");
    }
}

function elevar_potencia (numero, potencia){
    return Math.pow(numero, potencia);
}

function encripta (cadena){
    cadena = cadena.replace("a", "4");
    cadena = cadena.replace("A", "4");

    cadena = cadena.replace("l", "1");
    cadena = cadena.replace("L", "1");

    cadena = cadena.replace("z", "2");
    cadena = cadena.replace("Z", "2");

    cadena = cadena.replace("e", "3");
    cadena = cadena.replace("E", "3");

    cadena = cadena.replace("s", "5");
    cadena = cadena.replace("S", "5");

    cadena = cadena.replace("g", "6");
    cadena = cadena.replace("G", "6");

    cadena = cadena.replace("t", "7");
    cadena = cadena.replace("T", "7");

    cadena = cadena.replace("b", "8");
    cadena = cadena.replace("B", "8");

    cadena = cadena.replace("q", "9");
    cadena = cadena.replace("Q", "9");

    cadena = cadena.replace("o", "0");
    cadena = cadena.replace("O", "0");

    return cadena;
}

saluda(no_cambia);
no_cambia = elevar_potencia(inmutable, siempre_asi);
console.log(no_cambia);
var texto = encripta(texto);
console.log(texto);

// 3 do while
a=0;
do {
  console.log("hi1");
} while(a>0);

a=10;
do {
    console.log("hi2");
    a--
} while(a>0);

a=1;
do {
    console.log("hi3");
    a--;
}while(a>0);

// 3 for
for(i=0; i<10; i++){
    console.log("hola mundo");
}

for(i=0; i<5; i++){
    console.log("adios mundo");
}

for(i=6; i>0; i--){
    console.log("que hay");
}

// 3 for in
var obj = {a: 1, b: 2, c: 3};
for (const prop in obj) {
  console.log('obj.${prop} = ${obj[prop]}');
}

obj = {a: "marlon", b: "miriam", c: "jorge"};
for (const con in obj) {
  console.log('obj.${con} = ${obj[con]}');
}

obj = {a: true, b: false, c: false};
for (const prop in obj) {
  console.log('obj.${prop} = ${obj[prop]}');
}

// 3 for of
var valor = "foo"
for (let value of valor) {
    console.log(value);
}

valor = [5, 4 , 2]
for (let value of valor) {
    console.log(value);
}

valor = "bar"
for (let value of valor) {
    console.log(value);
}

// 3 while
i=0;
while(i>0){
    console.log("Entra al while 1");
}

i=4;
while(i>0){
    console.log("Entra al while 2");
    i--;
}

i=10;
while(i > 0){
    console.log("Entra al while 3");
    i--;
}
