<<<<<<< HEAD
function smallest(num) {
  let min = Number.MAX_VALUE
  let ind
  let to
  let split = num.toString()
  for(let i=0;i<split.length;i++){
   let car = split[i]
   let def = split.slice(0,i) + split.slice(i+1,split.length)
   for(let j=0;j<split.length;j++){
     let num = def.slice(0,j)+car+def.slice(j,def.length)
     if(num<min){
       min = parseInt(num);
       ind = i
       to = j
     }
   }
  }
  return [min, ind, to];
}
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
}
console.log(smallest("261235"))

>>>>>>> 43bed090b2f7dd8105c964b70d1533c34a75e127
module.exports = smallest;