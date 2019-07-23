// # Tarea 22 jul
// Estructuras de control y definición de variables

// crear archivo `tarea_<nombre>.js` en su propia branch con el siguiente formato

// 3 break

for(let i = 0; i < 10; i++){
    if (i == 5) {
        break;        
    }
    console.log(i);
}
for(let i = 0; i < 10; i++){
    console.log('a' + i);
    if (i == 5) {
        for (let x = 0; x < 10; x++) {
            console.log('b' + x);
               if(x == 5){
                    break;
               }
        }        
    }
}
while(true){
    console.log('hola');
    break;
}

// 3 continue
let casa = ["a", "b", "c", "d", "f"]
for(let i = 0; i < casa.length; i++){
    if(casa[i] == "c"){continue;}
    console.log(casa[i]); 
}
for(let i = 0; i < 8; i++){
        if (i == 5) {
            continue;        
        }
        console.log(i);
}
for (let i = 8; i > 5; i--) {
    if(i == 6){
        continue;
    }
    console.log(i);
    
}
// 3 if else

var array = ["a", "b", "c", "d", "e"];
for (let arr = array.length - 1 ; arr > 0; arr--) {
    if(array[arr] == "d"){
        console.log("d fue eliminado");
        arr--;               
    }else {
        if(array[arr] == "b"){
            console.log("b fue eliminado");
            arr--; 
        }
    }
    console.log(array[arr]);    
}
var pago = 300;
if(pago > 0 && pago < 200){
    console.log("su pago fue " + pago);    
}else{
    console.log("su pago fue " + pago);
}
var color = "azul";
if(color == "red"){
    console.log("Muy bien");
}else{
    console.log("El color debe de ser rojo");
    
}


// 3 switch
var prueba = "b";
switch (prueba){
    case "a":
        console.log("Este es el plan a");        
    break;
    case "b":
        console.log("Este es el plan b");
    break;
    case "c":
        console.log("Este es el plan c");
    break;
    default:
        console.log("Se te acabron los planes");
}
var sig = "/";
switch (sig){
    case "/":
        console.log("Se va ser una division");        
    break;
    case "+":
        console.log("Se va ser una suma");
    break;
    case "*":
        console.log("Se va ser una multiplicacion");
    break;
    default:
        console.log("Se va restar");
}
var fruta = "manzana";
switch (prueba){
    case "platano":
        console.log("Un platano para un licuado");        
    break;
    case "pera":
        console.log("Pera con tajin");
    break;
    case "papaya":
        console.log("Papaya de selaya");
    break;
    default:
        console.log("No tenemos " + fruta);
}

// 3 try...cathc (2 throw)
/* ... your code here ... */

// 3 let
let a = 20
let b = 10
let c = 0
// 3 const
const contraseña = 1234;
const edad = 32;
const nombre = "nombre";
// 3 function
/* ... your code here ... */
function suma(a,b){
    return a + b;
}
console.log(suma(10, 50));
function potencia(a, b){
    return a ** b;
}
console.log(potencia(5, 2));
function division(a, b){
    return a / b;
}
console.log(division(10,3));

// 3 do while
var i = 4
do{
   console.log(i);
   i--
   
}while(i > 0);
var i = 0
do{
   console.log(i);
   i++
   
}while(i > 4);
var x = 0;
do{
    console.log(x ** 2);
    
    x++
}while(x < 5);
// 3 for
/* ... your code here ... */

// 3 for in

var y = [1, 4, 6, 8]
for(x in y){
    console.log(y[x]);
}
var k = ["nestor", "rabbin", "juana", "samuel"]
for(l in k){
    console.log(k[l]);
}


// 3 for of
var w = ["raul", "moises", "norris", "angeles"]
for(t of w){
    console.log(t);
}
var p = [8, 109, 3, 54]
for(s of p){
    console.log(s);
}

// 3 while
/* ... your code here ... */