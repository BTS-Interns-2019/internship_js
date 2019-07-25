//# functions

//```js
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

const elCholo = {
    nombre: "Chino",
    direccion: "La Jalisco",
    numero: 3312345678,
    ocupacion: "Ingeniero",
    edad: 30,
    comidaFav: ["chilaquiles","pozole", "enchiladas"],
    fraseFav: "Hola ese!"
}
console.log(elCholo)

function rename(obj, newVal){
    obj.nombre = newVal
}  
rename(elCholo, "Silvestre Ramiro Sanchez")

function reDirect(obj, newVal){
    obj.direccion = newVal
}
reDirect(elCholo, "Chapalita #999")

function newNum(obj, newVal){
    obj.numero = +newVal
    
}
newNum(elCholo, "01889928344")

function newJob(obj, newVal){
    obj.ocupacion = newVal
    
}
newJob(elCholo, "Ingenieria en aeronautica")

function newAge(obj, newVal){
    obj.edad = +newVal
    // let hurray = obj.edad >= 18 ? (function(){ return "Hurray!!"})() 
    
    if(obj.edad >= 18){
        (function(){ return "Hurray!!!!!" })()
    }
}
newAge(elCholo, 35)

const newFood = ["caviar", "roast beef", "salmon"]
function newTaste(obj, newVal){
    obj.comidaFav = newFood
    
}
newTaste(elCholo, newFood)

function fraseFavo(obj, newVal){
    obj.fraseFav = newVal
    
}
fraseFavo(elCholo, "On ne sait jamais!")

console.log("---------- El nuevo hombre ----------------------------")
console.log(elCholo)

//# crea un contador de velocidad promedio.

/**   Nombre de la funcion "averageSpeed"
 *    regresa una funcion que recibe un solo parametro numerico, que es la velocidad
 *    esa funcion regresa la velocidad promedio.
 *    cada vez que mande llamar la funcion hija debe tomar el parametro de la velocidad y calcular la nueva
 *    velocidad promedio
 */

// `let average = averageSpeed()
// average(100); //100
// average(50); // 75
//average(75); //75
//`


function averageSpeed(vel){
    let i = 0
    let prom = promedio
    let res = 0
      function promedio(speed){
        i++
        res += speed
        return res/i
      }
    return prom
  }
  
  let average = averageSpeed()
  
  console.log(average(100))
  console.log(average(50))
  console.log(average(75))