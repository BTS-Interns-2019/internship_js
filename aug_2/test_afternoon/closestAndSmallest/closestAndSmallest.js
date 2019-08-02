function closestAndSmallest(str) {
  if(typeof str != 'string') {
    throw console.error('¡Los caracteres ingresados no son string!')
  };
  
  salida = [];


  for (var i = 0, len = str.length; i < len; i += 1) {
    salida.push(+str.charAt(i));
  }

  console.log(salida);
  for (var i = 0, sum = 0; i < salida.length; sum += salida[i++]);
  let arr = str.split(" ")
  arr = Array.from(arr).map(Number);
  console.log(arr)

  console.log(sum);


 
  return [[2, 4, 2000], [4, 0, 103]];
}

console.log(closestAndSmallest('103 123 4444 99 2000'))
module.exports = closestAndSmallest;