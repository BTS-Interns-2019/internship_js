//FOREACH
console.log("*****Funcion forEach*****")
function forEach(funcion, arr) {
    for (i = 0; i < arr.length; i++) {
        cv = arr[i];
        index = i;
        funcion(cv, index, arr);
    }
}
   
//console.log(forEach(funcion, [1,2,3,4,5]))

// function funcion(cv, index, arr) {
//     return cv + 1;
// }

// console.log("*****Método forEach*****")
// var arr = [1,2,3,4,5]
// console.log(arr.forEach(function(n) {
//     return n + 1;
// }))


//MAP
console.log("*****Funcion map*****")
function map(arr, funcion) {
    var arr2 = [];
    for (i = 0; i < arr.length; i++) {
        cv = arr[i];
        index = i;
     arr2.push(funcion(cv, index, arr));
    }
    return arr2;
  }

// console.log(map([1,2,3,4,5], function(n, index, arr) {
//     return n + 1;
// })); 

// console.log("*****Método map*****")
// var arr = [1,2,3,4,5]
// var funcion2 = function(n) {
//     return n + 1;
//   }
// console.log(arr.map(funcion2))


//FILTER
console.log("*****Funcion filter*****")
function filter(arr, funcion) {
var arr2 = [];
    for (i = 0; i < arr.length; i++) {
        cv = arr[i];
        index = i;
     if (funcion(cv, index, arr)) {
        arr2.push(cv)         
     };
    }
    return arr2;
  }

console.log(filter([-1, 0, 1, 2, 3, 4, 5, 6, 7], function(n) {
    return n > 3;
})); 

console.log("*****Método filter*****")
  var arr = [-1, 0, 1, 2, 3, 4, 5, 6, 7]
  var funcion3 = function(n) {
    return n > 3;
  }
  console.log(arr.filter(funcion3))

  console.log("*****Función reduce*****")
  //REDUCE

function reduce(arr, funcion) {

    for (i = 0; i < arr.length; i++) {
        cv = arr[i];
        index = i;
        av = 0;
        v = 0;
     if (funcion(av, cv, index, v)) {
        return cv         
     };
    }
    return cv;
  }

console.log(reduce([0, 1, 2, 3, 4], function(av, cv, index, v) {
    return cv + av;
})); 



  console.log([0,1,2,3,4].reduce(function(valorAnterior, valorActual, indice, v){
    return valorAnterior + valorActual;
  }));


  
module.exports={
    forEach,
    map,
    filter,
    reduce,
    // reduceRight
  };