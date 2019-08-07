<<<<<<< HEAD

/**Luis Carlos Gallegos Rodriguez
=======
// Erick Israel Vazquez Neri
/**
>>>>>>> 43bed090b2f7dd8105c964b70d1533c34a75e127
 * xmasList
 * @param {String} kidsList
 * @param {Array} toys
 * @returns {Array}
 */
<<<<<<< HEAD
/***
 * * Write a function called `xmasList`
* The function receives 2 parameters
  * `kids` as a coma separated multiline string
    * Each line of the string contains `name`, `age` and `score` comma separated
  * `toys` an array of objects containing `{description: <string>, quantity: <number>}`
* The toys will be assigned to each kid by `finalScore`, higher scores get gifts first
* The final score will be calculated based in `score - age * 2` to keep the preference for younger kids
* The ones that didn't reach a gift will receibe `coal`
* The function will return an array containing the list of the kids in the same order they where provided
  * Each kid is an object with his own data and an aditional attribute `gift` which will be the `description` of the toy he receives or `'coal'`
 */
function xmasList(kidsList, toys) {
  const lineas = kidsList.split("\n")
  let boys = []
  let scores = []
  for (let linea of lineas) {
    let datos = linea.split(',')
    if (datos.length == 3) {
      let age = parseInt(datos[1].trim())
      let or_score = parseInt(datos[2].trim())
      let score = or_score - age * 2
      let boy = {
        name: datos[0].trim(),
        age: age,
        score: or_score,
        gift: 'coal'
      }
      boys.push(boy)
      scores.push(score)
    }
  }
  let indices_scores_ordenados = []
  if(toys.length>0)
  do {
    let indice_mayor = Number.MIN_VALUE
    let score_mayor = Number.MIN_VALUE
    for (let i = 0; i < scores.length; i++) {
      if (!indices_scores_ordenados.includes(i)) {
        let s = scores[i]
        if (s > score_mayor) {
          score_mayor = s
          indice_mayor = i
        }
      }
    }
    indices_scores_ordenados.push(indice_mayor);
    boys[indice_mayor].gift = toys[0].description
    toys[0].quantity=toys[0].quantity-1;
    if (toys[0].quantity == 0) {
      toys.shift()
    }

  } while (indices_scores_ordenados.length < scores.length && toys.length > 0)
  return boys;
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
>>>>>>> 43bed090b2f7dd8105c964b70d1533c34a75e127
}
console.log(xmasList(vecindad, toys))


<<<<<<< HEAD
const kids = `Cristian Fernandez, 12, 100
Sergio Piña , 4 , 50
Carlos Munguia, 6, 92
`;

const toys = [
  {
    description: 'Car',
    quantity: 2,
  }
];
module.exports = xmasList;
=======
module.exports = xmasList;
>>>>>>> 43bed090b2f7dd8105c964b70d1533c34a75e127
