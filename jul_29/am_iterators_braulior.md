# Array Iterator Methods

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
