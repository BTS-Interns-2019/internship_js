// 1. Write a function `eureka` that takes an array and a string as an argument and returns
//   *true* if the string is in the array. *false* if it is not in.
// eureka([1, 2, 3], "2");

array = [1,2,3];
string = "2";
console.log(eureka(array,string));

function eureka(array, string) {
    result = false;
    for (i = 0; i < array.length; i++) {
        if (string == array[i]) {
            result = true;
        } 
    }
    return "1 "+result;
}

// 2. Write a function `laFilaDeLasTortillas` that takes 2 array as an argument and returns an
//   *Array* with all the elements in the 2 arrays.
//   **Hint:** the original arrays must not be modified
// laFilaDeLasTortillas([1, 2, 3], [4, 5, 6]);

array1 = [1,2,3];
array2 = [4,5,6];
console.log(laFilaDeLasTortillas(array1,array2));

function laFilaDeLasTortillas(array1, array2) {
    array = array1;
    n = array1.length;
    m = array1.length + array2.length -1;
    j = 0;
    for (i = n; i <= m; i++) {
        array[i] = array2[j];
        j++;
    }
    return array;
}

// 3. Write a function `ontas` that takes an array and a string as arguments and returns the
//   *first* index of the element if the element was found, if not then return -1
// ontas([1, 3, 2, 3], '3');

array = [1,3,2,3];
string = "3";
console.log(ontas(array,string));

function ontas(array, string) {
    result = -1;
    for (i = 0; i < array.length; i++) {
        if (string == array[i]) {
            result = i;
            break;
        } 
    }
    return result;
}

// 3. Write a function `ontasAhora` that takes an array and a string as arguments and returns the
//   *last* index of the element if the element was found, if not then return -1
// ontasAhora([1, 3, 2, 3], '3');

array = [1,3,2,3];
string = "3";
console.log(ontasAhora(array,string));

function ontasAhora(array, string) {
    result = -1;
    for (i = array.length-1; i >= 0; i--) {
        if (string == array[i]) {
            result = i;
            break;
        } 
    }
    return result;
}

// 4. Write a function `joinMe` that takes an array and a string as an argument and returns a
//   string with all the elements of the array separated by the string
// joinMe([1, 3, 2, 3], '-');

array = [1,3,2,3];
string = "-";
console.log(joinMe(array,string));

function joinMe(array, string) {
    str = "";     
    for (i = 0; i < array.length-1; i++) {
        str += array[i]+string; 
    }
    return str+array[array.length-1];
}

// 5. Write a function `slicesOfBread` that takes an array and 2 numbers as an argument and returns
//   an array with the elements between the 2 numbers
// slicesOfBread([1, 3, 2, 3], 1, 3);  // [3, 2] // >1, <=3

array = [1,3,2,3];
console.log(slicesOfBread(array,1,3));

function slicesOfBread(array,n,m) {
    result = [];
    j = 0;
    for (i = n; i <= m-1; i++) {
        result[j] = array[i];
        j++;   
    }
    return result;
}