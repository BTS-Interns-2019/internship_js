/*Escribir 3 ejemplos usando try...catch que incluyan 
 switch
 for
 while-
 return-
 finally-
 typeof-
*/

//Ejemplo 1 con try.. catch typeof y return
function Numeros(a, b) {

  try {
    
    if (typeof a !== 'number') {
      throw TypeError('El primer argumento no es un numero');
    }

    if (typeof b !== 'number') {
      throw TypeError('El segundo argumento no es un numero');
    }

    return a + b;
  } catch (error) {
    return error.message;
  }
}

Numeros('string', 1);



//Try ... catch  while finally

function ejemplo(n) {
 i = 1; 
  while (n < 5) {
    n++;
    if (n == 3) {
      continue;
    }
    i += n;
    return i;
  }
} try {
  ejemplo(3)
  console.log(i)
}
catch (e) {
  console.log(e)
} finally {
  console.log("Se realizo correctamente")
}

//try....catch switch

try{
  var comida = 'Pan';
  switch (comida) {
    case 'Pan':
    case 'Leche':
    case 'Cafe':
    case 'Lechuga':
      console.log('Está comida es saludable');
      break;
    default:
      throw(console.log(''));
  }
  
  }catch(e){
    console.log('Eso no existe:'+ e);
  
  }
  


