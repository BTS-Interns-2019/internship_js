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
    let total = 0;
    let f = function hija (vel){ 
        conta++; 
        total+=vel;
        return (total)/conta; };
    let conta = 0;
    return f;
}

let average = averageSpeed();
console.log(hija(100));
console.log(average(50));
console.log(average(75));
console.log(average(100));
