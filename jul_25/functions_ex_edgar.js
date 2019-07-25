var persona = { nombre:"",
direccion:"",
numero: 0,
ocupacion:"",
edad: 0,
comida_fav: [],
frase_fav:""};

nombre (persona, name = "edgar");
function nombre (obj, val){
    obj.nombre = val;
}

direccion (persona, direcc= "ni de aqui ni de allá");
function direccion (obj, val){
    obj.direccion = val;
}

numero  (persona, num = 1234567890);
function numero (obj, val){
    obj.direccion = val;
}

edad (persona, años = 20);
function edad (obj, val){
    if (val > 18){
        obj.edad = hurra ();
    } else {
        obj.edad = val;
    }
}

comida (persona, food =["pizza, hamberguesa, sandwich, hot dogs"]);
function comida (obj, val){
    obj.comida_fav = val;
}

frase  (persona, phrase ="¿que hago aqui?");
function frase (obj, val){
    obj.frase_fav = val;
}

function hurra (){
    return "hurray";
}

console.log (JSON.stringify(persona, null, 2));

