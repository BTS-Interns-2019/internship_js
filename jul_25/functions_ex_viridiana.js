// objeto persona con propiedades4
// funciones llenando cada campo.
// reciben 2 parametros (objeto, valor)
// cada funcion solo puede llenar una propiedad con el valor que se pasa
// si edad es mayor a 18, asigna una funcion a esa propiedad que retorne "hurray"
// expected: 7 funciones que llenan solo un campo de el objeto en parametro

const persona = {};

// nombre
function nombre(obj, data) {
    obj.nombre = data;
}

// direccion
function direccion(obj, data) {
    obj.direccion = data;
}

// numero
function numero(obj, data) {
    obj.numero = data;
}

// ocupacion
function ocupacion(obj, data) {
    obj.ocupacion = data;
}

// comida favorita
function comidaFavorita(obj, data) {
    obj.comidaFavorita = data;
}

// fraseFavorita
function fraseFavorita(obj, data) {
    obj.fraseFavorita = data;
}

// edad
function edad(obj, data) {
    obj.edad = data > 18 ? function () { return 'hurray'; } : data;
}


nombre(persona, 'Viridiana')
direccion(persona, 'Bosques')
numero(persona,3312659390 )
ocupacion(persona, 'Estudiante')
comidaFavorita(persona, ['Pozole', 'Pizza', 'Elotes', 'Quesadillas'])
fraseFavorita(persona,'Si crees en ti puedes hacerlo' )
edad(persona, 24)

console.log(persona)