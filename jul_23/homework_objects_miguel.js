/*#Objects

Create a file homework_<name>.js in your own branch in this folder

The file must contain your own function that mimics ( the same input, results in the same output comparing with the original method ) the folowing methods without ussing that method

Object.assign()
Object.defineProperties()
Object.entries()
Object.freeze() // create new freezed object
Object.seal() // create new sealed object
Object.fromEntries()
Object.getOwnPropertiesDescriptors()
Object.isFrozen()
Object.isSealed()
Object.keys()
Object.values()*/

//example:

// Object.assign

function aObjDeObj(destino, origen){//assign
  let aux = destino;
  for(let i in aux){
      for(let j in origen){
          if(i==j){
            aux.i=origen.j;
          }else{
              Object.defineProperty(aux,origen.j,true,true,true,true);
          }
      }
  }
  //Ex: Object.assign(destino,origen)
}
function ponerProps(){//defineProperties
    /* your code here */
    //Ex: Object.defineProperties("propiedad":{value:true,writable:true},"propiedad2":{value:true,configurable:true})//Default false
}
function listarObj(){//entries
    /* your code here */
    //Ex: Object.entries(objeto)
}
function inhabilitar(){//freeze
    /* your code here */
    //Ex: Object.freeze(objeto)
}
function atrapar(){//seal
    /* your code here */
    //Ex: Object.seal(objeto)
}
function delistarObj(){//fromEntries
    /* your code here */
    //Ex: Object.fromEntries(objeto)
}
function mostrarProps(){//getOwnPropertyDescriptors
    /* your code here */
    //Ex: Object.getOwnPropertyDescriptors(objeto)
}
function esInutil(){//isfrozen
    /* your code here */
    //Ex: Object.isFrozen(objeto)
}
function estaAtrapado(){//issealed
    /* your code here */
    //Ex: Object.isSealed(objeto)
}
function nombresPropsEnum(){//keys
    /* your code here */
    //Ex: Object.keys(objeto)
}
function mostrarValores(){//values
    /* your code here */
    //Ex: Object.values(objeto)
}

var obj1 = {
    nombre:'Chester',
    edad: 15,
    genero: 'Masulino'
};
var obj2 = {
    nombre: 'Samuel',
    apellido: 'Mendez',
    ocupacion: 'Estudiante'
}
aObjDeObj(obj1,obj2);