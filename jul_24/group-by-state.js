function groupByState(input){
let output = {};
 let lineas = input.split("\n");

 for(let l in lineas){
  let split = lineas[l].split(",");
  if(split.length==3){
      let estado = split[2].trim();
      let nombre = split[0].trim();
      let address = split[1].trim();
      let persona={
          'name':nombre,
          'address':address,
          'state': estado
      };
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
        newState.people=[];
        newState.people[0]=persona;
        output[estado]=newState;
output[estado] = newState;
      }else{
        output[estado].people.push(persona);
      }
  }
 }

 return output;
}

let res = groupByState(`John Snow, 341 Kings Road, KL
Arya Stark, 22 No Where St, WF
Jaime Lannister, 73 1st Street, KL`);
module.exports = groupByState;