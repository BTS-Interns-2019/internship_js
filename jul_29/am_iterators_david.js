//# Array Iterator Methods

//   * reduce
//   * reduceRight

// forEach()
array = [1,2,3];

console.log(forEach(fun, array));

function forEach(f, array) {
    for (i=0; i < array.length; i++) {
        cV = array[i];
        index = i;
        f(cV, index, array);
    }
}

function fun(cV, index, array) {
    return console.log(" array["+ index + "] = " + cV + " ", array); 
}

// map()

array = [1,2,3];

console.log(map(cuadrado, array));

function map(f, array) {
    result = [];
    for (i=0; i < array.length; i++) {
        cV = array[i];
        index = i;
        result[i] = f(cV, index, array);
    }
    return result;
}

function cuadrado(cV, index, array) {
    return array[index]*2; 
}

// filter()

array = [1,2,3];

console.log(filter(funfilter, array));

function filter(f, array) {
    result = [];
    j = 0;
    for (i=0; i < array.length; i++) {
        cV = array[i];
        index = i;
        if (f(cV, index, array)) {
          result[j] = cV;
          j++;
        }
    }
    return result;
}

function funfilter(cV, index, array) {
    return array[index]>10; 
}

// reduce()

array = [1];
iV = false;

console.log(reduce(funcion, array, iV));

function reduce(f, array) {
    result = array[0];
    if (iV) {
        result = iV;
    }
    if (iV == false && array == []) {
        result = TypeError;
    }
    for (i=0; i < array.length; i++) {
        cV = array[i];
        index = i;
        result += f(cV, index, array);    
    }
    return result;
}

function funcion(cV, index, array) {
    return array[index]*2; 
}

// ## TDD

// * you file `am_iterators_<name>.js` must define all neded functions and return them as an object
// ```js
// //.js
// function forEach(){}

// module.exports={
//   forEach,
//   //...
// };
// ```

// * create a tests file with the same name but ending in .test.js aka `am_iterators_<name>.tests.js`
// * your tests file must require the function definitions, use this way
// ```js
// //.test.js
// const {
//   forEach,
//   //...
// } = require('./am_iterators_<name>.js');
// ```
// * write at least 3 different test cases ussing different value types for each fuction and name them properly
