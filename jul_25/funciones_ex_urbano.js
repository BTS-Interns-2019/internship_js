let persona = {
    nombre: "",
    direccion: "",
    numero: 0,
    ocupacion: "",
    edad: 0,
    comida: [],
    fraseFavorita: ""
};

function name(obj, val) {
    obj.nombre = val;
}

console.log(name(persona,"Urbano"));


function addres(obj, val) {
    obj.direccion = val;
}
console.log(addres(persona, "Morelos 417"));
function num(obj, val) {
    obj.numero = val;
}

console.log(num(persona, 3171040706));


function ocupation(obj, val) {
    obj.ocupacion = val
}
function age(obj, val){
    if (val >18){
        obj.edad= function (){return "Hurray!!"}
    } else {
        obj.edad= val
    }
}
let comidas=["Tacos","Hamburguesas","Pizza","Sopes"]
function comidas(obj, vals){
    obj.comida= vals;
}

function frase(obj,val){
    obj.fraseFavorita=val;
}
console.log(persona);
