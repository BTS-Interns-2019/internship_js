// 3 break
console.log("BREAK")
//1
var x = 1
var i = 0;
while (i < 6) {
    if (i === 3)
    break;
    i++;
}
console.log(i * x);
 
//2
var uno = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { 
      break; 
    }
  console.log("El número es..." + i)
}

//3
var y = 2;
var i = 1
while (i < 10) {
    if (i === 8)
    break;
    i++;
}
console.log(i + y);

// 3 continue
console.log("CONTINUE")
//1
var frutas = ["manzanas", "peras", "fresas"]
for (let fruta of frutas) {
    if (fruta.length <  6) {
      continue;
    }
    console.log(fruta);
  }
//2
var uno = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { 
      continue; 
    }
  console.log("El número es..." + i)
}

//3
var zapatos = ["tenis", "chanclas", "botas"]
for (let zapato of zapatos) {
    if (zapato.length <  8) {
      continue;
    }
    console.log(zapato);
  }

// 3 if else
console.log("IF ELSE")
//1
var comida = "hamburguesa"
if (comida == "hamburguesa") {
    console.log("Disfruta tu comida :)")
} else {
    console.log("Elige otro alimento :(")
}
//2
var numero = 645;
  if(numero % 3 == 0) {
    console.log(numero + ' es múltiplo de 3');
  } else if (numero % 7 == 0) {
    console.log(numero + ' es múltiplo de 7');
  } else {
    console.log(numero + ' no es múltiplo de 3 o 7');
  }

//3
var angulos = 48;
if (angulos >=0 && angulos <= 89) {
  console.log('Ángulo agudo')
} else if (angulos == 90) {
  console.log('Ángulo recto')
} else if (angulos <= 179 && angulos > 90) {
  console.log ('Ángulo obtuso') 
} else if (angulos == 180) {
  console.log('Ángulo llano')
} 
else {
  console.log('Ingrese un ángulo entre 0 y 180')
}

// 3 switch
console.log("SWITCH")
//1
var postres = "Pastel de chocolate"
switch (postres) {
    case "Pay":
      console.log("Delicioso pay!");
      break;
    case "Pastel de chocolate":
      console.log("Delicioso pastel de chocolate!");
      break;
    case "Gelatina":
      console.log("Deliciosa gelatina!");
      break;
    default:
      console.log('Elige un postre!');
      break;
  }

//2
  var colores = "Blanco"
  switch (colores) {
    case "Rojo":
      console.log("Elegiste el rojo!");
      break;
    case "Amarillo":
      console.log("Elegiste el amarillo!");
      break;
    case "Blanco":
      console.log("Elegiste el blanco!");
      break;
    default:
      console.log('Elige un color!');
      break;
  }

//3
  var flores = "Tulipanes"
  switch (flores) {
    case "Tulipanes":
      console.log("Grandioso, Tulipanes!");
      break;
    case "Rojas":
      console.log("Grandioso, rosas!");
      break;
    case "Orquídeas":
      console.log("Grandioso orquídeas!");
      break;
    default:
      console.log('Elige unas flores!');
      break;
  }

// 3 try...catch (2 throw)
console.log("TRY...CATCH")

var numero = 30
//1
try {
    if (numero%10 === 0) {
      console.log("Avanzamos :)");
    } else {
      throw new Error('No avanzamos :(');
    }
  } catch (e) {
    console.log(e.message);
  }

//2
try {
    if (numero%20 === 0) {
      console.log("Avanzamos :)");
    } else {
      throw new Error('No avanzamos :(');
    }
  } catch (e) {
    console.log(e.message);
  } 

  //3
  try {
    if (numero%5 === 0) {
      console.log("Avanzamos :)");
    } else {
      throw new Error('No avanzamos :(');
    }
  } catch (e) {
    console.log(e.message);
  }

// 3 let
console.log("LET")
//1
var primero = 15
let segundo = 13
function numeros() {
    var primero = 10
    let segundo = 6
    console.log("La suma dentro de la función es " + (primero + segundo))
}
numeros()
console.log("La suma fuera de la función es " + (primero + segundo))

