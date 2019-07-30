function forEach(funcion, arreglo){
    for (let i = 0; i < arreglo.length; i++) {
        void funcion(arreglo[i], i, arreglo);
    }
}

function map(funcion, arreglo){
    arr=[];
    for (let i = 0; i < arreglo.length; i++) {
        arr.push(funcion(arreglo[i], i, arreglo));
    }
    return arr;
}

function filter(callBack, arreglo){
    arr=[];
    for (let i = 0; i < arreglo.length; i++) {
        let aux=callBack(arreglo[i], i, arreglo);
        if (aux) arr.push(arreglo[i]);
    }
    return arr;
}
let arr=[2,2,3,4,5,6];
console.log(filter(x => x>3, arr));

function reduce(callBack, arreglo, inicial){
    if (typeof(inicial)=='undefined') inicial=arreglo[0];
    for (let i = 0; i < arreglo.length; i++) {
        inicial=callBack(inicial, arreglo[i], i, arreglo);
    }
}
function reduceRight(callBack, arreglo, inicial){
    if (typeof(inicial)=='undefined') inicial=arreglo[arreglo.length-1];
    for (let i = arreglo.length-1; i>= arreglo.length; i--) {
        inicial=callBack(inicial, arreglo[i], i, arreglo);
    }
}
// function callBack(cv, i, a){
//     console.log(cv, i, a);
//     return cv;
// }
// function callBackFilter(cv){
//     return cv;
// }

// prueba = [32, 33, 19, 40];
//console.log(forEach(callBack prueba));
//console.log(map(callBack, prueba));
// console.log(filter(callBackFilter, [0 ,"f",4, "sd",'']));
// arr=[2,2,3,"-",4,5];
// salida=arr.reduce((acumulador, cv, i, a)=> acumulador+cv);
// console.log(salida);
// salida=arr.reduce((acumulador, cv, i, a)=> acumulador+cv,1);
// console.log(salida);

module.exports={
    forEach,
    map,
    filter,
    reduce,
    reduceRight
}