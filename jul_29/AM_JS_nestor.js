// fileName "AM_JS_<yourName>.js"

// 1. Write a function `eureka` that takes an array and a string as an argument and returns
//   *true* if the string is in the array. *false* if it is not in.
function eureka(array, num){
    for (let i = 0; i < array.length; i++) {
        if(array[i] == num){
            return true;
        }
    }
    return false      
}
console.log(eureka([1, 2, 3], "1"));

// 2. Write a function `laFilaDeLasTortillas` that takes 2 array as an argument and returns an
//   *Array* with all the elements in the 2 arrays.
//   **Hint:** the original arrays must not be modified
function laFilaDeLasTortillas(array, array1 ){
    var arr = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] == undefined){
            continue;
        }else{
            arr[arr.length] = array[i];
        }
    }
    for(let i = 0; i < array.length; i++){
        if(array1[i] == undefined){
            continue;
        }else {
            arr[arr.length] = array1[i];
        }
    }
    return arr;
}
console.log(laFilaDeLasTortillas([1, , 2, 3], [4, 5, 6]));

// 3. Write a function `ontas` that takes an array and a string as arguments and returns the
//   *first* index of the element if the element was found, if not then return -1
function ontas(array, pos){
    for(let i = 0; i < array.length; i++){
        if( array[i] == pos ){
            return i;
        }
    }
    return -1;
}
console.log(ontas([1, 3, 2, 3], '3'));

// 3. Write a function `ontasAhora` that takes an array and a string as arguments and returns the
//   *last* index of the element if the element was found, if not then return -1
function ontasAhora(array, pos){
    for(let i = array.length; i > 0; i--){
        if( array[i] == pos ){
            return i;
        }
    }
    return -1;
}
console.log(ontasAhora([1, 3, 2, 3], '3'));

// 4. Write a function `joinMe` that takes an array and a string as an argument and returns a
//   string with all the elements of the array separated by the string
function joinMe(array, separador){
    var res = "";
    for(let i = 0; i < array.length; i++){
        if(array[i] == undefined){
            continue;
        }
        if(i == array.length-1){
            res += array[i]
        }else {
            res += array[i] + separador;
        }
    }
    return res;
}
console.log(joinMe([1, 3, 2, 3], '-'));

// 5. Write a function `slicesOfBread` that takes an array and 2 numbers as an argument and returns
//   an array with the elements between the 2 numbers
function slicesOfBread(array, inicio, final){
    var res = [];
    for(let i = 0, x = 0; i < array.length; i++){
        if(i >= inicio && i < final){
            res[x] = array[i];
            x++;
        }
    }
    return res;
    
}
console.log(slicesOfBread([1, 3, 2, 3], 1, 3));