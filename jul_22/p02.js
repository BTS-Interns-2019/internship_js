function sumar(a,b){//Funcion
    return a+b;
}
try{//Lanza instrucciones para evitar errores
    var primero=1;//Numero
    var segundo=3;//Numero
    var ciclo=10;//Numero de iteraciones
    for(segundo;segundo<ciclo;segundo++){//Ciclo for
        if(typeof primero === 'number'){//Condicion
            if(typeof segundo === 'number'){//Condicion
                console.log(sumar(primero,segundo));//Mensaje con funcion
            }
        }
    }
}catch(e){//Captura errores del codigo
    console.error(e);
}