//2
function numeros2() {
    let x = 67;
    if (true) {
      let x = 91;
      console.log("Valor dentro de la función: " + x);
    }
    console.log("Valor fuera de la función: " + x);
  }
numeros2()

//3
let animal1 = "pingüino"
function animal() {
    let animal2 = "gato"
    console.log("Dentro de la función " + animal2)
}
animal()
console.log("Fuera de la función " + animal1)

// 3 const
console.log("CONST")
const pi = 3.1416
const gatitos = 34
const pasteles = 120

console.log("Pi: " + pi + ", gatitos: " + gatitos + ", pasteles: " + pasteles)

// 3 function
console.log("FUNCTION")
//1
function multiplica(num1, num2) {
    console.log(num1*num2)
}
multiplica(3, 9)

//2
function enDecimal() {
    let num = 1101;
    console.log(parseInt(num, 2));
  }
  enDecimal();

//3
function cdu(cantidad) {
  var num = cantidad.toString().split('');
  var result = num[0]+ ' centenas' + ' , ' + num[1] + ' decenas' + ' , ' + num[2] + ' unidades';
  console.log(result);
}
cdu(325)

// 3 do while
console.log("DO WHILE")
//1
var agregar = "";
var n = 0;
do {
  n = n + 1;
  agregar = agregar + n;
} while (n < 10);
console.log(agregar);

//2
var textito = "";
var n = 0;
do {
  console.log(textito += + n);
  n++;
} while (n < 9);

//3
var textito = "";
var n = 2;
do {
  console.log(textito += + n);
  n++;
} while (n < 15);

// 3 for
console.log("FOR")
//1
var cadenaDeTexto = 'Hola mundo, esta es una prueba';
var indices = 0;
for (var i = 0; i < cadenaDeTexto.length; i++){
    if (cadenaDeTexto[i].toLowerCase() === "a") indices ++;
    }
    console.log('Tu frase contiene ' + indices + ' letras a');
//2 
var animales = ["pingüino", "gato", "jirafa", "pingüino", "pingüino", "loro"];
var buscando = 'pingüino';
var total = 0;

for (var i = 0; i < animales.length; i++) {
  if(animales[i] === buscando) total++;
    }
    console.log('Hay ' + total + ' pingüinos');
//3
var sinLetras = "H23@/dhc12";
var arregloSinLetra = [];
var restrict = /[A-Za-z]/

for (i = 0; i < sinLetras.length; i++){
  if (!sinLetras[i].match(restrict)) {
    arregloSinLetra.push(sinLetras[i]);
  }
}
console.log('Estos caracteres ' + arregloSinLetra.join(" ") + ' no son letras')

// 3 for in
console.log("FOR IN")
//1
var objeto = {
    a: "rojo",
    b: "blanco"
  }  
  for(var property in objeto){
    console.log(objeto[property]);
  }

//2
var objeto = {
    a: 21,
    b: "blanco"
  }  
  for(var property in objeto){
    console.log(property);
  }

  //3
  var objeto = {
    a: 21,
    b: "blanco"
  }  
  for(var property in objeto){
    console.log(objeto[property]);
  }

// 3 for of
console.log("FOR OF")
//1
var paises = ["reino unido", "francia", "italia"]
for (let pais of paises) {
    if (pais.length <  6) {
      continue;
    }
    console.log(pais);
  }

//2
var gatos = ["negro", "blanco", "rayado"]
for (let gato of gatos) {
    if (gato.length <  5) {
      continue;
    }
    console.log(gato);
  }

//3
var aguas = ["limón", "jamaica", "tamarindo"]
for (let agua of aguas) {
    if (agua.length <  6) {
      continue;
    }
    console.log(agua);
  }

// 3 while
console.log("WHILE")
//1
var i = 0;
while (i<=5)
{
console.log("El número es " + i)
i=i+1
}

//2
var c = 13;
while (c<=20)
{
console.log("Otro número " + c)
c=c+1
}

//3
var x = 0;
while(x!=8)
{
 x ++;
console.log("Contando..." + x);

}
