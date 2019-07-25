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
    obj.numero = val;
}

ocupacion (persona, ocup ="tripulante de esta nave llamada vida");
function ocupacion (obj, val){
    obj.ocupacion = val;
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

//crear contador de velocidad promedio
/*function name "averagespee"
 *regresa una funcion que recibe un solo parametro numerico, que es la velocidad
 *esa funcion regresa la velocidad promedio
 *cada vez que mande a llamar la funcion hija tomar el parametro de la velocidad y calcular 
 la nueva velocidad promedio*/
 
 ////

 let average = averagespeed ();
 console.log (average (100));
 console.log (average (50));
 console.log (average (75));

function averagespeed (){
    let vel = average;
    let prom = 0;
    let i = 0;
    function average (sp){
        i ++;
        return (prom += sp)  / i;
    }
    return vel;
}