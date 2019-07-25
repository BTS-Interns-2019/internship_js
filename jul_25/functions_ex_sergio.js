let personaObj = {nombre:"", direccion:"", numero:0, ocupacion:"", edad:0, comidaFavorita:[], fraseFavorita:""};

function nombre(personaObj,nombre){

    personaObj["nombre"] = nombre;
}


function direccion(personaObj,direccion){

    personaObj["direccion"] = direccion;
    
}
function numero(personaObj,numero){

    personaObj["numero"] = numero;
}
function ocupacion(personaObj,ocupacion){

    personaObj["ocupacion"] = ocupacion;
}
function edad(personaObj,edad){

    if(edad > 18){
        personaObj["edad"] = function(){return "hurray"};
    }else{
    personaObj["edad"] = edad;
    }
}
function comidaFavorita(personaObj,comida){

    personaObj["comidaFavorita"] = comida;
}
function fraseFavorita(personaObj,frase){
   
    personaObj["fraseFavorita"] = frase;
    
}
  
// console.log(personaObj);

/// SECCION BRAULIO

function averageSpeed(params) {
    let vel = params;
    let f = function hija (vel){ 
        let conta = 0;
        conta++; 
        return vel/conta; };
        let conta = 0;
    return f;
}

let average = averageSpeed();
//console.log(average(100));
//console.log(average(75));
//console.log(average(50));
