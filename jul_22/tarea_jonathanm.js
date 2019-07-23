function tarea(){
// 3 break
/* ... your code here ... */
//break example 1
for (var x = 0; x < 30; x++){
    for (var y = 0; y < 50; y++){
        for (var z = 0; z < 100; z++){
            if(z == 5){
                console.log("en la iteracion "+z+" sale del ciclo");
                break;
            } 
        }
        if(y == 3){
            console.log("en la iteracion "+y+" sale del ciclo");
            break;
        } 
    }
    if(x == 2){
        console.log("en la iteracion "+x+" sale del ciclo");
        break;
    } 
}
//------------------------------------------------------------------------------------------------
while(z >= 0){
    if (x == 2){
        console.log("Si se rompe aqui, vamos por buen camino");
        break;
    } else if(y == 3){
        console.log("Si se imprime esto, estas haciendolo mal");
    }
    z--;
}
//------------------------------------------------------------------------------------------------
switch (z) {
    case 5: console.log("Este es el valor esperado y aqui se rompe el switch"); break;
    case 2: console.log("Si se imprime esta linea, hay pex"); break;
    case 3: console.log("Teambien hay pex si se imprime esta linea"); break;
    default : console.log("La estas cajeteando"); break; 
}

console.log("End of break examples ");

// 3 continue
/* ... your code here ... */
var text = "";

for (var i = 0; i < 10; i++) {
  if (i == 3 || i == 6) {
    continue;
  }
  text = text + i;
}
console.log("Result of first continue "+text);
//------------------------------------------------------------------------------------------------

var i = 0;
var n = 0;

while (i < 5) {
  i++;

  if (i === 3) {
    continue;
  }

  n += i;
  //console.log(n);
}
console.log("Result of second continue: "+n);

//------------------------------------------------------------------------------------------------

var i = 0;
var j = 8;

while (i < 4) {
  console.log('i: ' + i);
  i += 1;

  checkj: while (j > 4) {
    console.log('j: ' + j);
    j -= 1;

    if ((j % 2) == 0)
      continue checkj;
    console.log(j + ' is odd.');
  }
  console.log('i = ' + i);
  console.log('j = ' + j);
}

console.log("End of continue examples ");

// 3 if else
/* ... your code here ... */

var x=3;
var y=9;

if (x == 4){
 console.log("X vale: "+ x);
} else {
    console.log("Y vale: "+y)
}

//------------------------------------------------------------------------------------------------

var z = 1;

while(z <= 5){
    if (z != 5){
        console.log("Aun no se termina el ciclo");
    } else{
        console.log("Aqui termina el ciclo");
    }
 z++;   
}

//------------------------------------------------------------------------------------------------

var z = true;
var cont=0;
while (z){
    if (cont < 7){
        cont++;
        console.log("Contador incrementando: "+cont);
    }else {
        z = false;
    }
}
console.log ("Z value: "+ z);

console.log("End of if else examples ");
// 3 switch
/* ... your code here ... */

switch (cont){
    case 1: console.log("Este no fue el valor final de cont: 1"); break;
    case 3: console.log("Este tampoco fue el valor final de cont: 3"); break;
    case 7: console.log("Este es el valor final de cont: "+cont); break;
    default: console.log("Ya ni modo, sigue participando");
}
//------------------------------------------------------------------------------------------------
switch (z){
    case true: console.log("Este no fue el valor final de z: "+z); break;
    case false: console.log("Este es el valor final de z: "+z); break;
    default: console.log("Ya ni modo, sigue participando");
}
//------------------------------------------------------------------------------------------------

var rec ;
var rec1 = typeof (rec);

switch (rec1){
    case 'number': console.log("Este no fue el valor final: "+rec1); break;
    case 'string': console.log("Este es el valor final: "+rec1); break;
    case 'object': console.log("Este no fue el valor final: "+rec1); break;
    case 'boolean': console.log("Este es el valor final: "+rec1); break;
    case 'undefined': console.log("Este es el valor final: "+rec1); break;
    default: console.log("Ya ni modo, sigue participando");
}

console.log("End of switch examples ");
// 3 try...catch (2 throw)
/* ... your code here ... */

try {
 temp60;
}catch (error){
    console.error(error);
}

//------------------------------------------------------------------------------------------------

var w;

try{
    if (w == undefined){
        throw undefined;
    }
}catch (e){
    console.log(e);
}

//------------------------------------------------------------------------------------------------

var rt = 'NaN';

try{
    if (isNaN(rt)){
        throw rt;
    }
}catch (e){
    console.log("not a number");
}

console.log("End of tryCatch examples ");

// 3 let
/* ... your code here ... */

var z ;
var cont2= 1;
    if (z){
        let z = 30;
        console.log("imprimiendo el valor de z como let: "+z)
        cont2++;
    }

//------------------------------------------------------------------------------------------------

var z ;
var cont2= 1;

var bar = 1000;

for (var z = 0; z <= 5; z++){
    console.log("Valor de Bar inicial declarado con var: "+bar);
    if(z > 3){
        let bar = 25;
        console.log("Valor de Bar inicial declarado con var: "+bar);
    }
    for(var x = 0; x<= 5; x++) {
        console.log("Valor de Bar declarado con let en el primer for: "+bar);
        if(x > 4){
            let bar = 656;
            console.log("Valor del bar declarado con let en el segundo for: "+bar);
        }
    }
}
//------------------------------------------------------------------------------------------------

var x=undefined;

if (x == undefined){
    if (x == undefined){
        let x = 10;
        if (x == 10){
            let x = 20;
            if (x == 20){
                let x = 30;
                console.log("ultimo valor asignado a x con let: "+x);
            }
            console.log("penultimo valor asignado a x con let: "+x);
        }
        console.log("primer valor asignado a x con let: "+x);
    }
    console.log("Valor inicial de X: "+x);
}

console.log("End of let examples ");
// 3 const
/* ... your code here ... */

const numero= 34;
const str = "letras";
const bool= true;

console.log("End of const examples ");

// 3 function
/* ... your code here ... */

suma();

//------------------------------------------------------------------------------------------------

resta();

//------------------------------------------------------------------------------------------------

var letter = "esto es una cadena";
var resp = concatenar(letter);
console.log(resp);

// 3 do while
/* ... your code here ... */

var x = 0

do {
console.log("primer ejemplo de doWhile");
x++;
} while(x < 5);

//------------------------------------------------------------------------------------------------

var arry = [1,2,3,4,5];
var x = 0;
do {
console.log(arry[x]);
x++;
}while(arry[x]);

//------------------------------------------------------------------------------------------------

x--;
do {
    console.log(arry[x]);
    x--;
    }while(arry[x]);

console.log("End of doWhile examples ");

// 3 for
/* ... your code here ... */

for (var x = 0; x < 5; x++) {
console.log("primer ejemplo de While");
} 

//------------------------------------------------------------------------------------------------

var arry = [1,2,3,4,5];
for (var x = 0; x < arry.length; x++) {
console.log(arry[x]);
}

//------------------------------------------------------------------------------------------------

x--;
for (var x = 0; x > arry.length; x--){
    console.log(arry[x]);
    }

console.log("End of For examples ");

// 3 for in
/* ... your code here ... */

var obj = {a: 1, b: 2, c: 3};
    
for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

 //------------------------------------------------------------------------------------------------

var Obj = {num:1,str:'kjhkhuj',boo:true,boo2:false};

for (let temp in Obj){
  console.log(Obj[temp]);
}
  
  //------------------------------------------------------------------------------------------------

  var Obj = {num:1,str:'kjhkhuj',boo:true};

  for (let temp in Obj){
    console.log(temp);
  }

  console.log("End of forIn examples ");

// 3 for of
/* ... your code here ... */

var arry = [10, 20, 30, 40, 50];

for (let value of arry) {
  value += 10;
  console.log(value);
}

//------------------------------------------------------------------------------------------------

var name= 'elJona';

for (var temp of name){
    console.log(temp);
}

//------------------------------------------------------------------------------------------------

var Objct = [3,'kjh',true];

for (let temp of Objct){
    console.log(temp);
}

console.log("End of forOf examples ");

// 3 while
/* ... your code here ... */

var x = 0

while(x < 5) {
console.log("primer ejemplo de While");
x++;
} 

//------------------------------------------------------------------------------------------------

var arry = [1,2,3,4,5];
var x = 0;
while(arry[x]) {
console.log(arry[x]);
x++;
}

//------------------------------------------------------------------------------------------------

x--;
while (arry[x]){
    console.log(arry[x]);
    x--;
    }while(arry[x]);
console.log("End of While examples ");
}

tarea();

function suma(){
    console.log(2+2);
}

function resta(){
    console.log(2-2);
}

function concatenar(cadena){
    return cadena + " esto es la continuacion de la cadena";
}