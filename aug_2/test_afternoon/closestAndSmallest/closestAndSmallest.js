// str ='103 123 4444 99 2000';
// str = '101 200 101';
// str = '80 71 62 53';
// str = '444 2000 445 544';
// str = '239382 162 254765 182 485944 468751 49780 108 54';
// console.log(closestAndSmallest(str));

function closestAndSmallest(str) {
  str = str.split(' ');
  w = [];
  str.forEach((e, i, array) => w[i] = e.split('').reduce(function(a, b){
    return Number(a) + Number(b); // Método forEach para calcular el 'weight' de cada número de la cadena  y los almacena en el arreglo w
  }, 0));

  wsorted = w.slice(); // Copia del arreglo w ('weight' de cada número)
  wsorted.sort((a,b)=>a-b); // Arreglo copia con los weight's de mayor a menor

  index = [];
  for (let i = 0; i < wsorted.length; i++) {
    for (let j = 0; j < w.length; j++) {
      if (wsorted[i] == w[j]) {
        index[i] = j;  // Indice asociado al arreglo con los weight's de mayor a menor
      }
    } 
  }

  result = w.every((e, i, array) => e == array[0]); // Método every para saber si todos los weight's son iguales
  str.forEach( (e, i, array) => array[i] = Number(e) ) // Convierte cada número de la cadena de string a entero
  if (result) {
    a = [w[0], 0, str[0]]; // Resultado cuando todos los weight's son iguales
    b = [w[0], 1, str[1]];
  } else {
    a = [wsorted[0], index[0], str[index[0]]]; // Resultado cuando no hay weight's repetidos
    b = [wsorted[1], index[1], str[index[1]]];
  }

  ya:
  for (let i = 0; i < w.length; i++) {
    for (let j = 0; j < w.length; j++) {
      if (w[i] == w[j] && i!=j ) {
        a = [w[i], i, str[i]]; // Resultado cuando uno o más weight's se repiten
        b = [w[j], j, str[j]];
        break ya;
      }
    } 
  }
   
  return [a, b];
}

module.exports = closestAndSmallest;