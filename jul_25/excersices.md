# functions

```js
// objeto persona con propiedades
// nombre
// direccion
// numero
// ocupacion
// edad
// comida favorita -- Array
// fraseFavorita



// funciones llenando cada campo.
// reciben 2 parametros (objeto, valor)
// cada funcion solo puede llenar una propiedad con el valor que se pasa
// si edad es mayor a 18, asigna una funcion a esa propiedad que retorne "hurray"



// expected: 7 funciones que llenan solo un campo de el objeto en parametro


// clousure and scopes

deben hacer esta función dentro del mismo archivo de los ejercicios anteriores
`functions_ex_<nombre>.js`

# Crear un contador de velocidad promedio

* nombre de la función padre `averageSpeed`
* regresa una función `funcionHija` que recibe un solo parámetro numérico, que es la velocidad
  * esa función regresa la velocidad promedio;
  * cada vez que mande llamar la función hija debe tomar el parámetro de la velocidad y calcular la nueva velocidad promedio

```js
let average = averageSpeed();
average(100); // 100
average(50);  // 75
average(75);  // 75
```