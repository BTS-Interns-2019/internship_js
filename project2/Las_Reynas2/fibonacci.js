
let fibo={}//creamos un objeto para que guarde las posiciones ya obtenidas y no tarde en volver a recorrer todo
function fibonacci(n) {
  n=BigInt(n); //Asignamos BigInt a la variable n para obtener un resultado grande
    if (fibo[n]){ //Si ya habia obtenido ese numero lo retorna
        return fibo[n];
    }
    if (n <= 1 || n === 2){// si la posicion es igual a 1 o 2 nos regresa 1
        return 1;
    }
    //Guarda los registros anteriores y si no lo encuentra realiza la operacion para tener el resultado
        return fibo[n]=BigInt(fibonacci(n - BigInt(1),fibo)) + BigInt(fibonacci(n - BigInt(2),fibo))
  }

module.exports =fibonacci;