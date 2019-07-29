// fileName "AM_JS_<yourName>.js"

// 1. Write a function `eureka` that takes an array and a string as an argument and returns
//   *true* if the string is in the array. *false* if it is not in.

function eureka(arr, string) {
    var b=false;
    for (var i = 0; i < arr.length; i++) {
    if(string==arr[i]){
    b = true;
    break;
    }
    }
    return b;
   }
   
    
   console.log(eureka([1,2,3],"1"));

// 2. Write a function `laFilaDeLasTortillas` that takes 2 array as an argument and returns an
//   *Array* with all the elements in the 2 arrays.
//   **Hint:** the original arrays must not be modified

function laFilaDeLasTortillas(array1, array2){
let newArray=[];
for(let i=0; i<array1.length; i++){
    newArray=array1+array2;
    console.log(newArray)

}

laFilaDeLasTortillas([1, 2, 3], [4, 5, 6]);


// 3. Write a function `ontas` that takes an array and a string as arguments and returns the
//   *first* index of the element if the element was found, if not then return -1
function ontas(arr, string) {
    var b=-1;
    for (var i = 0; i < arr.length; i++) {
    if(string==arr[i]){
    b =[i];
    break;
    }
    }
    return b;
   }
   
    
   
    ontas([1, 3, 2, 3], '2');



// 3. Write a function `ontasAhora` that takes an array and a string as arguments and returns the
//   *last* index of the element if the element was found, if not then return -1


function ontasAhora(arr, string) {
    var ultimo=[arr.length -1]
    for(let i=0; i<arr.length; i++){ 
      if(string==arr[i]){
        return ultimo;
        }else{ 
    }
 }
    return -1;

}
   ontasAhora([1, 3, 2, 4], '6')

// 4. Write a function `joinMe` that takes an array and a string as an argument and returns a
//   string with all the elements of the array separated by the string


// joinMe([1, 3, 2, 3], '-');



// 5. Write a function `slicesOfBread` that takes an array and 2 numbers as an argument and returns
//   an array with the elements between the 2 numbers


// slicesOfBread([1, 3, 2, 3], 1, 3);  // [3, 2]

