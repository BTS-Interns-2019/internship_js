var persona = {};

function addNombre(obj, valor){
  return obj.nombre = valor;
}

function addDireccion(obj, valor){
    return obj.direccion = valor;
}

function addNumero(obj, valor){
    return obj.numero = valor;
}

function addOcupacion(obj, valor){
    return obj.ocupacion = valor;
}

function addComidaFavorita(obj, valor){
    return obj.comidaFavorita = valor;
}

function addFraseFavorita(obj, valor){
    return obj.fraseFavorita = valor;
}

function addEdad(obj, valor){
    if(valor > 18){
      return obj.edad = function(){return "hurray";};
    } else {
      return obj.edad = valor;
    }
}

// Crear un contador de velocidad promedio
// Nombre de la funcion padre averageSpeed
// Regresa una funcion funcionHija que recibe un solo parametro numerico, que es la velocidad
//   Esa funcion regresa la velocidad promedio
//   Cada vez que se mande llamar la funcion hija debe tomar el parametro de la velocidad y calcular
//   la nueva velocidad.

var contador = 0;
var sumaVelocidades = 0;
var velocidadPromedio = 0;

function averageSpeed(velocidad){
  function funcionHija(velocidad){
    if(isNaN(velocidad)){
      return velocidadPromedio;
    } else {
      contador ++;
      sumaVelocidades = sumaVelocidades + velocidad;
      velocidadPromedio = sumaVelocidades / contador;
      return velocidadPromedio;
    }
  }
  return funcionHija(velocidad);
}

module.exports = averageSpeed;


