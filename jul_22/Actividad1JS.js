
function printArray(array) {
    try {
       if(Array.isArray(array)){
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);

        }
       }else{
        console.log("Introduce un arreglo")
    }
    } catch (error) {
       return error + "\nOcurrio un error" 
    }finally{
        console.log("Esta funcion imprime un arreglo");
    }
}

console.log(printArray([25,56,78]));

/////
function question(respuesta) {
    console.log("2+2= 4, Si o No");

        switch (respuesta) {
            case "Si":
                console.log("Correcto :)");

                break;
            case "No":
                console.log("Incorrecto :(");

            default:
                console.log("Esas opciones no estan hijo!!");
                break;
        }
}

try {
    console.log(question(si,no));
} catch (error) {
    console.log("Solo un parametro por favor")
}
