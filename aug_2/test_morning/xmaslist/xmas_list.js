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
    
    let toys = [
    {
    description: 'Car',
    quantity: 2,
    }
    ];
  if(recorte.length==3){
    let theName = recorte[0];  
    let theAge = recorte[1];
    let theScore = recorte[2];
    let entrega = {
      name: theName,
      age: theAge,
      score: theScore,
      gift: toys.description
    } 

    console.log(kids)
    let exi = Object.getOwnPropertyNames(result);
    if(exi.indexOf(gift)==-1){
      newKid={}
      switch(gift){
          case "toy":
          tipo= "toy";
          break;
          case "coal":
          tipo = "coal";
          break;
         
      }
      newKid.name=theName;
     
    }else{
      output[estado].people.push(persona);
    }
}
}

return output;
}
  }}


module.exports = xmasList;
