const obj = {'Tipo':'fresaa','color':'rojo'};
const obj2 = {'color':'verde','Precio':30};
const obj3={}, obj4={};
Object.assign(obj3,obj);
Object.assign(obj4,obj);

function assign(target, source){ //falta con más parametros
    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            const element = source[key];
            target[key]=element;        
        }            
    }        
    return target;    
}
//assign(obj2,obj)
//console.log(obj2);


function defineProperties(objeto, propiedades){
    for (const key in propiedades) {
        Object.defineProperty(objeto, key, propiedades[key]);
    }
    return objeto;
}

/*defineProperties(obj, {
    "property1": {
      value: true,
      writable: true
    },
    "property2": {
      value: "Hello",
      writable: false
    }
  });*/
//console.log(obj);


function entries(obj){
    let arr=[];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const element = obj[key];
            arr.push([key,element])
        }
    }
    return arr;
}
//console.log(entries(obj));

function freeze(objeto){
    Object.preventExtensions(objeto);
    for (const key in objeto) {
        if (objeto.hasOwnProperty(key)) {
            Object.defineProperty(objeto, key, {writable:false, configurable:false})
        }
    }
}
freeze(obj3);
//console.log(Object.isFrozen(obj3));


function seal(objeto){
    Object.preventExtensions(objeto);
    for (const key in objeto) {
        if (objeto.hasOwnProperty(key)) {
            Object.defineProperty(objeto, key, {configurable:false})
        }
    }
}
seal(obj4);
// console.log(Object.isFrozen(obj4));
// console.log(Object.isSealed(obj4));


function fromEntries(arr){
    let objetito={};
    if (Array.isArray(arr)){
        for (const key in arr) {
            if (arr.hasOwnProperty(key)) {
                const element = arr[key];
                objetito[element[0]]=element[1];
            }
        }
    }else
    for (var [clave, valor] of arr) {
        objetito[clave]=valor;
      }
    return objetito;
}
//console.log(fromEntries([['a',2],['b',3]]));


function getOwnPropertyDescriptors(obj){
    objetito={};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            objetito[key]=Object.getOwnPropertyDescriptor(obj, key);
        }
    }
    return objetito;
}
//console.log(getOwnPropertyDescriptors(obj));


function isFrozen(obj){
    if (!Object.isExtensible(obj)){
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const element = obj[key];
                let propiedades=Object.getOwnPropertyDescriptor(obj,key);
                if(propiedades.writable==false && propiedades.configurable==false)
                return true;                
            }
        }
    }
    return false
}
//console.log(isFrozen(obj3));


function isFrozen(obj){
    if (!Object.isExtensible(obj)){
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const element = obj[key];
                let propiedades=Object.getOwnPropertyDescriptor(obj,key);
                if(propiedades.configurable==false)
                return true;                
            }
        }
    }
    return false
}
//console.log(isFrozen(obj4));


function keys(obj){
    let arr=[];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(key);
        }
    }
    return arr;
}
//console.log(keys(obj));


function values(obj){
    let arr=[];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const element = obj[key];
            arr.push(element);
        }
    }
    return arr;
}
//console.log(values(obj));


/*Object.assign()
Object.defineProperties()
Object.entries()
Object.freeze() // create new freezed object
Object.seal() // create new sealed object
Object.fromEntries()
Object.getOwnPropertiesDescriptors()  //Object.getOwnPropertiyDescriptors
Object.isFrozen()
Object.isSealed()
Object.keys()
Object.values()*/