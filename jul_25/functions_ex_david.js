// var myFunc;

// num = 0;

// if (num === 0) {
//   myFunc = function(theObject) {
//     theObject.make = 'Toyota';
//   }
// }

// var obj = new Object();
// myFunc(obj);
// console.log(obj);

// si edad es mayor a 18, asigna una funcion a esa propiedad que retorne "hurray"

var persona  = new Object();

nombre(persona,"David Silva");
direccion(persona,"Gregorio Torres Quintero 119, San Miguel, Iztapalpa, CDMX");
numero(persona,119);
ocupacion(persona,"Intern");
edad(persona,26);
comidafavorita(persona,"Tacos");
fraseFavorita(persona,"Hey you");

function nombre(persona, valor) {
    persona.nombre = valor;
}

function direccion(persona, valor) {
    persona.direccion = valor;
}

function numero(persona, valor) {
    persona.numero = valor;
}

function ocupacion(persona, valor) {
    persona.ocupacion = valor;
}

function edad(persona, valor) {
    persona.edad = 26;
}

function comidafavorita(persona, valor) {
    persona.comidaFavorita = [valor];
}

function fraseFavorita(persona, valor) {
    persona.fraseFavorita = "Hey you";
}

// function Hurray(persona){
//     if (persona.edad > 18) {
//         return "hurray"
//     }
// }
// var hurray = Hurray(persona);

console.log(persona);
