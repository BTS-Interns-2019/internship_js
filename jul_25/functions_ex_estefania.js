//In JavaScript, a function can be defined based on a condition. For example, the following function definition defines myFunc only if num equals 0

var laFuncion;
let num = 0;
if (num === 0) {
  laFuncion = function(algo) {
    return "Hola " + algo;
  }
}

let x = laFuncion("mundo")
x


// objeto persona con propiedades

const persona = {};

// nombre
function name(objeto, valor) {
    objeto.name = valor 
}
// direccion

function address(objeto, valor) {
    objeto.address= valor 
}
// numero

function number(objeto, valor) {
    objeto.number = valor 
}
// ocupacion

function ocupacion(objeto, valor) {
    objeto.ocupacion = valor 
}
// edad

function age(objeto, valor) {
    objeto.age = valor > 18 ? function () { return 'hurray'; } : valor;
}

// comida favorita -- Array
function food(objeto, valor) {
    objeto.food = valor 
}

// fraseFavorita
function phrase(objeto, valor) {
    objeto.phrase = valor 
}

name(persona, 'Estefania');
address(persona, 'tule 6');
number(persona, 5520805480);
ocupacion(persona, 'Intern');
age(persona, 25);
food(persona, ['Arroz con leche', 'tacos de suadero']);
phrase(persona, 'Los sueños pueden cumplirse o no, pero lo importante es luchar por ellos');

console.log(persona);


/*crea un contador de velocidad promedio

nombre de la funcion padre 'averageSpeed'
regresa una funcion hija 'funcionHija'

*/



function averageSpeed() {
    let suma = 0;
    let i = 0;

    return function funcionHija(speed) {
            i++
            suma += speed
            return suma / i
        }      
    }

let average = averageSpeed();
console.log(average(100));
console.log(average(50))
console.log(average(75))