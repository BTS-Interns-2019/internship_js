# Projects V2.0

Today we will be focused on the **CODE** 👾💻👾.

Performance of code and **[code style](https://github.com/airbnb/javascript)** will be checked.

remember you have:

* One question per Team
* Array methods
* String methods
* Number methods
* A lot of utilities in javascript vanilla

1. Create a clean branch from master
1. Create a folder with the name of your team. inside project2
1. Create tests based on the documentation I gave you... for each function you create
1. Create your solutions/functions to solve the problem
1. Create a REAMDE.md file telling an horror story 😁 just kidding... maybe 😉, explain which were your issues while solving each of the following problems.


## Morse code

filename `morse.js`

function specs

```js
function morse (binaryMorseCode) {
    // your code here ...
    return "Human Readable Text";
}
```

Rules in the image

![morse code](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/International_Morse_Code.svg/1200px-International_Morse_Code.svg.png)

one Unit is equal to 2 values (because we wanna make sure nothing is lost in the wires)
1 unit of 1 = 11
1 unit of 0 = 00

```js
// input

"1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011"

// output
"HEY JUDE"
```

## Fibonacci sequence

filename `fibonacci.js`

I want to be able to calculate the 2000th number of fibonacci

[More information here](https://en.wikipedia.org/wiki/Fibonacci_number)

use [javascript bigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

function specs

```js
function fibonacci (nth) {
    // your code here ...
    return nthNumberOfFibonacci;
}
```

## Sum like kindergarten

A string representation of an integer will contain no characters besides the ten digits of "0" to "9".

you are not allowed to do
`strNum1 + strNum2`

function specs

```js
function (strNum1, strNum2) {

    return "sum of strNum1, strNum2"
}
```

La funcion add() evalua los numeros resibidos en string estos asginalodos a num1 el mas grande y num2 el mas pequeño 
cada variable num1 y num2 se colocan en un arreglo con cada valor del mismo seguin cada digito de los datos resibidos
se suma posicion por posicion num1[i] + num2[i] en res[i] sinedo i el indice.
fi hubiece crecido el numero en logitud se guarda en aux y se concatena al inicio de res.