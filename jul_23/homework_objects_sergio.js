var object1 = { a:1, b:2, c:3, d:"hector no esta", e:["este","es","un","array"] };
var object2 = { a:1, b:4};

function asignar(object1,object2) {
    
    for ( key in object2) {
        
        object1[key] = object2[key]
    }
    
    
    //Object.defineProperty.b
    return object1
}


console.log(asignar(object1,object2));

//Object.defineProperties()
// function defineProperties(params) {
    
// }

//Object.entries()
// let entries 
function entries(V,K) {
   let restulado = [];
   
   
    for (let i = 0; i < V.length; i++) {
        //console.log(V[i]);
        
        restulado[i] = ([K[i],V[i]]);
        
    }
   return restulado;
}
let V = keysvalues(object1);
let K = keys(object1);
console.log(entries( V,K));



//Object.freeze() // create new freezed object



//Object.seal() // create new sealed object



//Object.fromEntries()


//Object.getOwnPropertiesDescriptors()


//Object.isFrozen()


//Object.isSealed()


//Object.keys()
//console.log(Object.keys(object1));
function keys(object1) {
    
    let arryKeys = []
    for ( key in object1) {

    arryKeys.push(key);
    
    }
    return arryKeys;
}
console.log(keys(object1));

//console.log(arryKeys);


//Object.values()
//console.log(Object.keys(object1));

function keysvalues(object1) {
        let keysDeObjects1 = [];
        for (key in object1) {
            
            for ( val in key) {

                keysDeObjects1.push(object1[key]);
                //console.log(object1[key]);     
            }
        }
        return keysDeObjects1
}
console.log(keysvalues(object1));






