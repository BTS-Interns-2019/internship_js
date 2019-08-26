<<<<<<< HEAD
function smallest(num) {
  if(typeof num != 'number') {
    throw console.error('¡Los caracteres ingresados no son números!')
  };
  //aquí separo en un array los numeros
  let arr = Array.from(String(num)).map(Number);
  // console.log(arr)
  //aquí genero el array base donde también separo los numeros
  let arr2 = Array.from(String(num)).map(Number);
  // console.log(arr2)
  //aquí ordeno los números del array del menos al mayor
  let sortArr = Array.from(String(num)).map(Number).sort((a, b) => a - b);
  // console.log(sortArr)

  let one = [];
  let two = [];

  //aquí seleccionó el número que voy a cambiar
  for (i = 0; i < arr.length; i++) {
      one.push(sortArr[i]);
      two.push(arr2[i]);
      break;
  }
  // console.log(one)
  // console.log(two)
  //los hago números para poder identificar el index de ellos dentro del arreglo
  one = Number(one);
  two = Number(two);
  // console.log(one)
  // console.log(two)
  
  let indexOne = arr2.indexOf(one);
  let indexTwo = arr2.indexOf(two);
  // console.log(indexOne)
  // console.log(indexTwo)

  //quito el número del array que está en la posición que indica indexOne
  arr.splice(indexOne, 1);
  // console.log(arr)
  //regreso el número al array en la posición que indica indexTwo
  arr.splice(indexTwo, 0, one);
  // console.log(arr)
  //regreso el número pequeño, el index del número que cambié y el índice donde quedó finalmente
  return ([Number(arr.join("")), indexOne, arr.indexOf(one)]);

=======
// [126235, 2, 0]
function smallest(str) {
  /**------Encontre mi valor mas pequeño------------- */
  const theReturn = []
  let split = str.split('').map(n => +n)
  let min = Math.min.apply(null, split)
  let initialIndex = split.indexOf(min)
  theReturn.push(initialIndex)

/**--------Movi el minimo a lugares posibles---------------- */
  let sum = []
  for(let t = 0; t < split.length; t++){
    sum.push(split.join(''))
    let minIndex = split.indexOf(min)
    let take = split.splice(minIndex,1)
    let place = split.splice(t, 0, take)
  }
  theReturn.unshift(+sum[1])
  let minNumber = theReturn[0].toString().split('').map(v => +v)
  let lastIndex = minNumber.indexOf(min)
  theReturn.push(lastIndex)
  // console.log(theReturn)
  return theReturn
>>>>>>> master
}
console.log(smallest("261235"))

console.log(smallest(261235));


module.exports = smallest;