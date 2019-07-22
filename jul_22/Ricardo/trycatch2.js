try{
var ponnumero = 115;
var hola = 0;
while(hola < ponnumero){
    hola+=1;
    console.log(hola);
    if(hola == 100){throw new Error("No se pase de lanza morro");}
}
}
catch(e){
    console.error(e.message);
}
