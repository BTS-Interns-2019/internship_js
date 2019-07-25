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
    if (valor > 18) {
        var x = function () {return "hurray"};
        persona.edad = x();
    } else {
        persona.edad = valor;   
    }

}

function comidafavorita(persona, valor) {
    persona.comidaFavorita = [valor];
}

function fraseFavorita(persona, valor) {
    persona.fraseFavorita = "Hey you";
}

console.log(persona);