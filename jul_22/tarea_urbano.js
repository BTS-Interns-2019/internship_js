//Break
for (let i = 0; ; i++) {
    console.log(i);
    if (i == 10) {
        break;
    }

}

while (true) {
    for (let i = 0; i < 5; i++) {
        console.log("Hola mundo")

    }
    break;
}

for (let j = 1; j < 100; j++) {
    console.log(j * 3);

    break;

}
//Continue
var numbers = [2, 4, 6, 8, 10];
for (let i = 0; i < numbers.length; i++) {
    if (i == 2) {
        continue;
    }
    console.log(numbers[i]);
}

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 8) {
        console.log("Saltando...");
        continue;
        break;
    }
    console.log(numbers[i]);

}

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 4 == 0) {
        continue;
    }
    console.log(numbers[i]);

}
//if else
if (Array.isArray(numbers)) {
    console.log("numbers es un arreglo")
} else {
    console.log("numbers no es un arreglo")
}

if (numbers[4] === 5) {
    console.log("La poscion 4 es el numero 5");
} else {
    console.log("Me equivo que, era el numero " + numbers[4]);
}

if (numbers[3] % 2 == 0) {
    console.log(numbers[3] + " Es par");
} else {
    console.log(numbers[3] + " Es impar");
}

//switch
for (let i = 0; i < numbers.length; i++) {
    switch (numbers[i]) {
        case 4:
            console.log("A las 4 sale el gato");
            break;
        case 8:
            console.log("A las 8 me como un biscocho");
            break;
        case 10:
            console.log("A las 10 me duermo otra vez!");
            break;

        default:
            console.log("****");
            break;
    }
}

console.log("Cusiosidades de los numeros 2 y 6")
for (let i = 0; i < numbers.length; i++) {
    switch (numbers[i]) {
        case 2:
            console.log("2: Número primo y el único de ellos que es par.");
            break;
        case 6:
            console.log("6: Es el factorial de 3, ya que 6 = 3 × 2 × 1.");

        default:
            console.log("");
            break;
    }

}

var nombre = "urbano";
switch (nombre) {
    case "pedro":
        console.log("Te llamas pedro");
        break;
    case "Juan":
        console.log("Te llamas Juan");
        break;
    case "Raul":
        console.log("Te llamas Raul");
        break;

    default:
        console.log("No pude adivinar tu nombre")
        break;
}

// try...catch
let rotar
try {
    if (typeof (rotar=='undefine')){
        throw "La variable esta sin definir";
    }


} catch (error) {
    console.log(error);
}

try {
    try {
        throw new Error("Demonios!!");
    } catch (error) {
        console.error("En serio!!", error.message);
        throw error;
    }
} catch (error) {
    console.error("Ni el error te salio bien");
}
let valor= 9;
try {
    if (valor<18) {
        throw "No es mayor que 18";
    }
} catch (Error) {
    console.log(Error);

}
//let
let miEdad= 18;
let miNombre= "urbano";
let estatura = 180;

//const
const sexo= "Masculino";
const pi = 3.1416;
const color = "rojo";
//function
function sumaNumeros(a,b) {
    return a + b;
}
console.log(8 + 8);

function toUpperCase(word) {
   return word.toUpperCase();
}

console.log(toUpperCase(miNombre));

function isOdd(number) {
    if(number%2==0){
        console.log("Este numero no es impar");
    }else{
        console.log(number+" es impar");
    }
}
console.log(isOdd(15));
//do while;
let counter=0
do{
    console.log("Hola");
    counter++;

}while(counter<3)

do{
    for (let i = 0; i < numbers.length; i++) {
        counter= numbers[i];
    }
    console.log(counter);
}while(counter === 0);
let edad=20;
do{
edad++
}while (edad < 50)
console.log(edad);
//for

for (let i = 10; i > 0; i--) {
    console.log(i)

}
console.log("Numbers")
for (let index = 0; index < numbers.length; index++) {

    console.log(numbers[index]);

}

for (let i = 0; i < numbers.length; i++) {
    console.log("2 x "+numbers[i]+" = " + numbers[i]*2);

}
//for in

var someGuy= {
    nombre:"Pepe",
    edad:15,
    nacionalidad:"mexicano"
}
for (let property in someGuy) {
    console.log(property+"= "+someGuy[property]);
}

persona= "";
for (const prop in someGuy) {
   persona+= someGuy[prop]+" ";
}
console.log(persona+" ");

for (let key in someGuy) {
    someGuy[key]= "Vacio";
    console.log(someGuy[key])
}
for (const iterator of numbers) {

    console.log(iterator+10);
}

for (const i of miNombre) {
    console.log(i);
}
//While
let number = 0;
while (number <3){
number++
console.log(number);
}
console.log("dsdf")

let num1=0;
let num2= 2;
while (num1<20) {
    num1= num1+num2;
    num2++;
    console.log(num1);
}

function iterator(number) {
    let conter=0;
    while (conter<=number){
        console.log(conter++);

    }
}
iterator(15)