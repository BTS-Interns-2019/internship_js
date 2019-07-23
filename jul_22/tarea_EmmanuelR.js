// 3 break

dentener:
for(let i=0; i<10; i++){
  if (i==5) {
    break;  //break para terminar un ciclo
  }
  for(let j=0; j<10; j++){
    //console.log(i,j);
    if (j==8){
      break dentener;   //break dentener;   //para detener lo que está entre la etiqueta y el break
    }
  }
}
let dato="hola";
let x=dato.length;
switch (true){
  case x < 3:
    //console.log("muy chiquito");
    break;    //break para detener un case de un switch
  case x >= 3 && x <= 5: 
    //console.log("perfecto");
    break;    //break para detener un case de un switch
  case x > 5:
    //console.log("muy grande");
    break;    //break para detener un case de un switch
}

// 3 continue

for(let i=0; i<10; i++){
  if (i%2==0) {
    continue;   
  }
  //console.log(i);  
}

let cont=0;
while(cont<5){
  cont ++;
  if (cont==3) {
    continue;
  }
  //console.log(cont);
}

for(let j=0; j<10; j++){  
  continue;
  console.log("holis");  
}

// 3 if else

if(4 > 5){
  //console.log("chido");
}else{
  //console.log("chido del else");
}

if (3 == "3") {
  //console.log("son iguales");
} else {
  //console.log("no son iguales");
}

if (3 === "3") {
  //console.log("son iguales");
} else {
  //console.log("no son iguales");
}

// 3 switch

let sw="1";
switch (sw){
  case "1":
    //console.log("1");
    break;
  case "2":
    //console.log("2");
    break;
  case "3":
    //console.log("3");
    break;
  case "4":
    //console.log("4");
    break;
  default:
    //console.log("mayor de 4");
    break;
}

let dato2="hola";
let y=dato2.length;
switch (true){
  case y < 3:
    //console.log("muy chiquito");
    break;
  case y >= 3 && x <= 5: 
    //console.log("perfecto");
    break;
  case y > 5:
    //console.log("muy grande");
    break;
}

let tercerSwitch=4;
switch (tercerSwitch){
  case 1:
    console.log("imprime 1");
    break;
  case 2:
    console.log("imprime 2 y luego 3");
  case 3:
    console.log("imprime el 3");
    break;
}

// 3 try...cathc (2 throw)

function unDato(dato) {
  try {
      switch (typeof (dato)) {
          case "boolean":
              throw new Error(message = "Error Boleano");
              break;
          case "number":
              throw new Error(message = "Error Numero");
              break;
          case "string":
              throw new Error(message = "Error cadena de carcteres");
              break;
      }
  }catch(e){
      console.log(e.message);        
  }
}
//un Dato (true);

function whileError(dato){
  try{
      if (typeof(dato) != "number"){
          throw ErrorTipo(message = "Tipo de dato invalido");
      }else {
          while (dato>0){
              console.log(dato);
              dato--;                
          }
      }
  }catch(e){
      console.log("Error: "+e.message);        
  }
}
//whileError(3);

function erroneo(dato){
  try {
      if(dato.toLowerCase()=="error")
          console.log("error");          
      else console.log("chido");
  } catch (e) {
      console.log(e.message);                
  }
}
//erroneo ("3");

// 3 let

for(let i=0; i<10; i++){
  if (i==5) {
    break;  //break para terminar un ciclo
  }
  for(let j=0; j<10; j++){
    let i=34;
    //console.log(i,j);
    if (j==8){
      //break dentener;   //para detener lo que está entre la etiqueta y el break
    }
  }
}

let le="fuera";
funLet();
function funLet(){
  let le="dentro";
  //console.log(le);
}
//console.log(le);

for (let primero = 0; primero < 10; primero++) {
  for (let primero = 0; primero < 2; primero++) {
    //console.log(primero);         
  }  
  //console.log(primero);         
}

// 3 const

const pi=3.1416;
for (let i = 0; i < 3; i++) {
  //console.log(pi);  
}

const saludo="Bienvenidos todos";
function sludar(){
  //console.log(saludo);  
}

const cons="fuera";
funCons();
function funCons(){
  const cons="dentro";
  //console.log(cons);
}
//console.log(cons);

// 3 function

funCons();
function funCons(){
  const cons="dentro";
  //console.log(cons);
}

imprimir("imprime desde la funcion");
function imprimir(datp){
    //console.log(dato);    
}

suma(3,6);
function suma (a,b){
    //console.log(a+b);    
}

// 3 do while

do{
    //console.log("desde el do");
}while (false);

let doWhile=3;
do{
    //console.log(doWhile);
    doWhile++;
}while (doWhile<6);

do{
    //console.log(doWhile);
    doWhile++;
}while (doWhile<6);

// 3 for

detenerFor:
for(let i=0; i<10; i++){
    if (i==5) {
      break;
    }
    for(let j=0; j<10; j++){
      //console.log(i,j);
      if (j==8){
        break detenerFor;
      }
    }
}

for(let i=0; i<10; i++){
    if (i%2==0) {
      continue;   
    }
    //console.log(i);  
}

for (let primero = 0; primero < 10; primero++) {
    for (let primero = 0; primero < 2; primero++) {
    //console.log(primero);         
  }  
    //console.log(primero);         
}

// 3 for in

let arr = [1,2,3,4,5]
for (const x in arr) {
    //console.log(x);    
}

arr = [1,2,3,4,5,9]
for (const x in arr) {
    //console.log(arr[x]);    
}

let objeto = {uno: "hola", dos: "como", tres: "estas"};
for (const atributo in objeto) {
  //console.log(`objeto.${atributo} = ${objeto[atributo]}`);
}

// 3 for of

let nombre="Emmanuel";
for (const letra of nombre) {
    //console.log(letra);    
}

let numero=123434321;
for (const caracter of numero.toString().slice('')) {
    //console.log(caracter);    
}

for (const posision of arr) {
    //console.log(posision);    
}

// 3 while

cont=0;
while(cont<5){
  cont ++;
  if (cont==3) {
    continue;
  }
  //console.log(cont);
}

while (false){
    //console.log("desde el do");
}

let numerito =3;
while (numerito<6){
    numerito++;
    //console.log(numerito);    
    break
}