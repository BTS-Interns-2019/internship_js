// nombre
function setNombre(obj, name){
    obj.nombre = name;
}
// direccion
function setDireccion(obj, address){
    obj.direccion = address;
}
// numero
function setNumero(obj, number){
    obj.numero = number
}
// ocupacion
function setOcupacion(obj, job){
    obj.ocupacion = job;
}
// edad
function setEdad(obj, age){
    if(age>18){
        obj.edad = function (){return "hurray"};
    }else{
        obj.edad = age;
    }
    
}
// comida favorita -- Array
function setComidaFavorita(obj, food){
    obj.comida_favorita = food;
}
// fraseFavorita
function setFraseFavorita(obj, phrase){
    obj.frase_favorita = phrase;
}

var persona = {
    nombre:"",
    direccion:0,
    numero:0,
    ocupacion:"",
    edad:0,
    comida_favorita:[],
    frase_favorita:""
};
    
console.log(persona);
setNombre(persona,"Mianvi");
setDireccion(persona,"58");
setNumero(persona,"2133725803");
setOcupacion(persona,"Estudiante");
setEdad(persona,22);
setComidaFavorita(persona,["Tacos","Torta","Burrito","Gelatina"]);
setFraseFavorita(persona,"sore wa omae da");
console.log(persona);