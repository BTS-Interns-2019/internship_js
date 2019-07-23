//3.1 break
//3.1.1
facto(3)
function facto(factorial) {
  n = factorial;
  for (var i = 1; ; i++) {
    if (i === factorial) {
      break
    }
    n = n * i;
    }
  return console.log("3.1.1 El factorial de "+factorial+" es "+n);
}
// 3.1.2
var suma = 0;
for (var i = 1; ; i++) {
  suma = suma + 6;
  if (i === 8) {
    break
  }
}
console.log("3.1.2 6 por 8 es "+suma);
// 3.1.3
var i = 0;
while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}
console.log("3.1.3 Se hizo un break en el contador "+i);

// 3.2 continue
// 3.2.1
var text = "";
for (var i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}
console.log("3.2.1 Se hizo un continue en 3, "+text);
// 3.2.2
var text = "";
for (var i = 0; i < 10; i++) {
  if (i%2 ===0) {
    continue;
  }
  text = text + i;
}
console.log("3.2.2 Se hizo un continue en los numeros pares "+text);
// 3.2.3
var text = "";
for (var i = 0; i < 10; i++) {
  if (i%2 != 0) {
    continue;
  }
  text = text + i;
}
console.log("3.2.2 Se hizo un continue en los numeros impares "+text);

//3.3 if else
//3.3.1
function testNum(a) {
  if (a > 0) {
    return a+" es número positivo";
  } else {
    return a+" es número negativo";
  }
}
console.log("3.3.1 "+testNum(-5));
// 3.3.2
function Nom(nombre) {
  if (nombre==="Martin") {
    return console.log("3.3.2 Te llamas Martin");
  } else {
    return console.log("3.3.2 No te llamas Martin");
  }
}
Nom("David")
// 3.3.3
function par(par){
  if(par%2 == 0){
    return console.log("3.3.3 "+par+" es par");
  } else {
    return console.log(par+"es impar");
  }
}
par(26)

// 3.4 switch
// 3.4.1
var opcion = "Helado";
switch (opcion) {
case "Helado":
   console.log("3.4.1 Elegiste Helado");
   break;
default:
   console.log("Elige algo");
}
// 3.4.2
var option = "a";
switch (option) {
case "a":
   console.log("3.4.2 Opción A");
   break;
case "b":
   console.log("3.4.2 Opción B");
   break;
default:
   console.log("Elige algo");
}
// 3.4.3
var opt = [];
switch (opt) {
case 1:
   console.log("Caso 1");
   break;
default:
   console.log("3.4.3 Default");
}

// 3.5 try catch throw
// 3.5.1
function area(b,h) {
  if (isNaN(b) || isNaN(h)) {
    throw "3.5.1 Error: El parámetro no es un número";
  } else {
    return b*h
  }
}
try {
  area(3,'h');
} catch(e) {
  console.log(e);
}
// 3.5.2
function nombre(nombre) {
  if (nombre==="David") {
    return console.log("Te llamas David");
  } else {
    throw "3.5.2 Error: No te llamas David";
  }
}
try {
  nombre("Martin");
} catch(e) {
  console.log(e);
}
// 3.5.3
const bln = false;
function constante(bln) {
  bln = true;
  throw "3.5.3 Error: La variable es constante";
}
try {
  constante(false) 
} catch(e) {
  console.log(e);
}

// 3.6 let
// 3.6.1
let x = 1;
if (x === 1) {
  let x = 10;
}
console.log("3.6.1 No se puede cambiar número: "+x);
// 3.6.1
let y = "Hola";
if (y === "Hola") {
  let y = "Adiós";
}
console.log("3.6.2 No se puede cambiar carácter: "+y)
// 3.6.3
let z = false;
if (z === false) {
  let z = true;
}
console.log("3.6.3 No se puede cambiar booleano: "+z)

// 3.7 const
// 3.7.1
const number = 666;
try {
  number = 99;
} catch(e) {
  console.log("3.7.1 "+e);
}
// 3.7.2
const string = "David";
try {
  string = "Martin";
} catch(e) {
  console.log("3.7.2 "+e.name);
}
// 3.7.3
const boolean = true;
try {
  boolean = false;
} catch(e) {
  console.log("3.7.3 "+e.message);
}

//3.8 function
// 3.8.1
funcion()
function funcion() {
  return console.log("3.8.1 Esta función no tiene parámetros de entrada")
}
// 3.8.2
function name(nom) {
  return console.log("3.8.2 Te llamas "+nom)
}
name("David")
// 3.8.3
function Area(b,h) {
  return b*h
}
console.log("3.8.3 El área mide "+Area(3,6)+"m^2")

// 3.9 do while
// 3.9.1
var i = 0;
do {
  i = i + 1;
} while (i < 5);
console.log("3.9.1 Do while para en "+i);
// 3.9.2
var i = 0;
do {
  i = i + 1;
} while (i > 5);
console.log("3.9.2 Do while para en "+i);
// 3.9.3
var result = "";
var i = 0;
do {
  i = i + 1;
  result = result + i;
} while (i < 5);
console.log("3.9.3 Do while forma el string "+result);

// 3.10 for
// 3.10.1
var counter = 0;
for (var i = 0; i < 9; i++) {
  counter++;
}
console.log("3.10.1 El contador total es "+counter);
// 3.10.2
var suma = 0;
for (var i = 1; ; i++) {
  suma = suma + 5;
  if (i === 7) {
    break
  }
}
console.log("3.10.2 5 por 7 es "+suma);
// 3.10.3
factorial(5)
function factorial(factorial) {
  n = factorial;
  for (var i = 1; ; i++) {
    if (i === factorial) {
      break
    }
    n = n * i;
    }
  return console.log("3.10.3 El factorial de "+factorial+" es "+n);
}

// 3.11 for in
// 3.11.1
var string1 = "";
var object1 = {a: 1, b: 2, c: 3};
for (var property1 in object1) {
  string1 += object1[property1];
}
console.log("3.11.1 "+string1);
// 3.11.2
var string1 = "";
var object1 = {a: "a", b: "b", c: "c"};
for (var property1 in object1) {
  string1 += object1[property1];
}
console.log("3.11.2 "+string1);
// 3.11.3
var string1 = "";
var object1 = {a: true, b: false, c: true};
for (var property1 in object1) {
  string1 += object1[property1];
}
console.log("3.11.3 "+string1);

// 3.12 for of
// 3.12.1
let iterable = [10, 20, 30];
result = ""
for (const value of iterable) {
  result+=value+" "
}
console.log("3.12.1 "+result);
// 3.12.1
let itera = [10, 20, 30];
result = ""
for (let value of itera) {
  result+=value+1+" "
}
console.log("3.12.2 "+result);
// 3.12.2
let iter = "hey";
result = ""
for (const value of iter) {
  result+=value+" "
}
console.log("3.12.3 "+result);

// 3.13 while
// 3.13.1
var n = 0;
while (n < 3) {
  n++;
}
console.log("3.13.1 Se detiene en "+n);
// 3.13.2
var cars = ["BMW", "Volvo", "Honda", "Ford"];
var i = 0;
var text = "";
while (cars[i]) {
  text += cars[i] + " ";
  i++;
}
console.log("3.13.2 "+text)
// 3.13.3
contador = 5;
outer_block:{
for (var i = 0; ; i++) {
  contador--
  while (contador < 0){
    console.log("3.13.3 While hace break en la itración "+i)
    break outer_block;
  }
}
}
