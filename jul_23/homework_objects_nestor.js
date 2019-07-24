// > july 23

// #Objects

// Create a file `homework_<name>.js` in your own branch in this folder

// The file must contain your own function that mimics ( the same input, results in the same output comparing with the original method )
// the folowing methods without ussing that method

// ```js
// Object.assign()
// Object.defineProperties()
// Object.entries()
// Object.freeze() // create new freezed object
// Object.seal() // create new sealed object
// Object.fromEntries()
// Object.getOwnPropertiesDescriptors()
// Object.isFrozen()
// Object.isSealed()
// Object.keys()
// Object.values()
// ```

// example:
// ```js
// Object.assign
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
function assign(target, source){
  /* your code here */
  for (const key in source) {   
    target[key] = source[key];
  }
  return target
}
//console.log(assign(target, source)); // { a: 1, b: 4, c: 5 }
function keys(obj){
  var res= [];
  for (const key in obj) {
    res.push(key);
  }
  return res
}
//console.log(keys(target)); // [ 'a', 'b' ]
function values(obj){
  /* your code here */ 
  var res = [];
      for (const valor in obj) {
        res.push(obj[valor]);    
    }
  return res;s
}
console.log(values(target)); //[ 1, 2 ]
// ```