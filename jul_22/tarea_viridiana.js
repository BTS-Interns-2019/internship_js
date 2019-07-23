// 3 break
//1
function exampleBreak1() {
    var i = 1;
    var x=3
    while (i < 6) {
       if (i == 3)
          break;
       i++;
    }
    console.log(i*x)
 }
 exampleBreak1()

 //2

 var x = 1;
        console.log("Entering the loop");
           while (x < 20) {
            if (x == 5) {
               break;  
            }
            x = x + 1;
            console.log(x);
         }         
         console.log("Exiting the loop!");

//3

var a = "";
var i;
for (i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log("The number is " + i);
}

// 3 continue
//1
var x = 1;
            console.log("Entering the loop");
         
            while (x < 10) {
               x = x + 1;
               
               if (x == 5) {
                  continue;   
               }
               console.log( x);
            }         
            console.log("Exiting the loop!");

//2
var x = ""
var i;
for (i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log("The number is " + i);
}

//3
var ropa = ["pantalon", "Camisa", "Sueter", "Gorra"];
var x = ""
var i;
for (i = 0; i < ropa.length; i++) {
  if (ropa[i] === "pantalon") {
    continue;
  }
  console.log( ropa[i] );
}

// 3 if else
//1
var edad=18;
if(edad>=18){
    console.log("Eres mayor de edad")
}else{
    console.log("Eres menor de edad")
}
//2
var numero1=23 
var numero2=63 
if (numero1 == numero2){ 
   console.log("Los dos números son iguales") 
}else{ 
   if (numero1 > numero2) { 
      console.log("El primer número es mayor que el segundo") 
   }else{ 
      console.log("El primer número es menor que el segundo") 
   } 
}
//3
var horas = new Date().getHours(); 
if (horas < 10) {
  console.log("Good morning");
} else if (horas < 20) {
  console.log("Good day");
} else {
  console.log("Good evening");
}

// 3 switch
//1
var vegetales = "Lechuga"
switch (vegetales) {
    case "Jitomate":
      console.log(" A comer Jitomate!");
      break;
    case "Lechuga":
      console.log("A comer Lechuga!");
      break;
    case "Pepino":
      console.log("A comer Pepino!");
      break;
    default:
      console.log('Selecciona un vegetal!');
      break;
  }
  //2
  var programacion = "JavaScript"
switch (programacion) {
    case "HTML":
      console.log(" HTML!");
      break;
    case "JavaScript":
      console.log("JavaScript!");
      break;
    case "CSS":
      console.log("CSS!");
      break;
    default:
      console.log('Selecciona un lenguaje!');
      break;
  }
//3

var ciudades = "Guadalajara"
switch (ciudades) {
    case "Leon":
      console.log(" León esta muy limpio !");
      break;
    case "Guadalajara":
      console.log("La ciudad mas bonita es Guadalajara!");
      break;
    case "Ciudad de México":
      console.log("Es enorme Ciudad de México!");
      break;
    default:
      console.log('Selecciona un lenguaje!');
      break;
  }

// 3 try...cathc (2 throw)
/* ... your code here ... */

// 3 let


// 3 const
/* ... your code here ... */

// 3 function
//1
function numeros(x) {
  if (x >= 10) 
     return;

  console.log(x + 1); 
}
numeros(0);

//2

function cuadrado1(a,b) {
  function cuadrado2(x) {
     return x * x;
  }
  return cuadrado2(a) + cuadrado2(b);
}

a = cuadrado1(2,3);

//3
function multiplicacion(x, y) {
  console.log(x * y) ;
}

multiplicacion(5,10)

// 3 do while
/* ... your code here ... */

// 3 for
//1
function divisibleBy(array, num){
    let result = [];
    for(let i=0; i<array.length; i++){
      if(array[i]%num===0){
        result.push(array[i]);
      
      }
    }
    return result;
  
  }

  divisibleBy([2,5,6,7,9,10,15,20],3)
  //2

  var entrada = "Viridiana";
var entradaInvertida = "";
   
//Itero la cadena de manera inversa
for(var i = entrada.length-1; i>=0; i--)
{
  //Voy concatenando el valor a la cadena resultado
  entradaInvertida+=entrada[i];
}
console.log(entradaInvertida);

//3

// 3 for in
/* ... your code here ... */

// 3 for of
/* ... your code here ... */

// 3 while
//1
function numeros() {
  var i = 1;
  var n=3;
  while (i < 6) {
     if (i == 3)
        break;
     i++;
  }
  console.log(i+n)
}
numeros()

//2
