function smallest(num) {
  let cambio1=[];
  let cambio2=[];

  let array=Array.from(String(num))
    .map(Number);
  let primerArray=Array
    .from(String(num)).map(Number)
  let ordenado=Array
    .from(String(num)).map(Number).sort((a,b)=>a-b)

    for (let i = 0; i < array.length; i++) {
      if (array[i] !== ordenado[i]) {
        cambio1.push(ordenado[i]);
        cambio2.push(primerArray[i]);
        break;
      }
    }


    cambio1=Number(cambio1);
    cambio2=Number(cambio2);
    let index1 = primerArray.indexOf(cambio1);
    let index2 = primerArray.indexOf(cambio2);
    

  array.splice(index1, 1);
 
  array.splice(index2, 0, cambio1);
  return ([Number(array.join("")), index1, array.indexOf(cambio1)]);

}


console.log(smallest(261235))

module.exports = smallest;