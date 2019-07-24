const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

//Object.assign()
function assign(target,source){
    let ts = Object.getOwnPropertyNames(source);
    for(key of ts){
        target[key] = source[key];
    }
    return target;
  }
  assign(target,source);
  console.log(target);

  let object1 = {};
  const prop = {
    property1: {
      value: 42,
      writable: true
    },
    property2: {}
  };

//Object.defineProperties()
function defineProperties(object,properties){
    let prob = Object.getOwnPropertyNames(properties);
    for(let p of prob){
        object[p] = properties[p];
    }
}
defineProperties(object1,prop);
console.log(object1);

//Object.entries()
 object1 = {
    a: 'somestring',
    b: 42
  };
function entries(object){
 let ent = [];
 let prop = Object.getOwnPropertyNames(object);
 for(let p of prop){
     let kv = [];
     kv['key'] = p;
     kv['value'] = object[p];
     ent[ent.length] = kv; 
 } 
 return ent;
}
console.log(entries(object1));

//Object.freeze() // create new freezed object+
function freeze(object){
    let newObject = {};
    let prob = Object.getOwnPropertyNames(object);
    for(let p of prob){
        newObject[p] = object[p];
    }
    newObject.isFrozen = true;
    return newObject;
}
object = freeze(object1);

//Object.seal() // create new sealed object
function seal(object){
    let newObject = {};
    let prob = Object.getOwnPropertyNames(object);
    for(let p of prob){
        newObject[p] = object[p];
    }
    newObject.isSealed = true;
    return newObject;
}
object2 = seal(object);

 entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
  ]);
  
//Object.fromEntries()
function fromEntries(entries){
 let obj = {};
 for (let m of entries){
  obj[m[0]] = m[1];
 }
 return obj;
}
console.log(fromEntries(entries));

//Object.getOwnPropertiesDescriptors()
object1 ={property1:{
    value: 42,
    writable: true
  },
  property2: {}
};
function getOwnPropertiesDescriptors(object){
 let propiedades = {};
 let keys = Object.getOwnPropertyNames(object);
 for(let k of keys){
     let kk = Object.getOwnPropertyNames(object[k]);
      propiedades[k] = object[k];
 }
 return propiedades;
}
console.log(getOwnPropertiesDescriptors(object1));

//Object.isFrozen()
function isFrozen(object){
 return object.isFrozen?true:false;
}
console.log(isFrozen(object));
console.log(isFrozen(object1));

//Object.isSealed()
function isSealed(object){
    return object.isSealed?true:false;
}
console.log(isSealed(object2));
console.log(isSealed(object1));

//Object.keys()
object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
function keys(object){
    let s = Object.getOwnPropertyNames(object);
    let arr = [];
    for(let k of s){
        arr[arr.length] =k ;
    }
    return arr;
}
console.log(keys(object1));

//Object.values()
function values(object){
    let s = Object.getOwnPropertyNames(object);
    let arr = [];
    for(let k of s){
        arr[arr.length] =object[k] ;
    }
    return arr;
}
console.log(values(object1));
