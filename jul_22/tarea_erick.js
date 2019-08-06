// 3 Break
// 1
for(let x = 0; x <= 10; x++){
    if(x === 9){
        break
    }
} 

//2

for(let a = 100; a > 50; a--){
    if(a === 72){
        console.log(a)
        break
    }
}

//3

for(let b = 0; b<= 10; b++){
    console.log(b+(b+1))
    if(b===5){
        break
    }
}

//3 Continue

let con1 = [1,2,3,4,5]
let sumcon1 = 0
for(num of con1){
    sumcon1+=num
    if(num===3){
        continue
    }
}

for(let a = 0; a<=10;a++){
    if(a===0){
      continue 
      a=+1   
    }
}

let i = 0
let n = 0
while(i<5){
    i++
    if(i===3){
        continue;
        n++;
    }
}

//3 if else

let arr = ["perro", "gato", "raton", "pez"]
if(arr.length === 5){
    console.log(arr)
}
else{
    console.log(arr)
}

for(let x = 0; x <= 50; x++){
    if(x % 2 === 0){
        console.log(x)
    }
    else{
        console.log(x)
    }
}

let nombre = "Canuto"
if(typeof nombre == Number){
    console.log(typeof nombre)
}
else{
    console.log("Es: " + typeof nombre)
}

// 3 Switch

switch(3){
    case 1:
        console.log("Enero, Febrero, Marzo")
    break;
    case 2:
        console.log("Abril, Mayo, Junio, Julio")
    break;
    case 3:
        console.log("Los otros demas")
    break;
    default:
        console.log("Que chin...??")
    break;
}

switch(1){
    case 1:
        console.log("Manzana, Papaya, Mango")
    break;
    case 2:
        console.log("Pan, Cereal, Avena")
    break;
    case 3:
        console.log("Pollo, Res, Pescado")
    break;
    default:
        console.log("Papitas, Dulces, chucherias")
    break;
}

switch(2){
    case 1:
        console.log("Cerrado")
    break;
    case 2:
        console.log("Abierto")
    break;
    case 3:
        console.log("Cerrad")
    break;
    default:
        console.log("Cerrado")
    break;
}

// 3 try - catch

function namify(nom, ap){
    let comp = nom + ap
    if(typeof comp == String){
        return comp 
    }
    else{
        throw "incorrect value"
    }
}
try{
    namify(1,2)
}
catch(error){
    console.log(error + " Try again please")
}

function drinDrunk(num){
    if(num < 21){
        throw "Not drinkink age"
    }
    else{
        return "Please, come in..."
    }
}
try{
    drinDrunk(16)
}
catch(not){
    let errormsg = " Get the fuck up!"
    console.log(not + errormsg)
}

class Bug {
    constructor(bite, name,){
        this.bite = bite,
        this.name = name
    }
}

let spider = new Bug(true, "Spider")
let butterfly = new Bug(false, "Butterfly")
let worm = new Bug(false, "Wormy")


function dangerAlert(str){
    let danger = str+"!!"
    for(let i = 0; i <= str.length; i++){
     danger += " Its dangerous!!!"
    }
    return danger
}


function buggies(bug){
    if(bug.bite !== true){
        return "Yay!"
    }
    else { 
        throw bug.name
    }
}

try{
    let bug = spider
    buggies(bug)
}
catch(itdoes){   
    console.log(dangerAlert(itdoes))
}

// 3 let

let number = "Kokoro"
function change(){
    let number = "corazon"
    return number
}  
console.log(number, change())

var uno = 1
function nothing(){
    let uno = 30
    return uno
}
console.log(uno, nothing())

let m = 5
for(let m = 0; m <= 10; m++){
    console.log(m)
}
console.log("Outer m: " + m)

// 3 function

function oNe(){
    return 1+1
}

function tWo(){
    return "2" + 2
}

function tHree(){
    return !!true
}

//do-while

var text = "";
var ip = 0;
do {
  text += "The number is " + ip;
  ip++;
}
while (ip < 5);

var aca = 1
do{
    
    aca++
}
while(aca < 10);

let debth = 100
let free = false
do{
    
    debth -- 
}
while(debth > 20)



//for in

var persona = {name: "Harry", lname:"Potter", age:39}

var info =""
for(x in persona){
    info +=x.value
    console.log(info)
}

let frutas = ["melon", "sandia", "mango"]
var licuado = ""
for(a in frutas){
    licuado += a
}

var numos = [1,2,3,4,5]
var sumos = 0
for(j in numos){
    sumos += j
}

//for of

let cosas = "simples"
let muertas = ""
for(l of cosas){
    muertas += l
}

let superM = ["leche", "huevo", "papel"]
let lista = ""
for(c of superM){
     lista =+ c
}

console.log("Final")


    
