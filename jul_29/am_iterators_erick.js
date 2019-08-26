/* # Array Iterator Methods

* file name `am_iterators_<name>.js` for function definitions
* create your own iterator fuctions for arrays
  * forEach
  * map
  * filter
  * reduce
  * reduceRight
* you cannot use the array method that you are trying to replicate
* `reduce` cannot use `reduceRigth` and viceversa

## TDD

* you file `am_iterators_<name>.js` must define all neded functions and return them as an object
```js
//.js
function forEach(){}

module.exports={
  forEach,
  //...
};
```

* create a tests file with the same name but ending in .test.js aka `am_iterators_<name>.tests.js`
* your tests file must require the function definitions, use this way
```js
//.test.js
const {
  forEach,
  //...
} = require('./am_iterators_<name>.js');
```
* write at least 3 different test cases ussing different value types for each fuction and name them properly
*/

function forEach(arr, callBack){
  for(let i in arr){
    callBack(arr[i])
  }
}
// console.log(forEach((val, ind, array) => {val = array.length}, [1,2,3,4,5]))

function map(callBack, arr){
  let result = []
  for(let i in arr){
    result.push(callBack(arr[i],i,arr))
  }
  return result
}
// console.log(map((val, ind, array)=> val = array.length, [1,2,3,4,5]))
// console.log(map((val, ind, array)=> val.toUpperCase(), ["h","o","l","a"]))
// console.log(map((val, ind, array)=> val = "A", [1,2,3,4,5]))


function filter(callBack, arr){
  let result = []
  for(let i of arr){
    if(callBack(i)){
      result.push(i)
    }
  }
  return result
}
// console.log(filter((val, ind) => {return val % 2 !== 0}, [1,2,3,4,5,6]))
// console.log(filter((val, ind) => {return val % 2 === 0}, [1,2,3,4,5,6]))
// console.log(filter((val, ind) => {return val > 3}, [1,2,3,4,5,6]))

function reduce(callBack, arr, initialVal){
    if(initialVal !== 0){
    initialVal = arr[0]
    }
    for(let i = 0; i < arr.length; i++){
      initialVal = callBack(initialVal, arr[i])
    }
    return initialVal
}
// console.log(reduce((a,b) => a + b, [1, 2, 3], 0))
// console.log(reduce((a,b) => a - b, [1, 2, 3], 15))
// console.log(reduce((a,b) => (a ** b)/2, [1, 2]))

function reduceRight(callBack, arr, initialVal){
    if(initialVal !== 0){
      initialVal = arr[arr.length-1]
    }
    for(let i = arr.length-1; i >= 0; i--){
      initialVal = callBack(initialVal, arr[i])
    }
    return initialVal
}
console.log(reduceRight((a,b) => a + b, [1, 2, 3]))
console.log(reduceRight((a,b) => a + b, [72, "a", 85]))
console.log(reduceRight((a,b) => a * b, [1,2,3,4,5]))

module.exports = {
  forEach,
  map,
  filter,
  reduce,
  reduceRight
};

















