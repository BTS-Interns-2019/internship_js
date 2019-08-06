# **Ocho reinas**
### **Descripción**
El problema de las ocho reinas consiste en colocar la misma cantidad de reinas que de dimensiones de la tabla, solo que deben estar colocadas de forma que ninguna de ellas pueda eliminarse entre sí.  
```JS
|   | A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|---|
| 8 |   |   |   | ♕ |   |   |   |   |
| 7 |   |   |   |   |   |   | ♕ |   |
| 6 |   |   | ♕ |   |   |   |   |   |
| 5 |   |   |   |   |   |   |   | ♕ |
| 4 |   | ♕ |   |   |   |   |   |   |
| 3 |   |   |   |   | ♕ |   |   |   |
| 2 | ♕ |   |   |   |   |   |   |   |
| 1 |   |   |   |   |   | ♕ |   |   |
```
---------------------

Para ello se realiza un arreglo de dos dimensiones en el cual necesitara que se le ingrese un tamaño y una posición inicial para poder calcular si en la posición colocada se puede realizar este algoritmo o no.  

La matriz generada se conformara de tres estados con distinta función para resolver este problema.  
*  Cero (0): Esto indica que en la posición de la matriz no hay todavia reinas, todos los valores de la matriz comienzan con este estado.
*  Uno (1): Esta posición indica que hay una reina.
*  Dos (2): Esta posición es auxiliar, empleada en la parte de verificación de posiciones para poder detectar si hay alguna reina que pueda ser atacada por otra reina en la posición.   

Para poder llamar al programa se deben ingresar dos parametros para que esta pueda iniciar, el primero es un entero que indica el tamaño de la matriz a generar y el segundo es un arreglo con dos enteros que indican la posición de la primera reina, donde el primer número es el desplazamiento vertical, de arriba para abajo, y el segundo el horizontal, de izquierda a derecha.

----------------------------
### Pasos del programa
1. Se crea un arreglo vacío donde va a contener el tablero en sí.
> let board = [];
2. Se rellena el tablero con las posiciones iniciales (0's), esto a base el tamaño del arreglo.
> for (let i = 0; i < size; i++) {  
> &nbsp;&nbsp;&nbsp;&nbsp;board [i] = [];  
> &nbsp;&nbsp;&nbsp;&nbsp;for (let j = 0; j < size; j++) {  
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;board [i] [j] = 0;  
> &nbsp;&nbsp;&nbsp;&nbsp;}  
> }
3. Se ingresa la posición de la primer reina, donde ini[0] es el desplazamiento en vertical y ini[1] es el desplazamiento en horizontal, es decir se desplazará de izquierda a derecha.
> board [ini[0]] [ini[1]] = 1;
4. Se crea un contador de reinas que se encargara de marcar la terminación cuando ya se hayan puesto todas las reinas.
> let colocados = 1;
5. Una vez ya teniendo la primera posicion de la reina, corre una función que se encarga de colocar las reinas en los espacios siguientes de manera que no se puedan atacar, esta en la posición de la siguiente reina.
> intentarColocar(ini[1] + 1);
6. Finalmente, cuando se obtengan las posiciones se retornara el tablero donde las posiciones en 1 son las reinas.
> return board;
------------------
