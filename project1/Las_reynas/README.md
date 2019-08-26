## Las 8 reinas

### Pasos para resolver el problema

1.Identificar el problema

El juego de las 8 reinas consiste en poner sobre un tablero de ajedrez ocho reinas sin que estas se amenacen entre ellas.
El problema de las ocho reinas tiene 92 soluciones, de las cuales 12 son esencialmente distintas, es decir las 92 soluciones existentes se pueden obtener a partir de traslaciones, simetrías y rotaciones de las 12 soluciones únicas

### Desgloce del problema
Como cada reina puede amenazar a todas las reinas que estén en la misma fila, cada una ha de situarse en una fila diferente. Podemos representar las 8 reinas mediante un vector[1-8], teniendo en cuenta que cada índice del vector representa una fila y el valor una columna. Así cada reina estaría en la posición (i, v[i]) para i = 1-8.

### Consideraciones
* La funcion recibe dos parametros.
* Tamaño del tablero, el tamaño tiene que ir entre 4 y 20 como limite
* Recibe las coordenadas de una reina (se representan con x , y)

* ejemplo: queenProblem(4,[0,1])

### Instrucciones
1. Nuestra funcion global se llama queenProblem la cual recibe como parametros el tamaño de la matriz y las posiciones de la reina.
2. Una vez creado el tablero creamos una funcion llamada Encontrar en la cual itera por las posiciones y busca el lugar que esta disponible y nos retorna true o false si cumple con ciertas condiciones.
3. La funcion llenarCeros llena el tablero con ceros para indicar las posiciones en donde la reina puede moverse.
4. La funcion PonerReina manda a ejecutar y llena el tablero con la reina en la posicion disponible.
