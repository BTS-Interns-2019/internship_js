# Functions

A set of statements that performs a task or calculates a value

--------------------------------------------------------------

## function statement

function definition === function declaration === function statement

- The name of the function.
- A list of parameters to the function, enclosed in parentheses and separated by commas.
- The JavaScript statements that define the function, enclosed in curly brackets, { }.

```js
function myName(name) {
  return "This is My name: " + name;
}
```

### Parameters

- Primitive parameters are passed to functions by value.
- If you pass an object as a parameter and the function changes the object's properties, that change is visible outside the function...

#### passing parameters

```js
let IamString = "call me";
var IamBool = true;
const IamNumber = 4815162342;
var IamObject = {myNumber: 4815162342};
let IamObject2 = {bool: false};
const IamObject3 = {myName: "Petra"};
let IamArray = [1,2,3,4,5,6,7,8];

function myFunc(param) {
    // doSomething with the params
}

console.log(
    IamString,
    IamBool,
    IamNumber,
    IamObject,
    IamObject2,
    IamObject3,
    IamArray
);
```

## Function expressions

functions can also be created by a function expression. Such a function can be anonymous;

```js
var uselessFun = function(number) { return (!!number)?'thats all what you\'ve got!!':'Give me something!!'; };
var x = uselessFun(); // Give me something!!
```


Function expressions are convenient when passing a function as an argument to another function;

```js
let greetings = function hi() {return "hellow: "};

let say = function fun(f, people) {return f() + people};
```

In JavaScript, a function can be defined based on a condition. For example, the following function definition defines myFunc only if num equals 0

```js

// ????????????????????

```

## Calling functions

Calling the function performs the specified actions with the indicated parameters.

Functions must be in scope when they are called, but the function declaration can be hoisted.

_function hoisting only works with function declaration and not with function expression._

```js

// ????????????????????

```

The scope of a function is the function in which it is declared, or the entire program if it is declared at the top level.

```js

// ????????????????????

```

A function can call itself.

```js
function factorial(n) {
  if ((n === 0) || (n === 1))
    return 1;
  else
    return (n * factorial(n - 1));
}
```

## Function scope

Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function. However, a function can access all variables and functions defined inside the scope in which it is defined. In other words, a function defined in the global scope can access all variables defined in the global scope. A function defined inside another function can also access all variables defined in its parent function and any other variable to which the parent function has access.

![tree hierarchy](https://www.codeproject.com/KB/scripting/graphic_javascript_tree/graphic_javascript_tree1.png)

### Recursion

There are three ways for a function to refer to itself:

- the function's name
- arguments.callee
- an in-scope variable that refers to the function

```js
var foo = function bar() {
   // statements go here
};
```

1. bar()
1. arguments.callee()
1. foo()

```js
function foo(i) {
  console.log('begin: ' + i);
  if (i < 0)
    return;
  foo(i - 1);
  console.log('end: ' + i);
}
foo(3);

// Output:

// begin: 3
// begin: 2
// begin: 1
// begin: 0
// begin: -1 <----
// end: 0
// end: 1
// end: 2
// end: 3
```

## Nested functions and closures

can nest a function within a function.

- The inner function can be accessed only from statements in the outer function.
- The inner function forms a closure: the inner function can use the arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function.

```js
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give
                        // it
result = fn_inside(5); // returns 8

result1 = outside(3)(5); // returns 8
```

### Preservation of variables

A closure must preserve the arguments and variables in all scopes it references. Since each call provides potentially different arguments, a new closure is created for each call to outside. The memory can be freed only when the returned inside is no longer accessible.

### Multiply-nested functions

Yeeeeeess!

```js
// ????????
```

could it be done in reverse?

### Name conflicts

What do you think?

## arguments object

The arguments of a function are maintained in an array-like object. Within a function, you can address the arguments passed to it as follows:

Using the arguments object, you can call a function with more arguments than it is formally declared to accept.

```js
function myConcat(separator) {
   var result = ''; // initialize list
   var i;
   // iterate through arguments
   for (i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
   }
   return result;
}


```

---------------

```js
// returns:
myConcat(', ', 'red', 'orange', 'blue');

// returns:
myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');

// returns:
myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley');
```

## Function parameters

there are two new kinds of parameters: default parameters and rest parameters.

### Default parameters
parameters of functions default to undefined.

### Rest parameters

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}
```

## Arrow functions

- they do not have its own this, arguments, super, or new.target.
- Arrow functions are always anonymous.

## Top level built-in functions

- eval()
  - The eval() method evaluates JavaScript code represented as a string.

- uneval()
  - The uneval() method creates a string representation of the source code of an Object.

- isFinite()
  - The global isFinite() function determines whether the passed value is a finite number. If needed, the parameter is first converted to a number.

- isNaN()
  - The isNaN() function determines whether a value is NaN or not. Note: coercion inside the isNaN function has interesting rules; you may alternatively want to use Number.isNaN(), as defined in ECMAScript 2015, or you can use typeof to determine if the value is Not-A-Number.

- parseFloat()
  - The parseFloat() function parses a string argument and returns a floating point number.

- parseInt()
  - The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

- decodeURI()
  - The decodeURI() function decodes a Uniform Resource Identifier (URI) previously created by encodeURI or by a similar routine.

- decodeURIComponent()
  - The decodeURIComponent() method decodes a Uniform Resource Identifier (URI) component previously created by encodeURIComponent or by a similar routine.

- encodeURI()
  - The encodeURI() method encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).

- encodeURIComponent()
  - The encodeURIComponent() method encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences



# Extras

## Hoisting

appear below the call in the code

```js
console.log(square(5));
console.log(name);
/* ... */
function square(n) { return n * n; }
var name = "Rickverse";
```

## Scope

```js

```
## [Closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Closures)

A closure is an expression (typically a function) that can have free variables together with an environment that binds those variables (that "closes" the expression).

```js

```
