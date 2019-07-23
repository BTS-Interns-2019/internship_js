// 3 break
break1 (3);
function break1 (num){
    for (i = 0; i < 8; i ++){
        if (i == 5)
        break;
    }
    return console.log (i + num);
}

break2 ("hola a todos mis amigos");
function break2 (cadena){
 array = cadena.split  (" ");
 for (i = 0; i <= array.length; i ++){
     if (array [i] == "todos"){
     word =  [];
     word = array [i];
     break;
     }
 } 
 return console.log (word);
}
break3 (10)
function break3 (num){
    sum = 0;
    for (i = 0; i <=num; i++){
        sum = sum + i;
        if (sum == 15){
            break;
        }
    }
    return console.log (sum);
}

//3 continue
continue1 (10)
function continue1 (num) {
    sum = 0;
    i= 0;
    while (i <= num){
        i ++;
          if (i == 5){
              continue;
    }
        sum = sum + i;
    }
    return console.log (sum);
}

continue2 ("hola a todos mis amigos")
function continue2 (cadena) {
    array = cadena.split (" ");
    i = -1;
    frase =[];
    while (i <= array.length){
        i ++;
        if (array [i] == "todos"){
            continue;
       }
       frase += array [i] + " ";
       if (array [i] == "amigos"){
           break;
       }
    }
    return console.log (frase);
}

continue3 (5);
function continue3 (num){
    sum = 0;
    for (i = 0; i <=num; i ++){
       if (i == 3){
         continue;
       } 
        sum = sum +i;
    }
    return console.log (sum);
}

//3 if else

ifelse1 (11);
function ifelse1 (num){
    if (num % 2 == 0){
        console.log ("el numero " +num+ " es par");
    }
    else {
       console.log ("el numero " +num+ " es impar"); 
    }
}

ifelse2 ("hola");
function ifelse2 (cadena){
    if (cadena == "hola"){
        console.log ("hola, bonito dia")
    }
    else {
        console.log ("que mal educado")
    }
}

else3 (20);
function else3 (edad){
    if (edad <= 20){
        console.log ("no puedes pasar")
    }
    else {
        console.log ("adelante")
    }
}

//3switch
switch1 (2);
function switch1 (num){
   switch (num){
       case 1:
           console.log ("¿sigues aqui?");
           break;
        case 2:
            console.log ("Esfuerzate mas");
            break;
        case 3:
            console.log ("Ya te falta poco");
            break
        default:
            console.log ("ya te diste por vencido");
            break;            
   }
}

switch2 ('uva');
function switch2 (frutas){
    switch (frutas){
        case 'manzana':
            console.log ("son deliciosas");
            break;
        case 'uva':
            console.log ("tienen sabor acido");
            break;
        case 'pera':
            console.log ("son muy sabrosas");
            break;
        default:
            console.log ("parece que no te gustan las frutas");
            break;            
    }
}

switch3 ("perro");
function switch3 (animal){
    if (isNaN (animal)){
    switch (animal){
        case 'perro':
            console.log ("puede entrar a la casa");
            break;
        case 'gato':
            console.log ("puede entrar a la casa");
            break;
        default:
            console.log ("no puede entrar a la casa");
            break;        
    }
} else {
    console.log ("no introdujiste un animal");
}
}

//3 try catch

trycatch1 ("12346");
function trycatch1 (password){
    try{
        if (password.length < 6){
            throw "corto";
        } 
        if (password.length > 10){
            throw "largo";
        }
            console.log ("password evaluado");
    } catch (error){
        console.log ("el password es muy " +error);
    } 
}

trycatch2 ("poiu");
function trycatch2 (num){
    try {
        if (num ==""){
        throw "esta vacio";
    }
    if (isNaN (num)){
        throw "es una cadena";
    }
    console.log ("es un numero");
    } catch (e) {
        console.log (e);
    }
}

trycatch3 (20);
function trycatch3 (edad){
       try {
           if (edad < 18){
               throw "eres menor de edad";
           }
           else {
               throw "eres mayor de edad";
           }
       } catch (e) {
           console.log (e)
       }
}

