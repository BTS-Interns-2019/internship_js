/** # Array Mutation Methods Homework

* file name `mutation-methods_<name>.js` for function definition.

Use the same files for definitions and tests for both exercises

## Sort
* function name `sort`.

* Create a function that mimics the js function `Array.prototype.sort`
* Your function receives as first parameter the array to work on.
* the following parameters and the return value are based on [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
* Use [bubble sort algorith](https://lmgtfy.com/?q=ordenamiento+burbuja) for the sorthing part
* You must use array methods somewhere in your logic


### TDD

* Create a tests file with the same name but ending in .test.js aka `mutation-methods_<name>.tests.js`
* Write at least 2 different test cases that are not listed in the ones shared in class.

## The Secret Comunication

Write 3 functions that will help comunicating the trops in the battle field by ussing encrypted messages.

* function `generateSeed`
  * It will receive an array of characters
  * Returns a new array shuffled, aka. ordered randomly.
  * The result of this function with the input will be used in the following ones to encryp the message.
* function `encrypt`
  * It will receive 3 arguments
    * `baseAlphabet`; array of charactes, the one used as input in `generateSeed`
    * `seed`; array of characters, the output of `generateSeed`
    * `message`; an string to be encrypted
  * `baseAlphabet` and `seed` will be used to map the characters in the message using a one to one relation, chaging all ocurrences of `baseAlphabet[0]` by `seed[0]`.
  * If message has a character that doesn't have a match in `baseAlphabet` leave it unchanged.
  * Returns a sring which is an encrypted version of `message`.

* function `decrypt`
  * It will receive 3 arguments
    * `baseAlphabet`; array of charactes, the one used as input in `generateSeed`
    * `seed`; array of characters, the output of `generateSeed`
    * `encryptedMessage`; an string to be encrypted
  * `baseAlphabet` and `seed` will be used to map and recover the characters in the `encryptedMessage` using a one to one relation, chaging all ocurrences of `seed[0]` by `baseAlphabet[0]`.
  * If message has a character that doesn't have a match in `seed` leave it unchanged.
  * Returns a sring which is the decrypted version of `encryptedMessage`.

### Example I/O
```js
["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"] // base alphabet
["o","e","k","l","i","p","d","f","c","m","j","g","h","n","b","a","q"] // seed

// message    encrypted message
'hola node' => 'fbgo nbli'
```

### TDD

Write at least 1 test case ussing all functions, so it will need to.
1) create a seed
2) encrypt a message
3) decrypt a message to get the same one in step #2 */

function sort(arr, callBack){
  if(!!callBack){
    
  }
  else{
    arr = arr.join(',').split(',')
    let ordered = true
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > arr[i+1]){
        let save = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = save
        ordered = false
        console.log(arr)
      }  
        if(i == arr.length-1 && !ordered){
          i = -1
          ordered = true
        }
    }
  } return arr.map(v=>+v)
}

// console.log(sort([6,4,21,2]))
console.log(sort([1,21,11,2]))


