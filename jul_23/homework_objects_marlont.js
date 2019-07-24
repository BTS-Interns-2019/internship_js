//july 23

//#Objects

//Create a file `homework_<name>.js` in your own branch in this folder

//The file must contain your own function that mimics ( the same input, results in the same output comparing with the original method )
//the folowing methods without ussing that method


//Object.assign()
//Object.defineProperties()
//Object.entries()
//Object.freeze() // create new freezed object
//Object.seal() // create new sealed object
//Object.fromEntries()
//Object.getOwnPropertiesDescriptors()
//Object.isFrozen()
//Object.isSealed()
//Object.keys()
//Object.values()

// Object.assign()
function assign(target, source){
  var entradas = Object.entries(source);
  for(var i=0; i<entradas.length; i++){
    Object.defineProperty(target, entradas[i][0], {
        value: entradas[i][1],
        writable: true,
        enumerable: true,
        configurable: true
    });
  }
  return target;
}

//Object.defineProperties()
//El argumento debe ir expresado en forma de string declarandolo solo sus propiedades asi:
//"<nombrePropiedad>:<valorPropiedad>,...,<nombrePropiedad>:<valorPropiedad>"
//Este metodo se debe asignar a una var, let o const para guardar las propiedades en un objeto.
function defineProperties(props){
  var propiedades = props.trim();
  propiedades = propiedades.split(",");
  
  var objeto = new Object();

  for(var i=0; i<propiedades.length; i++){
    var datos = propiedades.trim();
    datos = propiedades[i].split(":");
    Object.defineProperty(objeto, datos[0], {
      value: datos[1],
      writable: true,
      enumerable: true,
      configurable: true
    });
  }
  return objeto;
}

//Object.entries()
function entries(objeto){
  var names = Object.keys(objeto);
  var vals = Object.values(objeto);
  var respuesta = "[";

  for(var i=0; i<names.length; i++){
    respuesta = respuesta + "[" + names[i] + "," + vals[i] + "]"; 
    if(i < names.length-1){
      respuesta = respuesta + ",";
    }
  }
  respuesta = respuesta + "]";
  console.log(respuesta);
  return respuesta;
}

//Object.freeze()
//El argumento debe ir expresado en forma de string declarandolo solo sus propiedades asi:
//"<nombrePropiedad>:<valorPropiedad>,...,<nombrePropiedad>:<valorPropiedad>"
//Este metodo se debe asignar a una var, let o const para crear el nuevo objeto.
function freeze(props){
  var propiedades = props.trim();
  propiedades = propiedades.split(",");

  var objeto = new Object();

  for(var i=0; i<propiedades.length; i++){
    var datos = propiedades[i].split(":");

    Object.defineProperty(objeto, datos[0], {
      value: datos[1],
      enumerable: false,
      configurable: false,
      writable: false
    });
  }

  Object.preventExtensions(objeto);
  return objeto;
}

//Object.seal()
//El argumento debe ir expresado en forma de string declarandolo solo sus propiedades asi:
//"<nombrePropiedad>:<valorPropiedad>,...,<nombrePropiedad>:<valorPropiedad>"
//Este metodo se debe asignar a una var, let o const para crear el nuevo objeto.
function seal(props){
  var propiedades = props.trim();
  propiedades = propiedades.split(",");

  var objeto = new Object();

  for(var i=0; i<propiedades.length; i++){
    var datos = propiedades[i].split(":");

    Object.defineProperty(objeto, datos[0], {
      value: datos[1],
      enumerable: true,
      configurable: false,
      writable: true
    });
  }

  Object.preventExtensions(objeto);
  return objeto;
}

//Object.fromEntries()
function fromEntries(arreglo){
  var objeto = new Object();
  for(var i=0; i<arreglo.length; i++){
    Object.defineProperty(objeto, arreglo[i][0], {
      value: arreglo[i][1],
      enumerable: true,
      configurable: true,
      writable: true
    });
  }
  console.log(objeto);
  return objeto;
}

//Object.getOwnPropertiesDescriptors()
function getOwnPropertiesDescriptors(obj){
  var props = Object.keys(obj);
  var descriptors = "{";

  for(var i=0; i<props.length; i++){
    var res = Object.getOwnPropertyDescriptor(obj,props[i]);
    descriptors = descriptors + props[i] + ":" + res;
    if(i < props.length-1){
      descriptors = descriptors + ",";
    }
  }

  descriptors = descriptors + "}";
  console.log(descriptors);
  return descriptors;
}
