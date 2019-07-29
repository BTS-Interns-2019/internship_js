// 1. Write a function `eureka` that takes an array and a string as an argument and returns
//   *true* if the string is in the array. *false* if it is not in.
function eureka(arr, str) {
  for (let elem of arr) {
    if (elem == str) {
      return true;
    }
  }
  return false;
}

console.log(eureka([1, 2, 3], "2"));

// 2. Write a function `laFilaDeLasTortillas` that takes 2 array as an argument and returns an
//   *Array* with all the elements in the 2 arrays.
//   **Hint:** the original arrays must not be modified
function laFilaDeLasTortillas(...arr) {
  let resultArr = [];
  for (let subArr of arr) {
    for (let elem of subArr) {
      if (typeof elem !== 'undefined' && elem !== null) {
        resultArr[resultArr.length] = elem;
      }
    }
  }
  return resultArr;
}

console.log(laFilaDeLasTortillas([1, 2, 3, , null], [4, 5, 6]));

// 3. Write a function `ontas` that takes an array and a string as arguments and returns the
//   *first* index of the element if the element was found, if not then return -1
function ontas(arr, str) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == str) {
      return i;
    }
  }
  return -1;
}

console.log(ontas([1, 3, 2, 3], '3'));

// 3. Write a function `ontasAhora` that takes an array and a string as arguments and returns the
//   *last* index of the element if the element was found, if not then return -1
function ontasAhora(arr, str) {
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] == str) {
      return i;
    }
  }
  return -1;
}

console.log(ontasAhora([1, 3, 2, 3], '3'));

// 4. Write a function `joinMe` that takes an array and a string as an argument and returns a
//   string with all the elements of the array separated by the string
function joinMe(arr, str) {
  let resultStr = '';
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'undefined' && arr[i] !== null) {
      resultStr += (i + 1) == arr.length ? arr[i] : `${arr[i]}${str}`;
    }
  }
  return resultStr;
}

console.log(joinMe([1, 3, null, 2, , 3], '-'));

// 5. Write a function `slicesOfBread` that takes an array and 2 numbers as an argument and returns
//   an array with the elements between the 2 numbers
function slicesOfBread(arr, num1, num2) {
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i > ontas(arr, num1) && i < ontasAhora(arr, num2) && (typeof arr[i] !== 'undefined' && arr[i] !== null)) {
      resultArr[resultArr.length] = arr[i];
    }
  }
  return resultArr;
}

console.log(slicesOfBread([1, 3, 2, null, 3], 1, 3));  // [3, 2]

