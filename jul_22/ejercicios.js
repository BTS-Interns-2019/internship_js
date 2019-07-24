/* ejemplos de utilización de try catch que incluyan 
switch, for, while, return, finally, typeof*/


//ejemplo con try...catch, finally, return, typeof
var inicio = 100;
function suma(numero)
{
  // aqui verificamos si el valor realmente es un número
  if (typeof numero != "number")
  {
//y en caso de no serlo, lo convertimos en un número...
    numero = parseFloat(numero);
  }
  inicio += numero;
  return inicio;
}
try
{
    suma(80);
    suma("150.50");
  
    console.log("El número es: " + inicio);
}
catch(excepcion)
{
    console.log(excepcion);
} finally {
    console.log("Se realizó la acción")    
}


//ejemplo con try...catch, while y return
function numeros(num) {
    n = 1;
    while (num < 5) {
      num++;
        if (num == 3) {
          continue;
        }
      n += num;
      return n
    }
 } try {
      numeros(3)
      console.log(n)
  }
  catch (excepcion) {
      return (excepcion)
  } finally {
    console.log("Se realizó la acción") 
  }

//ejemplo switch
try {
  var frutas = "Manzana";
  switch (frutas) {
  case "Manzana":
     console.log("Manzana :)");
     break;
  default:
     console.log("Elige una fruta");
  }
} catch(e) {
    console.log("Ocurrió un error : " + e);
} finally {
    console.log("Se realizó la acción")
}
