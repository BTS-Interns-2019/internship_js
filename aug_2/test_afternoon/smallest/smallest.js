function smallest(num) {
  let min = Number.MAX_VALUE
  let ind
  let to
  let split = num.toString()
  for(let i=0;i<split.length;i++){
   let car = split[i]
   let def = split.slice(0,i) + split.slice(i+1,split.length)
   for(let j=0;j<split.length;j++){
     let ori = split[j]
     //split[i] = ori
     //split[j] = car
     let num = def.slice(0,j)+car+def.slice(j,def.length)
     //
     if(num<min){
       min = parseInt(num);
       ind = i
       to = j
     }
    // split[i] = car
     //split[j] = ori
   }
  }
  return [min, ind, to];
}
module.exports = smallest;