// fileName "AM_JS_<yourName>.js"

// 1. Write a function `eureka` that takes an array and a string as an argument and returns
//   *true* if the string is in the array. *false* if it is not in.

// eureka([1, 2, 3], "2");

function eureka(array, str){
  var result = false;

  for(var i=0; i<array.length; i++){
    if(str == array[i]){
      result = true;
    }
  }

  return result;
}

// 2. Write a function `laFilaDeLasTortillas` that takes 2 array as an argument and returns an
//   *Array* with all the elements in the 2 arrays.
//   **Hint:** the original arrays must not be modified

// laFilaDeLasTortillas([1, 2, 3], [4, 5, 6]);

function laFilaDeLasTortillas(array1, array2){
  var longitudTotal = array1.length + array2.length;
  var result = new Array(longitudTotal);
  var indiceActual = 0;

  for(var i=0; i<array1.length; i++){
    result[indiceActual] = array1[i];
    indiceActual ++;
  }

  for(var i=0; i<array2.length; i++){
    result[indiceActual] = array2[i];
    indiceActual ++;
  }

  return result;
}

// 3. Write a function `ontas` that takes an array and a string as arguments and returns the
//   *first* index of the element if the element was found, if not then return -1

// ontas([1, 3, 2, 3], '3');

function ontas(array, str){
  var result = -1;
  for(var i=0; i<array.length; i++){
    if(str == array[i]){
      result = i;
      return result;
    }
  }
  return result;
}

// 3. Write a function `ontasAhora` that takes an array and a string as arguments and returns the
//   *last* index of the element if the element was found, if not then return -1

// ontasAhora([1, 3, 2, 3], '3');

function ontasAhora(array, str){
    var result = -1;
    for(var i=array.length-1; i>=0; i--){
      if(str == array[i]){
        result = i;
        return result;
      }
    }
    return result;
  }

// 4. Write a function `joinMe` that takes an array and a string as an argument and returns a
//   string with all the elements of the array separated by the string

// joinMe([1, 3, 2, 3], '-');

function joinMe(array, str){
  var result = "";

  for(var i=0; i<array.length; i++){
    result += array[i];

    if(i < array.length-1){
      result += str;
    }
  }

  return result;
}

// 5. Write a function `slicesOfBread` that takes an array and 2 numbers as an argument and returns
//   an array with the elements between the 2 numbers

// slicesOfBread([1, 3, 2, 3], 1, 3);  // [3, 2]

function slicesOfBread(array, start, end){
  if(end > array.length){
    end = array.length;
  }
  var result = new Array(end-start);
  var indiceActual = 0;

  for(var i=start; i<end; i++){
    result[indiceActual] = array[i];
    indiceActual++;
  }

  return result;
}
