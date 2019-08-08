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

### Introduccion
Es una serie que comienza con los números 0 y 1,2​ y a partir de estos, «cada término es la suma de los dos anteriores», es la relación de recurrencia que la define.
Un ejemplo de elloes la siguiente:

0,1,1,2,3,5,8,13,21,34...
**Ejemplo: (0+1=1 / 1+1=2 / 1+2=3 / 2+3=5 / 3+5=8 / 5+8=13 / 8+13=21 / 13+21=34...)

### Problema
El problema establecido tiene las siguientes requisitos:
- Usar BigInt
- Poder calcular el numero 2000 de fibonacci
- La funcion debe llamarse fibonacci

### BigInt
BigIntes un objeto incorporado que proporciona una forma de representar números enteros mayores que 2^53 , que es el número más grande que JavaScript puede representar de manera confiable.BigInt se puede usar para enteros grandes.

### Solucion
- La funcion recibe como parametro n que es el numero a calcular en la serie de fibonacci
---
function fibonacci(n) {
---

-Crea un objeto donde almacena los registros 

---
let fibo={}
---

- Valida que se cumplan las condiciones
---
  }
    if (n <= 1 || n === 2){// si la posicion es igual a 1 o 2 nos regresa 1
        return 1;
    }
---

- Guarda los registros anteriores y retorna con la conversion de BigInt y la operacion de los numeros
---
    return fibo[n]=BigInt(fibonacci(n - BigInt(1),fibo)) + BigInt(fibonacci(n - BigInt(2),fibo))
  }

 ejemplo: fibonacci(5)
 1,1,2,3,5
---
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

### kSum()
- La funcion kSum() evalua los numeros recibidos en string estos asginalodos a num1 el mas grande y num2 el mas pequeño cada variable num1 y num2 se colocan en un arreglo con cada valor del mismo seguin cada digito de los datos resibidos se suma posicion por posicion num1[i] + num2[i] en res[i]sinedo i el indice. Si hubiera crecido el numero en logitud se guarda en aux y se suma al suigiente numero en evaluar.

##### *Por ejemplo


`-->1 llevamos `
`   12'8'020 `
` +   '3'025`
` =131045`
