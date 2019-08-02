//Estefanía Cano

/**
 * xmasList
 * @param {String} kidsList
 * @param {Array} toys
 * @returns {Array}
 */

 xmasList(kids =`Cristian Fernandez, 12, 100
  Sergio Piña , 4 , 50
  Carlos Munguia, 6, 92
  `, toys = [
    {
      description: 'Car',
      quantity: 2,
    }
  ])

function xmasList(kidsList, toys) {
  let result = [];
  let kids = kidsList.split("\n");
  for(kid in kids){
    let recorte = kids[kid].split(",");
  if(recorte.length==3){
    let theName = recorte[0].trim();  
    let theAge = Number(recorte[1].trim());
    let theScore = Number(recorte[2].trim());
    let entrega = {
      name: theName,
      age: theAge,
      score: theScore,
      gift: toys.description
    } 
    
    if(theScore>50){
      entrega.gift = toys[0].description 
    } else {
      entrega.gift = 'coal'
    }
    // console.log(entrega)
    result.push(entrega)
    // console.log(result)
}
  }
  return result
}

module.exports = xmasList;
