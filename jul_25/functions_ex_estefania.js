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
