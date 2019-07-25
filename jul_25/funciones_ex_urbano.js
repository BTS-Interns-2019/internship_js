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
let comidasF=["Tacos","Hamburguesas","Pizza","Sopes"]
function comidas(obj, vals){
    obj.comida= vals;
}

function frase(obj,val){
    obj.fraseFavorita=val;
}
console.log(persona);
//Ejercicio Contador de velocidad promerdio
//averageSpeed function
//Regresar una funcion ´funcionhija´
//Recibe un solo parametro numerico, que es la velocidad
//Esa funcion regresa la velocidad promedio;
//Cada vez que mande llamar a la funcion hija debe tomar el parametro velocidad y calcular
//la velocidad promedio

function averageSpeed() {
    let counter=0;
    let store=0;
    // funcionHija(velocidad);

    let hija;
    hija= function funcionHija(vel) {
       // let  counter=0;
        counter++;
        store+= vel;
        // param+=vel
        // console.log("vel",vel);
        // console.log("Stre",store);
        console.log(counter);
        return (store/counter);
    };
    return hija;
}
let speed = averageSpeed();
let speed2 = averageSpeed();


console.log(speed(100));
console.log(speed(50));
console.log('-',speed2(100));
console.log('-',speed2(50));
// console.log(averageSpeed(50));
