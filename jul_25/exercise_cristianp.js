var num = 0;
if(num == 0){
    num = function (algodon){ return "Es un cero"};
}else{
    console.log("No es un cero");
}

var persona ={
    nombre:"",
    direccion:"",
    numero:"",
    ocupacion:"",
    eded:"",
    comidaFav:[],
    fraseFav:""
};
comidas = ["as","ASD","ASD"];
food(persona, comidas);

function food(obj, comidas){
    obj.comidaFav.push(comidas)
}
function dir(obj, valor){
    obj.fraseFav = valor
}
function dir(obj, valor){
    if(valor > 18){
        obj.edad = function(){return "Hurray"};
    }else{
        obj.edad = valor
    }
}
function dir(obj, valor){
    obj.ocupacion = valor
}
function number(obj, valor){
    obj.numero = valor
}
function name(obj, valor){
    obj.nombre = valor;
}
function dir(obj, valor){
    obj.direccion = valor
}
name(persona, "cris");
console.log(persona.comidaFav);