<<<<<<< HEAD
//Estefanía Cano

=======
// Erick Israel Vazquez Neri
>>>>>>> master
/**
 * xmasList
 * @param {String} kidsList
 * @param {Array} toys
 * @returns {Array}
 */
<<<<<<< HEAD

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
=======
const kids =`Cristian Fernandez, 12, 100
Sergio Piña, 4, 50
Carlos Munguia, 6, 92`;
const toys2 = [
  {
    description: 'Car',
    quantity: 2,
  }
];

 const vecindad = `Quico, 11, 15
 Chilindrina, 9, 7
 ElChavo, 8, 4
 Godines, 8, 17
 Popis, 9, 20
 Nono, 12, 20`
 
 const toys = [{description: "Horse", quantity: 3},
               {description: "XBox", quantity: 2}]

function xmasList(kidsList, toys) {
  let splitList = kidsList.split("\n")
  let kids = []
  //**---------------The kids object------------------------ */
  for(let i = 0; i < splitList.length; i++){
    let oneKid = splitList[i].split(", ")
    kids.push({})
    kids[i].name = oneKid[0]
    kids[i].age = +oneKid[1]
    kids[i].score = +oneKid[2]
    kids[i].gift = ''
  }

  let totalGifts = 0
  toys.forEach(v => totalGifts += v.quantity)

  for(let i = 0, g = 0;  i < kids.length; i++){
    kids.sort((a,b) => b.score - a.score)
    if(!toys[g]){
      break
    }
    kids[i].gift = toys[g].description
    if(i+1 === toys[g].quantity){
      g++
    }
    else if(i+1===totalGifts){
      break
    }
  }
  kids.forEach(v => { if(!v.gift){ v.gift = "coal"} } )

  return kids
>>>>>>> master
}
console.log(xmasList(vecindad, toys))


module.exports = xmasList;