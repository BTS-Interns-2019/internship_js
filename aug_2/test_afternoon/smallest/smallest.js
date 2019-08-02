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
// console.log(smallest("261235"))

module.exports = smallest;