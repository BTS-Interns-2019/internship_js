//nestor rabbin lira campos
/**
 * xmasList
 * @param {String} kidsList
 * @param {Array} toys
 * @returns {Array}
 */
function xmasList(kids, toys) {
  kids = kids.trim().replace(/\n/gi, ",")
  kids = kids.split(",")
  console.log(kids);
  
  let arr = [];
  let toy = [];
  for(let int of toys){
    for (const cn in int) {
      toy.push(int[cn])      
    }
  }  
  let score = []
  for(let i = 0; i < kids.length; i++){
    obj = {}
    obj.name = kids[i], i++;
    obj.age = kids[i], i++;
    obj.score = kids[i];
    score.push(kids[i]);
    obj.gifth = "";
    arr.push(obj); 
  }
  console.log(score);
  
  for(let x = 0; x < arr.length; x++){
    for(let z = 0; z < arr.length; z++){
      
    }
  }

  console.log(arr);
  
  
  return;
}
const kids =`Cristian Fernandez, 12, 100
Sergio Piña , 4 , 50
Carlos Munguia, 6, 92
`;

const toys = [
  {
    description: 'Car',
    quantity: 2,
  }
];
console.log(xmasList(kids, toys));

module.exports = xmasList;
