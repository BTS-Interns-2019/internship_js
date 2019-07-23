try{//Lanza instrucciones para evitar errores
    var lim=100;//Limite del ciclo
    var retroceso=50;//Numero con la posicion en el que el contador en vez de sumarse se restara
    var cambio=0;//Variable tipo bandera que hace un cambio en el transcurso de contador
    var contador=0;//Contador que se va a ir imprimiendo
    while(contador<lim){//Si el contador es menor a el limite
        if(contador===-1){//Si el contador llega a menos uno se terminara el ciclo
            break;
        }
        console.log(contador);//Mensaje
        if(contador===retroceso){//Condicion que evalua si llega a la posicion del retroceso para hacer el cambio
            cambio=1;
        }

        if(cambio===1){//Cuando el cambio se activa el contador decrese
            contador--;
        }
        else{//Cuando no esta activado el cambio el contador incrementa
            contador++;
        }
    }
}catch(e){//Captura errores del codigo
    console.error(e);
}