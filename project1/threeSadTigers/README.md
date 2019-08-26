# The Queen Problem
#### Por Estefania, Cristian y Ricardo
<<<<<<< HEAD
## Explicación

Este problema consiste en colocar N reinas de ajedrez en un tablero de N × N para que no se ataquen, es decir, que no haya dos reinas que comparten la misma fila, columna o diagonal. Para este problema existen soluciones para todos los números naturales n con la excepción de n = 2 y n = 3.

Se ha creado una función solve que recibe dos parámetros:

La longitud del tablero, que al mismo tiempo es la cantidad de reinas que pueden estar al mismo tiempo en el tablero sin la posibilidad de atacarse. 
Un arreglo con las coordenadas donde se desea que esté posicionada la primera reina.

La solución que presentamos utiliza una técnica llamada retroceso, que es básicamente una búsqueda de profundidad sin una condición final. El algoritmo se mueve de izquierda a derecha, colocando una reina en la siguiente columna disponible. La clave del código anterior es el bucle interno. Esto es lo que comprueba si un movimiento es legal, de modo que ninguna otra reina en el tablero entre en conflicto con la que se colocará. Después de eso, es una recursión simple, con la condición de que si el tablero está lleno, lo añada al conjunto de soluciones.

Todas las posibles soluciones de diferentes escenarios, en donde la cantidad de reinas es igual a las dimensiones de la matriz, son comparadas con las coordenadas obtenidas, para así escoger solo un escenario. Dicho escenario, es una representación de una matriz en un solo arreglo, en donde la primera posición del arreglo representa la primera columna de la matriz y el contenido o número de esa primera posición representa la fila en donde se posicionará la reina, debido a que es en una representación binaria de posiciones. Este escenario es expandido de un arreglo a una matriz binaria que representa las posiciones de las reinas.

En caso que la posición obtenida en los parámetros para la primera reina se de en un escenario donde no se posible representar la cantidad de reinas correctas de acuerdo a la longitud del arreglo, la función devolverá un arreglo lleno de ceros.

## Resultados

Resultado correcto esperado :
=======

## Descripción

El problema **N Queens** consiste en colocar **N cantidad de reinas** de ajedrez en un tablero de **N × N** para que no se ataquen, es decir, que no haya dos reinas que comparten la misma fila, columna o diagonal. Para este problema existen soluciones para todos los números naturales n con la excepción de:
```js
n = 2 y n = 3
````

Se ha creado una función **queenProblem** que recibe dos parámetros:

1. La **longitud del tablero (n)** que será un número entero positivo que al mismo tiempo será la cantidad de reinas que pueden estar al mismo tiempo en el tablero sin la posibilidad de atacarse.
1. Un **arreglo con las coordenadas ([x,y])** donde se desea que esté posicionada la primera reina.

```js
function queenProblem(n, [x,y]) {

    return [
        [ 0,  1,  0,  0],
        [ 0,  0,  0,  1],
        [ 1,  0,  0,  0],
        [ 0,  0,  1,  0]
    ];
}
````

* La solución que presentamos utiliza una técnica llamada **retroceso**, que es básicamente una búsqueda de profundidad sin una condición final. El algoritmo se mueve **de izquierda a derecha**, colocando una reina en la siguiente columna disponible. 

* Un bucle interno comprueba si un movimiento es legal, de modo que *ninguna otra reina en el tablero entre en conflicto con la que se colocará*. Después de eso, es una **recursión simple**, con la condición de que si el tablero está lleno, lo añada al conjunto de soluciones.

* Todas las posibles soluciones de diferentes escenarios, en donde la cantidad de reinas es igual a las dimensiones de la matriz, son comparadas con las coordenadas obtenidas, para así elegir solo un escenario. 
    * Dicho escenario, es una representación de una matriz en un solo arreglo, en donde la primera posición del arreglo representa la primera columna de la matriz y el contenido o número de esa primera posición representa la fila en donde se posicionará la reina, debido a que es en una representación binaria de posiciones. Este escenario es expandido de un arreglo a una matriz binaria que representa las posiciones de las reinas.

Es decir, el arreglo: 
```js
[2, 0, 3, 1]

````
Es proporcional a la matriz: 
>>>>>>> 5b763435ec8769939b98e290636eb5e487e4dfdb
```js
[[0, 1, 0, 0],
 [0, 0, 0, 1],
 [1, 0, 0, 0],
 [0, 0, 1, 0]]
````

<<<<<<< HEAD




Resultado de cuando las coordenadas no son correctas
````js
[ [ 0, 0, 0, 0 ],
 [ 0, 0, 0, 0 ],
 [ 0, 0, 0, 0 ],
 [ 0, 0, 0, 0 ] ]
=======
* En caso que la posición obtenida en los parámetros para la primera reina se de en un escenario donde no se posible representar la cantidad de reinas correctas de acuerdo a la longitud del arreglo, la función devolverá un arreglo lleno de ceros.

## Resultados

Resultado esperado con todas las reinas ubicadas en una posición correcta :
```js
[[0, 1, 0, 0],
 [0, 0, 0, 1],
 [1, 0, 0, 0],
 [0, 0, 1, 0]]
````


Resultado esperado cuando las coordenadas ubican a una reina en una casilla que no lleva a una posible solución:
````js
[[ 0, 0, 0, 0 ],
 [ 0, 0, 0, 0 ],
 [ 0, 0, 0, 0 ],
 [ 0, 0, 0, 0 ]]
>>>>>>> 5b763435ec8769939b98e290636eb5e487e4dfdb
````
