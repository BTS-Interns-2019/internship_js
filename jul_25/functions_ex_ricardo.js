/*
num = 0;
if(num == 0){
    func = function (){return "Ajalas Bistec";};
}
console.log(func);
*/


var objeto;

var persona = {
    nombre : "",
    direccion:"",
    numero:2,
    ocupacion:"",
    edad:2,
    comidaFavorita:[],
    fraseFavorita:"",
};



function name(objeto, valor){
    objeto.nombre = valor;
}

function adress(objeto, valor){
    objeto.direccion = valor;
}

function number (objeto, valor){
    objeto.numero = valor;
}

function ocupation(objeto, valor){
    objeto.ocupacion = valor;
}

function age(objeto, valor){
    if(valor > 18) objeto.edad = function(){return "hurray!";}
    else{objeto.edad = valor;}
    
}

function favoriteFood(objeto, valor){
    objeto.comidaFavorita = valor;
}

function favoriteFrase(objeto, valor){
    objeto.fraseFavorita = valor;
}

name(persona, "Ricardo");
adress(persona, "Granada 155");
number("7813032");
ocupation(persona, "Developer");
age(persona, 22);
favoriteFood(persona, ["papasALaFrancesa", "Pizza", "Tacos"]);
favoriteFrase(persona, "Ajalas bistec");

console.log(persona);




    

function averageSpeed(){
    let promedio = 0;
    let ite = 0;

        return function funcionHija(numero){
            ite++;
            promedio+=numero; 
            return promedio / ite;
        }
}

let average = averageSpeed();
console.log(average(100));
console.log(average(50));
console.log(average(75));
