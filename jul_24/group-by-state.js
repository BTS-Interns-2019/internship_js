function groupByState(input){
let output = {};
 let lineas = input.split("\n");
 let personas = [];
 for(let l of lineas){
     personas.push({});
 }
 for(let l in lineas){
  let split = lineas[l].split(",");
  if(split.length==3){
      let estado = split[2].trim();
      let nombre = split[0].trim();
      let address = split[1].trim();
      personas[l]={
          'name':nombre,
          'address':address,
          'state': estado
      };
      let personaadd = personas[l];
      let exi = Object.getOwnPropertyNames(output);
      if(exi.indexOf(estado)==-1){
        let newState = {};
        newState.code = estado;
        let nombre;
        switch(estado){
            case "KL":
            nombre = "King's Landing";
            break;
            case "WF":
            nombre = "Winter Felt";
            break;
            case "BR":
            nombre = "Braavos";
            break;
            case "HG":
            nombre = "Highgarden";
            break;
            case "II":
            nombre = "Iron Islands";
            break;
        }
        newState.name=nombre;
        newState.people=[{}];
        console.log(personas[l]);
        newState.people[0]={};
        Object.assign(newState.people[0],personas[l]);
        output[estado]=newState;
output[estado] = newState;
      }else{
          console.log(personaadd);
       // output[estado].people.push({});
        //let pos = output[estado].people.length;
        //Object.assign(output[estado].people[pos],personaadd);
        output[estado].people.push(personas[l]);
      }
  }
 }

 return output;
}

console.log(groupByState(`John Snow, 341 Kings Road, KL
Arya Stark, 22 No Where St, WF
Jaime Lannister, 73 1st Street, KL`));
module.exports = groupByState;