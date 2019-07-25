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
      return obj.edad = void function mayor(){return "hurray";};
    } else {
      return obj.edad = valor;
    }
}
