//# Array Iterator Methods

//* file name `am_iterators_<name>.js` for function definitions
//* create your own iterator fuctions for arrays
  //forEach
 
var array1 = [1, 2, 3];


function ForEach(arr, callback) {
    for(let i=0; i<arr.length; i++){
        callback(arr[i])
    }

}

console.log(ForEach([1,2,3,4],function(e){
    return e*1;

}))
// map

function map(array1, func) {
    var newArray = [];
    for (var i = 0; i < array1.length; i++) {
      newArray.push(func(array1[i]));
    }
    return newArray;
  }

console.log(map([1,2,3,4],function(e){
    return e*1;
}))



//filter
function filter(array, callback){
    let newArray=[];

    for (let i=0; i<array.length; i++){
        var allNumbers=array[i];
        if(allNumbers>10){
            newArray.push(callback(array[i]))
        }
    }
    return newArray;
}

let array = [1,5,23,4,12,45]





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
