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

//crear un contador de velocidad promedio
//nombre: averageSpeed
/*regresa una funcion 'funcionhija' qie recibe un solo parametro numerico, 
que es la velocidad...
esa funcion regresa la velocidad promedio:
cada vez que mande llamar la funcion hija debe tomar el parametro de la
velocidad y calcular la nueva velocidad promedio//*/

function averageSpeed(velo){
    var e = 0;
    var total= 0;
    var f = function funcionHija(velo){
        total += velo;
        e++;
        return total/e;
    }
    return f;
}
console.log(averageSpeed(100));
console.log(averageSpeed(50));
console.log(averageSpeed(75));
