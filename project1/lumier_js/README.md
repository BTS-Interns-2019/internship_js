# **Ocho reinas**
### **Descripción**
El problema de las ocho reinas consiste en colocar la misma cantidad de reinas que de dimensiones de la tabla, solo que deben estar colocadas de forma que ninguna de ellas pueda eliminarse entre sí.  
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

---------------------

Para ello se realiza un arreglo de dos dimensiones en el cual necesitara que se le ingrese un tamaño y una posición inicial para poder calcular si en la posición colocada se puede realizar este algoritmo o no.  

La matriz generada se conformara de tres estados con distinta función para resolver este problema.  
*  Menos uno (-1): Esto indica que en la posición de la matriz no hay todavia reinas o posibilidad de que alguna reina pueda atacar en la posición, todos los valores de la matriz comienzan con este estado.
*  Cero (0): Esto indica que en la posición no hay reina pero puede ser atacada por una, es decir, es una posición donde si se coloca alguna reina esta al alcance de ser atacada por otra.
*  Uno (1): Esta posición indica que hay una reina.
----------------------------
### Código

> //codigo