// 1. Write a function `eureka` that takes an array and a string as an argument and returns
//   *true* if the string is in the array. *false* if it is not in.

function eureka(array,valor){
 for(let f of array){
     if(f==valor){
         return true;
     }
 }
 return false;
}

console.log(eureka([1, 2, 3], "2"));

// 2. Write a function `laFilaDeLasTortillas` that takes 2 array as an argument and returns an
//   *Array* with all the elements in the 2 arrays.
//   **Hint:** the original arrays must not be modified

function laFilaDeLasTortillas(arr1,arr2){
    let n = [];
    for(let i of arr1){
        n[n.length] =i
    }
    for(let j of arr2){
        n[n.length] =j
    }
    return n
}

 console.log(laFilaDeLasTortillas([1, 2, 3], [4, 5, 6]));


// 3. Write a function `ontas` that takes an array and a string as arguments and returns the
//   *first* index of the element if the element was found, if not then return -1
function ontas(arr,valor){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==valor){
            return i;
        }
    }
    return -1;
}

 console.log(ontas([1, 3, 2, 3], '3'));



// 3. Write a function `ontasAhora` that takes an array and a string as arguments and returns the
//   *last* index of the element if the element was found, if not then return -1
function ontasAhora(arr,valor){
    let pos = -1
    for(let i=0;i<arr.length;i++){
        if(arr[i]==valor)pos= i;
    }
    return pos;
}

 console.log(ontasAhora([1, 3, 2, 3], '3'));


// 4. Write a function `joinMe` that takes an array and a string as an argument and returns a
//   string with all the elements of the array separated by the string
function joinMe(arr,str){
    let res="";
    for(let i=0;i<arr.length;i++){
        res+=i
        if(i!=arr.length-1){
            res+=str;
        }
    }
    return res;
}

 console.log(joinMe([1, 3, 2, 3], '-'));



// 5. Write a function `slicesOfBread` that takes an array and 2 numbers as an argument and returns
//   an array with the elements between the 2 numbers
function slicesOfBread(arr,n1,n2){
 let n = [];
 for(let i=n1;i<n2;i++){
     n[n.length] = arr[i];
 }
 return n;
}

console.log(slicesOfBread([1, 3, 2, 3], 1, 3));  // [3, 2]