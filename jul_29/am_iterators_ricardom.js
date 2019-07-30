    
    // forEach

function forEach(callback, arr){
    for(i = 0 ; i < arr.length ; i++){
         callback(arr[i], i, arr);
    }
}

function funForEach(element, index, arreglo){   //Funcion prueba para forEach
    console.log(index + ": " + element + " " +arreglo);
    return index + ": " + element + " " +arreglo;
   
}

//forEach(funForEach, [1,2,3]);   //llamada a funcion forEach

    //map

function map(callback, arr){
    res = [];
    for(i = 0 ; i < arr.length ; i++){
        res.push(callback(arr[i], i, arr))
    }
    return res;
}

function funMap(element, index, arr){ //Funcion de prueba
    return element * 2; 
}

//console.log(map(funMap, [1, 2, 3])); //llamada a funcion map

    // filter
function filter(callback, arr){
    res = [];
    let j = 0;
    for(i = 0 ; i < arr.length ; i++){
        j = callback(arr[i], i, arr);
        if( j == true) res.push(arr[i]);
    }
    return res;
}

function funFilter(element, index, arr) {   //Ejemplo duncion para filter
    if(element < 10 )return true;
    else return false;
    
}

// console.log(filter(funFilter, [1,2,10,11,12])); //llamamos la funcion filter

// function reduce(callback, array, vI){
//     if(vI == null && vI == undefined ){

//     }
// }









module.exports={
    forEach,map, filter
  };