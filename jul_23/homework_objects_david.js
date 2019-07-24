/* #Objects

The file must contain your own function that mimics ( the same input, results in the same output comparing with the original method )
the folowing methods without ussing that method

Object.assign()
Object.defineProperties()
Object.freeze() // create new freezed object
Object.seal() // create new sealed object
Object.fromEntries()
Object.getOwnPropertiesDescriptors()
Object.isFrozen()
Object.isSealed()

Object.entries()
Object.keys() 
Object.values()
*/

obj = { a: 1, b: 2, c: 3}

// Object.entries()
console.log('Objetc.entries()');
console.log(Object.entries(obj));
console.log(entries(obj))
console.log();

function entries(objeto) {
    var resultado = [];
    j = 0;
    for (var i in objeto) {
        //objeto.hasOwnProperty se usa para filtrar las propiedades del objeto
        if (objeto.hasOwnProperty(i)) {
            resultado[j] = [i,objeto[i]];
            j++;
        }
    }
    return resultado;
}

// // Object.fromEntries()
// console.log(Object.fromEntries(obj));
// console.log(fromEntries(obj));

// function entries(objeto) {
//     array = entries(objeto);
//     var resultado = {};
//     for (var i in array) {
//         for (var j in i) {
//             resultado = ;
//         }        
//     }
//     return resultado;
// }

// Object.keys()
console.log('Objetc.keys()');
console.log(Object.keys(obj));
console.log(keys(obj));
console.log();

function keys(objeto) {
    var resultado = [];
    j = 0;
    for (var i in objeto) {
        //objeto.hasOwnProperty se usa para filtrar las propiedades del objeto
        if (objeto.hasOwnProperty(i)) {
            resultado[j] = i;
            j++;
        }
    }
    return resultado;
}
  
// Object.values()
console.log('Objetc.values()');
console.log(Object.values(obj));
console.log(values(obj));
console.log();

function values(objeto) {
    var resultado = [];
    j = 0;
    for (var i in objeto) {
        //objeto.hasOwnProperty se usa para filtrar las propiedades del objeto
        if (objeto.hasOwnProperty(i)) {
            resultado[j] = objeto[i];
            j++;
        }
    }
    return resultado;
}