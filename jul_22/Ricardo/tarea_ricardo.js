// 3 break

console.log("For with break 1");
for(let i = 1 ; i <= 5; i++ ){
    console.log("break 1 " + i);
    if(i == 3) break;
}

console.log("While with break 2");
var a = 0, b= 5;
while( a < b){
    a+=1;
    console.log("Break 2 " + a);
    if(a == 3) break;
}


a = 0; b = 5;
console.log("While with break 3");
do{
    a+=1;
    console.log("break 3 " + a)
    if(a == 3) break;
}while (a < b);




// 3 continue 

console.log("For with Continue 1");
for(let i = 1 ; i <= 5; i++ ){
    if(i == 3) continue;
    console.log("Continue 1 " + i);
}

console.log("While with Continue 2");
var a = 0, b= 5;
while( a < b){
    a+=1;
    if(a == 3) continue;
    console.log("Continue 2 " +a );
}


a = 0; b = 5;
console.log("While with Continue 3");
do{
    a+=1;
    if(a == 3) continue;
    console.log("Continue 3 " +a)
}while (a < b);


// 3 if else


a=5;
if (a == 5) {
    console.log("If-Else 1");
 } else{
    let resultado = "aqui no pasa nada";
 }


 a = "hola";
 if (a == "hello") {
    console.log("aqui no pasa nada");
 } else if(a == "hola"){
    console.log("If-Else 2");
 }else{
    let resultado = "aqui tampoco pasa nada" ;
 }

 a = "bistec";
 if (a == "hello") {
    console.log("aqui no pasa nada");
 } else if(a == "hola"){
    let resultado = "aqui tampoco pasa nada" ;
 }else if(a == 15){
    let resultado = "aqui tampoco pasa nada" ;
 }else{
    console.log("If-Else 3");
 }


// 3 switch

a == "bistec";
switch (a) {
    case 'pollo':
      console.log('Uso alimentos para este ejemplo por que tengo hambre');
      break;
    case 'bistec':
      console.log('switch 1');
        break;
        default: ;
}

var text;
a = 1;
switch (a) {
    case 6:
      text = "Aqui no hace nah";
      break; 
    case 0:
      text = "Ni aqui";
      break; 
    default: 
      text = "Switch 2";
  }
  console.log(text);

  switch (new Date().getDay()) {
    case 6:
      text = "Today is Saturday";
      break;
    case 0:
      text = "Today is Sunday";
      break;
    default:
      text = "Switch 3";
  }
  


// 3 try...cathc (2 throw)
/* ... your code here ... */

palabras5 = ["palabra1", "palabra2", "palabra3", "palabra4", "palabra5","palabra6"];
try {
    for(i in palabras5){
        if(palabras5.length > 5 ) throw new Error("Try Catch 1");
    }
  }
  catch(e) {
    console.error(e.message);
  }


try{
    var ponnumero = 115;
    var hola = 0;
    while(hola < ponnumero){
        hola+=1;
        if(hola == 100){throw new Error("Try Catch 2");}
    }
    }
    catch(e){
        console.error(e.message);
    }

    function calcularIVA (a) {
        if(typeof a == "number"){
            return "Gracias por ingresar un número";
        }else{
            throw new Error("Try Catch 3")
        }
        }
        try{
            console.log(calcularIVA("A"));
        }
         catch(e){
             console.error(e.message)
         }
        

// 3 let

etiqueta:{
    let elLet1 = "Let 1"
    console.log(elLet1);
}

for(let elLet2=0; elLet2<1;elLet2++){
    console.log("Let 2");
}

a="bistec";
if (a == 5) {
    console.log("Aqui no pasa nada");
 } else{
    let elLet3 = "Let 3";
    console.log(elLet3);
 }
 
// 3 const

const constante1 = "Const 1";
console.log(constante1);

etiqueta2:{
    const constante2 = "Const 2"
    console.log(constante2);
}

const constante3 = 1;
for(let x = 0; x < constante3 ; x++ ){
    console.log("Const 3");
}

// 3 function
/* ... your code here ... */
function funcion1(num) {
    a = num * num;
    if(a==4) console.log("Funcion 1"); 
  }
  funcion1(2)

  function funcion2(number) {
    return console.log("funcion 2");
  }
funcion2();

function funcion3(number){
    console.log(number);
}
funcion3("Funcion 3");

// 3 do while
a=0;
do {
    i = "do while ";
    result = i + "1";
    console.log(result);
    a++
  } while (a < 1);

  i=1, a=0;
  do {
    a++;
    i++;
    if(a ==3) console.log("Do while 2");
  }
  while (i < 5);

  do {
    console.log("Do while 3");
  }
  while (i < 5);
  

// 3 for

for (var i = 0; i < 9; i++) {
    console.log("For 1");
    
 }

for( var l = 0; l < 3 ; l++){
    i++;
    a++;
    console.log("for 2");
}


for(let i = 1 ; i <= 5; i++ ){
    console.log("For 3 " + i);
    if(i == 3) break;
}


// 3 for in

var obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
  console.log("For in 1");
}

var lol=["For", "in 2"];
for(i in lol){
    console.log(lol[i]);
}

var tipo = {lol:"for", ll:"in", n:3}; 

var text = "";
var x;
for (x in tipo) {
  text += tipo[x] + " ";
}
console.log(text);

// 3 for of
let iterable = ["For", "of", "1"];

for (let value of iterable) {
  console.log(value);
}

iterable = "for of 2";

for (let value of iterable) {
  console.log(value);
}

iterable = "For of 3";

a="";
for (let value of iterable) {
  a += value;
}
console.log(a);


// 3 while

n = 0;
x = 0;
while (n < 3) {
    n++
console.log("While 1");
}

while (i < 10) {
    i++;
    if(i==5) console.log("While 2");
  }
i=0;
  while (i != 1){
      i+=0.5;
      console.log("While 3");
      
  }