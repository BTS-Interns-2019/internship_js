// number = 1000;
// console.log(smallest(number));

function smallest(number) {
  if( typeof number != 'number') throw console.error('Error: Ingresa una secuencia de números');

  array1 = String(number).split("").map(Number); // Convierte el número en un arreglo con números 
  array2 = array1.slice(); // Copia del arreglo array1
  array3 = array1.slice();
  
  smallest = Math.min(...array1); // El valor más pequeño del arreglo
  biggest = Math.max(...array1);  // El valor más grande del arreglo
  
  index = [];
  j = 0;
  for (i = 0; i < array1.length; i++) {
    if (smallest == array1[i]) {
      index[j] = i; // Arreglo con los indice de los valores más pequeño del arreglo
      j++;
    }
  }
  indexb = array1.indexOf(biggest) // Indice del valor más grande del arreglo
  
  array1.splice(index[0], 1); // Remueve el valor más pequeño del arreglo
  array2.splice(index[1], 1);
  array3.splice(indexb, 1);   // Remueve el valor más grande del arreglo

  array1.unshift(smallest); // Añade el valor más pequeño al inicio del arreglo
  array2.unshift(smallest); 
  array3.push(biggest);     // Añade el valor más grande al final del arreglo

  n1 = Number(array1.join("")); // Une los elementos del arreglo (números) en un solo número
  n2 = Number(array2.join("")); 
  n3 = Number(array3.join("")); 

  if (n1 < n2) { // Comparación entre los nuevos números con el mínimo número cambiado pero de diferentes indices
    return n1 < n3 ? [n1, index[0], 0] : [n3, indexb, array1.length-1] // Comparación entre los nuevos números con el máximo número cambiado
  } else {
    return n2 < n3 ? [n2, index[1], 0] : [n3, indexb, array1.length-1]
  }  
}                                                        

module.exports = smallest;