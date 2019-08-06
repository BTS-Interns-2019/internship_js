const input = '444 2000 445 544'

function closestAndSmallest(str) {
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
module.exports = closestAndSmallest;