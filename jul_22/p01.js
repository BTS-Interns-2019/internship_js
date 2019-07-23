try{//Lanza instrucciones para evitar errores
    console.log("BIENVENIDO");//Mensaje de bienvenida
    var opc = 2;//Variable de opciones del switch
    if(opc === undefined){//Condicion que evita que marque un error al faltar opc
        throw e;
    }
    switch(opc){//Si el valor de opc es
        case 1://1 es Saludo
            console.log("Hola");//Mensaje
            break;
        case 2://2 es Despedida
            console.log("Adios");//Mensaje
            break;
        default://Caso donde no sea ni uno ni dos
            console.log("Solo elige uno o dos");//Mensaje
    }
}catch(e){//Captura errores del codigo
    console.error(e);
}

