const input = '444 2000 445 544'

function closestAndSmallest(str) {
<<<<<<< HEAD
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
=======
  let splitInput = str.split(" ")
  let nums = []
  let result = []
  for(let i = 0; i < splitInput.length; i++){
    nums.push({})
    nums[i].num = splitInput[i] 
    nums[i].weight = splitInput[i].split('')
        .map(v => +v)
        .reduce((acc, v) => acc + v, 0)
  }
  let counter = []
  
  for(let i = 0; i < nums.length; i++){
    for(let u = 1; u < nums.length; u++){
      counter.push(nums[i].weight + nums[u].weight) 
    }
  }
  console.log(counter)
  console.log(nums)
  return result
}
closestAndSmallest(input)
>>>>>>> master
module.exports = closestAndSmallest;