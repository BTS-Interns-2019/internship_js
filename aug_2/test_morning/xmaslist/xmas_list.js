// David Martin Silva Cruz
/**
 * xmasList
 * @param {String} kidsList
 * @param {Array} toys
 * @returns {Array}
 */
const kids =`Cristian Fernandez, 12, 100
Sergio Piña, 4 , 50
Carlos Munguia, 6, 92
`; // Último salto de línea de la cadena 'kids'
const toys = [
  {
    description: 'Car',
    quantity: 2,
  }
];

// console.log(xmasList(kids, toys));

function xmasList(kidsList, toys) {
  k = kidsList; // Copia de la cadena kidsList, 
  k = k.slice(0, -1); // Remuevo el último salto de línea de la cadena copia 'kidsList'
  k = k.split(/\n/);  // Creo un arreglo 'k' a partir de la cadena copia 'kidsList', cada elemento es una cadena: "niño, edad, score"
                      // k es un arreglo con longtiud igual al número de niños
  name = [];
  age = [];
  score = [];
  finalscore = [];

  for (i = 0; i < k.length; i++) {
    k[i] = k[i].split(',');  // Reacomodo del mismo arreglo 'k', cada elemento es un arreglo: "[niño, edad, score]"
    name[i] = k[i][0];  // Arreglo con los nombres de los niños
    age[i] = k[i][1];   // Arreglo con la edad de los niños
    score[i] = k[i][2]; // Arreglo con el score de los niños
    finalscore[i] = score[i] - age[i] * 2; // Arreglo con el score final de los niños
  }

  t = toys[0];
  regalo = t.description; // Cadena con el nombre del regalo
  cantidad = t.quantity;  // Entero con la cantidad de regalos

  gift = new Array(name.length); 
  gift.fill('coal');
  for (i = cantidad; i > 0; i--) {
    gift[i] = regalo; // Arreglo con el regalo de cada niño
  }

  finalscoresort = finalscore.slice();
  finalscoresort.sort((a,b)=>a-b); // Arreglo con el score de cada niño de menor a mayor

  finalgift = [];
  for (let i = 0; i < k.length; i++) {
    for (let j = 0; j < k.length; j++) {
      if (finalscoresort[i] == finalscore[j]) {
        finalgift[j] = gift[i]; // Arreglo con el regalo correspondiente de cada niño
      }
    } 
  }

  array = [];
  for (let i = 0; i < k.length; i++) {
    array[i] = { name: name[i], // Arreglo salida con las caracteristicas de cada niño y su regalo
      age: Number(age[i]),
      score: Number(score[i]),
      gift: finalgift[i]
    }; 
  }

  return array;
}

module.exports = xmasList;
