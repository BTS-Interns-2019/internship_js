
// 1. Write a function `eureka` that takes an array and a string as an argument and returns
//   *true* if the string is in the array. *false* if it is not in.

// eureka([1, 2, 3], "2");

function eureka (arr, str) {
    for(i = 0 ; i <= arr.length ; i++){
        if(arr[i] == str){
            return true;
        }
    }
    return false;
}

console.log("eureka: " + eureka([1,2,3], 2));



// 2. Write a function `laFilaDeLasTortillas` that takes 2 array as an argument and returns an
//   *Array* with all the elements in the 2 arrays.
//   **Hint:** the original arrays must not be modified

// laFilaDeLasTortillas([1, 2, 3], [4, 5, 6]);


function laFilaDeLasTortillas(arr1, arr2){
    t = arr1.length + arr2.length;
    let resultado; 
    resultado = arr1;
    for(i = arr1.length, j = 0 ; i < t ; i++, j++){
        resultado[i] = arr2[j];        
    }
    return resultado;
}

laFilaDeLasTortillas("laFilaDeLasTortillas: " + [1,2,3], [4,5,6]);


// 3. Write a function `ontas` that takes an array and a string as arguments and returns the
//   *first* index of the element if the element was found, if not then return -1


// ontas([1, 3, 2, 3], '3');

function ontas(arr, buscar){
    for(i = 0 ; i < arr.length ; i++){
        if(arr[i] == buscar){
            return i;
        }
    }
    return -1
}
console.log("ontas: " + ontas([1,2,3], 3));



// 3. Write a function `ontasAhora` that takes an array and a string as arguments and returns the
//   *last* index of the element if the element was found, if not then return -1


// ontasAhora([1, 3, 2, 3], '3');


function ontasAhora(arr, buscar){
    let res = -1;
    for(i = 0 ; i < arr.length ; i++){
        if(arr[i] == buscar){
            res = i;
        }
    }
    return res;
}
console.log("ontas2: " + ontasAhora([1,2,3,1], 1));


// 4. Write a function `joinMe` that takes an array and a string as an argument and returns a
//   string with all the elements of the array separated by the string


// joinMe([1, 3, 2, 3], '-');

function joinMe(arr, str){
    res = "";
    for(i = 0 ; i < arr.length; i++){
        res += arr[i] + str;
    }
    return res;
}

console.log("joinMe: " + joinMe([1,2,3],"-"));



// 5. Write a function `slicesOfBread` that takes an array and 2 numbers as an argument and returns
//   an array with the elements between the 2 numbers


// slicesOfBread([1, 3, 2, 3], 1, 3);  // [3, 2]


function sliceOfBread(arr, n1, n2){

    res = [];

    for(i = 0 ; i < arr.length ; i++){ //For de n1
        if(arr[i] == n1){
            var s1 = i + 1;
        }
    }

    for(i = 0; i < arr.length ; i++){ //For de n2
        if(arr[i] == n2){
            var s2 = i;
        }
    }

    for(i = s1 , j = 0 ; i < s2 ; i++ , j++){
        res[j] = arr[i];
    }
    return res;
}

console.log("sliceOfBread: " + sliceOfBread([1,3,2,3], 1, 3));