// 3 let

let1 (20);
function let1 (num){
  if (num <= 20){
      let num = "este no es el numero 10";
      console.log (num)
  }
console.log (num);
}

let2 ("adios a todos");
function let2 (cadena){
    if (cadena){
        let cadena = "hola a todos";
        console.log (cadena);
    }
   console.log (cadena); 
}

let3 (10);
function let3 (num){
if (num){
    let num = 5;
    num = num + 5;
    console.log (num);
}
 console.log (num + 15);
}

//3 const

const1 (5);
function const1 (num){
    const PI = 3.141592;
    return console.log (PI +" por " +num+ " es " +(num * PI));
}

const2 ("muy bien")
function const2 (cadena){
    const frase = "lo hiciste";
    return console.log (frase + " " +cadena);
}

const3 (8);
function const3 (num){
    const frase = "este numero es";
    return console.log (frase + " " + num);
}
//3 function

function1 (5, 6);
function function1 (num1, num2){
    suma = num1 + num2;
    return console.log (suma)
}

function2 ("hola", "amigos");
function function2 (fras1, fras2){
    return console.log (fras1  + " " + fras2);
}

function3 (10, 20);
function function3 (num1, num2){
    return console.log (num1 + num2);
}

//3 dowhile

dowhile1 (5);
function dowhile1 (num){
    i = 1;
    do {
        console.log (i)
        i ++;
    } while (i <= 5);
}

dowhile2 ("raul,luis,jose");
function dowhile2 (cadena){
    array = cadena.split (",");
    i = 0;
    do {
        console.log (array [i]);
        i ++;
    } while (i < array.length);
}

dowhile3 (5);
function dowhile3 (num){
    i = num;
    do{
        console.log (i);
        i --;
    } while (i > 0);
}

// 3 for

for1 (5);
function for1 (num){
    for (i = 1; i <= num; i ++){
        console.log (i);
    }
}

for2 ("raul,luis,jose");
function for2 (frase){
    array = frase.split (",");
    for (i = 0; i < array.length; i ++){
        console.log (array [i]);
    }
}

for3 (5);
function for3 (num){
    for (i = num; i > 0; i --){
        console.log (i);
    }
}

//3 for in

forin1 ('enero');
function forin1 (mes){
    var diasmes = {
        enero: 31, 
        febrero: 28, 
        marzo: 31, 
        abril: 30, 
        mayo: 31
        }
        for (var mes in diasmes){
            console.log ("mes: " + mes + " dias: " + diasmes[mes]);
        }
}

forin2 ("lunes");
function forin2 (dia){
    var diassem = {
        lunes: 1, martes: 2, miercoles: 3, jueves: 4, viernes: 5
    }
     for (var dia in diassem){
         console.log ("dia: " + dia + " dia semana: " + diassem[dia]);
     }
}

forin3 ("david");
function forin3 (nombre){
    var edad = {
        david: 34, edgar: 35, luis: 25, sergio: 32
    }
    for (var nombre in edad){
        console.log ("nombre: " +nombre+ " edad: "+edad[nombre]);
    }
}

//3 for of

forof1 ("azul");
function forof1 (color){
    for (let value of color){
    console.log (value);
    }
}

forof2 ("6789");
function forof2 (num){
    for (let value of num){
        console.log (value);
    }
}

forof3 ("ya me fui");
function forof3 (argument){
    for (let value of argument){
        console.log (value);
    }
} 

// 3 while

while1 (5);
function while1 (num){
    i = 1;
    while (i <= 5){
        console.log (i);
        i ++;
    }
}

while2 ("raul,luis,jose");
function while2 (frase){
    array = frase.split (",");
    i = 0;
    while (i < array.length){
        console.log (array [i]);
        i ++;    
    }
}

while3 (5);
function while3 (num){
    i = num;
    while (i > 0){
        console.log (i);
        i --;
    }
}


