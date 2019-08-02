
/**
 * xmasList
 * @param {String} kidsList
 * @param {Array} toys
 * @returns {Array}
 */
function xmasList(kidsList, toys) {
  res = [];
  cantidad = toys[0].quantity;
  lines = kids.split("\n");
  lines.forEach((l,n) =>{
    element = {}
    if(l != ""){
      datos = l.split(",");      
      element.name = datos[0].trim(); //Se agrega el nombre
      element.age = parseInt(datos[1]); // Se agrega la edad
      element.score = parseInt(datos[2]); // Se agregan los puntos
      res.push(element)
    }//ya están creados los objetos
    ord = res.slice();
    ord.sort((a, b) => a.score - b.score)
  })
  return res;
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

console.log(xmasList(kids, toys))


module.exports = xmasList;
