
function closestAndSmallest(str) {
  let numeros = str.split(" ")
  let output = [[Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE], [Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE]]
  let min_dif = Number.MAX_VALUE
  let pesos = []
  for (let i = 0; i < numeros.length; i++) {
      let n = numeros[i]
      let arr = n.split('')
      let peso = 0
      for (let c of arr) {
          peso += parseInt(c)
      }
      pesos.push(peso)

  }
  for (let i = 0; i < numeros.length; i++) {
      let p1 = pesos[i]
      for (j = i + 1; j < numeros.length; j++) {
          let p2 = pesos[j]
          let dif = Math.abs(p2 - p1)
          let esp = false
          if(dif==min_dif){
              let c1 =  output[0][0]
              let c2 = output[1][0]
              esp = p1<c1||p2<c1||p1<c2||p2<c2
          }
          if (dif <min_dif || esp) {
              min_dif = dif
              if(p1<=p2){
              output[0][0] = p1;
              output[0][1] = i
              output[0][2] = parseInt(numeros[i])
              output[1][0] = p2;
              output[1][1] = j
              output[1][2] = parseInt(numeros[j])
          }else{
              output[1][0] = p1;
              output[1][1] = i
              output[1][2] = parseInt(numeros[i])
              output[0][0] = p2;
              output[0][1] = j
              output[0][2] = parseInt(numeros[j])
          }
         
          }
      }
  }
  return output;
}
module.exports = closestAndSmallest;