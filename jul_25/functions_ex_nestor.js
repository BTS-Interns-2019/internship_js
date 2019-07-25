// ejercicio ------
var num = 0;
if(num == 0){
    num = function(){return "Soy un cero a la izquierda!!!";}
}else {
    console.log("No es un cero");
}
console.log(num);
console.log(num());
//------------------------
//# functions
// objeto persona con propiedades
// nombre
// direccion
// numero
// ocupacion
// edad
// comida favorita -- Array
// fraseFavorita
// funciones llenando cada campo.
// reciben 2 parametros (objeto, valor)
// cada funcion solo puede llenar una propiedad con el valor que se pasa
// si edad es mayor a 18, asigna una funcion a esa propiedad que retorne "hurray"
// expected: 7 funciones que llenan solo un campo de el objeto en parametro
var obj = {
    nombre: "",
    direccion: "",
    numero: "",
    ocupacion: "",
    edad: "",
    comidaFavorita: [],
    fresaFavorita: ""
}
function nombre(obj, val){
    return obj.nombre = val;
}
function direccion(obj, val){
    return obj.direccion = val;
}
function numero(obj, val){
    return obj.numero = val;
}
function ocupacion(obj, val){
    return obj.ocupacion = val;
}
function edad(obj, val){
    if(val > 18){
        return function (){ return "hurray"};
    }
    return obj.edad = val;
}
function comidaFavorita(obj, val){
    return obj.push(val);
}
function fraseFavorita(obj, val){
    return obj.fraseFavorita = val;
}
//-----------------------------------
function averageSpeed(data){
    var i = 0;
    var b = function hija(prom){
                data += prom
                i++;
            return data/i;
   } 
   return b
}
let average = averageSpeed(0);
console.log(average(100)); // 100
console.log(average(50)); // 75
console.log(average(75)); // 75