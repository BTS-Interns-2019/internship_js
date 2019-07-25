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


/*#Crea un contador de velocidad
nombre de la funcion padre averageSpeed
regresa una funcion funcion hija que recibe un solo parametro numerico, que es la velocidad
esa funcion regresa la velocidad promedio
cada vez que mande llamr la funcion hija debe tomar el paramtro de la velocidad y calcular la nueva velocidad promedio
*/
function averageSpeedPadre(){//defines la function padre
    let contador=0; 
    let sumVelocidad=0;

    return function averageSpeedHija(velocidad){// define la funcion hija 
        contador ++; 
        sumVelocidad +=velocidad; //hace la suma de la velocidad ingresada
       return sumVelocidad/contador; //regresa  la suma de la velocidad entre los datos recorridos

}

}
  
let promedio=averageSpeedPadre()

console.log(promedio(100))
console.log(promedio(50))
console.log(promedio(75))
    
