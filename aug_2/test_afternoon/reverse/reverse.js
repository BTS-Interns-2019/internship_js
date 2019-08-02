// str = ' this is a second test :O ';
// console.log(reverse(str));

function reverse(str) {

  if( typeof str != 'string') throw console.error('Error: Ingresa una cadena de caracteres');

  str = str.trim(); // Elimina los espacios vacios de los extremos de la cadena
  a = str.split(' '); // Arreglo donde cada elemento es una palabra de la cadena

  j = 2;
  for (i=1; i < a.length; i++) {
      if (j%2 == 0) {
          b = a[i].split('').reverse().join(''); // En b se almacena la palabra en posición par con sus letras al revés
          a.splice(i, 1, b); // Añade la palabra volteada al arreglo de palabras
      }
      j++;
  }
  str = a.join(' '); // Une el arreglo de palabras en una sola cadena

  return str;
}

module.exports = reverse;