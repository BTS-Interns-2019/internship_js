//functions





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



function Main2(){
    var objFunc = {nombre:"",direccion:"",numero:"",ocupacion:"",edad:"",comida:"",frase:""};
    
    nombre(objFunc,'Jacinto de la laguna');

    direccion(objFunc,'Lomas Turbas');

    numero(objFunc,561);

    ocupacion(objFunc,'Operador de tractocamion');

    edad(objFunc,16);

    comida(objFunc,'Tortas gema');

    frase(objFunc,'que es javascript?');

   //console.log(objFunc);
}
Main2();

function nombre(objFunc, val){
    objFunc.nombre = val;
}

function direccion(objFunc, val){
    objFunc.direccion = val;
}

function numero(objFunc, val){
    objFunc.numero = val;
}

function ocupacion(objFunc, val){
    objFunc.ocupacion = val;
}

function edad(objFunc, val){
    if (val >= 18){
        objFunc.edad = {function(val){(val >= 18)?  val : 'hurray!'}}
    } else{
    objFunc.edad = val;
    }
}

function comida(objFunc, val){
    objFunc.comida = val;
}

function frase(objFunc, val){
    objFunc.frase = val;
}


/*Crear un contador de velocidad promedio
nombre de la funcion pare 'averageSpeed'
regresar una funcion 'funcionHija' que recibe un solo parámetro numérico, que es la velocidad
*esa funcion regresa la velocidad promedio;
*cada vez que mande llamar la funcion hija debe tomar el parametro de la velocidad 
y calcular la nueva velocidad promedio
let average = averageSpeed();
average(100); // 100
average(50);  // 75
average(75);  // 75*/

    var cont = 0, numTemp = 0;
    var averageSpeed = function (num){
        cont++;
        if (cont === 0){
            return num;
        } else{
            numTemp+=num;
            return numTemp/cont;
        }  
    };    

   var average = averageSpeed; 

    console.log(averageSpeed(1000));
    console.log(averageSpeed(50));
    console.log(averageSpeed(100));
    console.log(averageSpeed(500));

    console.log(average(100));
    console.log(average(50));
    console.log(average(100));
    console.log(average(500));