function groupByState(input) {
    let datos = input;
    
    let persona = {name:' ', address:'', state:''};
    let KL = {code:'KL',name:"King's Landing",people:[]};
    let WF = {code:'WF',name: "Winter Felt",people: []};
    let BR = {code:'BR',name: "Braavos",people: []};
    let HG = {code:'KL',name: "King's Landing",people: []};
    let II = {code: 'II',name: "Iron Islands",people: []};
    let res = {KL:{code:'KL',name:"King's Landing",people:[]},WF:{code:'WF',name: "Winter Felt",people: []},BR:{code:'BR',name: "Braavos",people: []},HG:{code:'KL',name: "King's Landing",people: []},II:{code: 'II',name: "Iron Islands",people: []}};
    
    datos = datos.replace(/\n/g,",");
    
    datos = datos.split(",");
    
    let arryPersona = ["name","address","state"];

    
let contador1 = 0,contador2 = 0,temp = 0;

for (let i = 0,j = 0; i < datos.length; i++) {
 
    datos[i] = datos[i].split(",");
    for ( j = 0; j < datos[i].length; j++) {
        persona[arryPersona[i]] = datos[i][j];

    }
    contador1++;
    contador2++;
    if(contador1 == 3){
        
        console.log(persona);
        console.log(datos[i][j]);
        let state = datos[i][0];
        state = state.replace(/ /g, "");
        console.log(state);
        
        res[state].people.push(persona);
        console.log(res);
        persona = {name:' ', address:'', state:''};
        contador1 = 0;
        if(datos.length === contador2){return res;}
    }
    console.log(persona);  
}  
    //console.log(objetoRes);
    return "Regreso NAda ajjajaj";    
}

const input = `John Snow, 341 Kings Road, KL
Arya Stark, 22 No Where St, WF
Jaime Lannister, 73 1st Street, KL`;
console.log(groupByState(input));
