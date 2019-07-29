// fileName "AM_JS_<yourName>.js"

// 1. Write a function `eureka` that takes an array and a string as an argument and returns
//   *true* if the string is in the array. *false* if it is not in.

// eureka([1, 2, 3], "2");

const eurekaReFac = (arr, str) => arr.includes(str) || arr.includes(+str) ? true : false;

// console.log(eurekaReFac([1,2,3],"2"))
// console.log(eurekaReFac(["a",2,3,4,"g","h"], 4))

function eureka(arr, str){
    for(let i of arr){
        if(i == str){
            return true
        }    
    }
    return false
};
console.log(eureka([4,5,6],"4"))
console.log(eureka(["a",2,3,4,"g","h"], "4"))

// 2. Write a function `laFilaDeLasTortillas` that takes 2 array as an argument and returns an
//   *Array* with all the elements in the 2 arrays.
//   **Hint:** the original arrays must not be modified

// laFilaDeLasTortillas([1, 2, 3], [4, 5, 6]);
const laFilaDeLasTortillasReFac = (arr1, arr2) => arr1.concat(arr2);

function laFilaDeLasTortillas(arr1, arr2){
    const concatArr = []
    for(let i = 0; i < arr1.length; i++){
        concatArr[i] = arr1[i] 
        concatArr[arr1.length+i] = arr2[i]
    }    
        return concatArr 
}
console.log(laFilaDeLasTortillas([1,2,3], [4,5,6]))


// 3. Write a function `ontas` that takes an array and a string as arguments and returns the
//   *first* index of the element if the element was found, if not then return -1


// ontas([1, 3, 2, 3], '3');

function ontas(arr, str){
    for(let i in arr){
        if(arr[i] == str){
            return i
        }
    }
};
console.log(ontas([1,3,2,3], '3'))



// 3. Write a function `ontasAhora` that takes an array and a string as arguments and returns the
//   *last* index of the element if the element was found, if not then return -1


// ontasAhora([1, 3, 2, 3], '3');
function ontasAhora(arr, str){
    let lastIndex = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == str){
            lastIndex[lastIndex.length] = +i
        } 
        else if(i == arr.length-1){
            break
        }
    } return lastIndex
}
console.log(ontasAhora([1,3,2,3], '3'))

// 4. Write a function `joinMe` that takes an array and a string as an argument and returns a
//   string with all the elements of the array separated by the string


// joinMe([1, 3, 2, 3], '-');

function joinMe(arr, str){
    let joined = ""
    for(let i in arr){
        joined += arr[i]
        if(i == arr.length-1){
            break
        }
        joined += str
    }
    return joined
}
console.log(joinMe([1,3,2,3], '-'))


// 5. Write a function `slicesOfBread` that takes an array and 2 numbers as an argument and returns
//   an array with the elements between the 2 numbers


// slicesOfBread([1, 3, 2, 3], 1, 3);  // [3, 2]

function slicesOfBread(arr, num1, num2){
    const slice = []
    for(let i in arr){
        console.log(slice)
        if(i >= num1){
            slice[slice.length] = arr[i]
        }
        else if(i+1 == num2){
            break
        }
    } 
};
console.log(slicesOfBread([1,3,2,3], 1, 3))

