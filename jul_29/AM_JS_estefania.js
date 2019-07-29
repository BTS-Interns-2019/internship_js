

// 1. Write a function `eureka` that takes an array and a string as an argument and returns
//   *true* if the string is in the array. *false* if it is not in.

function eureka(arr, str){
    let result = false
    for (i=0; i<arr.length; i++) {
        if (arr[i] == str){
        result = true
        }    
    }
    return result
}
console.log(eureka([1, 2, 3], "2"))

// // 2. Write a function `laFilaDeLasTortillas` that takes 2 array as an argument and returns an
// //   *Array* with all the elements in the 2 arrays.
// //   **Hint:** the original arrays must not be modified
function laFilaDeLasTortillas(arr1, arr2) {
        return [...arr1, ...arr2];
      }
console.log(laFilaDeLasTortillas([1, 2, 3], [4, 5, 6]));


// 3. Write a function `ontas` that takes an array and a string as arguments and returns the
//   *first* index of the element if the element was found, if not then return -1
function ontas(arr, str) { 
    let result = -1
    for (i=0; i < arr.length; i++) {
        if (arr[i] == str){
          result = i
          break
        }    
    }
    return result
}
console.log(ontas([1, 3, 2, 3], '3'));


// 3. Write a function `ontasAhora` that takes an array and a string as arguments and returns the
//   *last* index of the element if the element was found, if not then return -1

function ontasAhora(arr, str) { 
    let result = -1
    for (i = arr.length; i > 0; i--) {
        if (arr[i] == str){
            result = i
            break
        }    
    }
    return result
}
console.log(ontasAhora([1, 3, 2, 3], '3'));


// 4. Write a function `joinMe` that takes an array and a string as an argument and returns a
//   string with all the elements of the array separated by the string

function joinMe(arr, str) {
    arr2= ''
    for(i=0; i< arr.length; i++){
       arr2 += i
       if(i!=arr.length-1){
        arr2+=str;
        }
    }
    return arr2
}

console.log(joinMe([1, 3, 2, 3], '-'));


// 5. Write a function `slicesOfBread` that takes an array and 2 numbers as an argument and returns
//   an array with the elements between the 2 numbers
function slicesOfBread(arr, number1, number2) {  
    let arr2 = [];
    for(i = number1;i < number2; i++){
        arr2[arr2.length] = arr[i];
    }
    return arr2;
}
console.log(slicesOfBread([1, 3, 2, 3], 1, 3));  // [3, 2]

