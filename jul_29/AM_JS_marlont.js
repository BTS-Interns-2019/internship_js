// fileName "AM_JS_<yourName>.js"

// 1. Write a function `eureka` that takes an array and a string as an argument and returns
//   *true* if the string is in the array. *false* if it is not in.

// eureka([1, 2, 3], "2");

function eureka(array, str){
  var result = false;
  if(typeof str != 'undefined'){
    for(var i=0; i<array.length; i++){
        if(str == array[i]){
          result = true;
        }
      }
  } else {
      console.error('ERROR: The second argument is undefined');
  }
  return result;
}

// 2. Write a function `laFilaDeLasTortillas` that takes 2 array as an argument and returns an
//   *Array* with all the elements in the 2 arrays.
//   **Hint:** the original arrays must not be modified

// laFilaDeLasTortillas([1, 2, 3], [4, 5, 6]);

function laFilaDeLasTortillas(array1, array2){
  var result = [];
  if(typeof array1 != 'undefined' && typeof array2 != 'undefined'){
    for(var i=0; i<array1.length; i++){
        if(typeof array1[i] != 'undefined'){
          result[result.length] = array1[i];
        }
      }
    
      for(var i=0; i<array2.length; i++){
        if(typeof array2[i] != 'undefined'){
          result[result.length] = array2[i];
        }
      }
  } else {
      console.error("ERROR: Second Argument or both arguments are undefined");
  }

  return result;
}

// 3. Write a function `ontas` that takes an array and a string as arguments and returns the
//   *first* index of the element if the element was found, if not then return -1

// ontas([1, 3, 2, 3], '3');

function ontas(array, str){
  var result = -1;
  if(typeof str != 'undefined'){
    for(var i=0; i<array.length; i++){
      if(str == array[i]){
        result = i;
        return result;
      }
    }
  } else {
      console.error("ERROR: str is undefined");
  }
  
  return result;
}

// 3. Write a function `ontasAhora` that takes an array and a string as arguments and returns the
//   *last* index of the element if the element was found, if not then return -1

// ontasAhora([1, 3, 2, 3], '3');

function ontasAhora(array, str){
    var result = -1;
    if(typeof str != 'undefined'){
      for(var i=array.length-1; i>=0; i--){
        if(str == array[i]){
          result = i;
          return result;
        }
      }
    } else {
      console.error("ERROR: str is undefined");
    }
    return result;
  }

// 4. Write a function `joinMe` that takes an array and a string as an argument and returns a
//   string with all the elements of the array separated by the string

// joinMe([1, 3, 2, 3], '-');

function joinMe(array, str){
  var result = "";

  for(var i=0; i<array.length; i++){
    if(typeof array[i] != 'undefined'){
      result += array[i];

      if(i < array.length-1){
        result += str;
      }
    }
  }

  return result;
}

// 5. Write a function `slicesOfBread` that takes an array and 2 numbers as an argument and returns
//   an array with the elements between the 2 numbers

// slicesOfBread([1, 3, 2, 3], 1, 3);  // [3, 2]

function slicesOfBread(array, start, end){
  if(typeof start == 'undefined'){
    console.error("ERROR: start is undefined");
  }

  if(typeof end == 'undefined'){
    console.error("ERROR: end is undefined");
  }

  if(end > array.length){
    end = array.length;
  }
  var result = [];

  for(var i=start; i<end; i++){
    if(typeof array[i] != 'undefined'){
      result[result.length] = array[i];
    }
  }

  return result;
}
