
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
<<<<<<< HEAD
    }
}

try {
    console.log(question(25));
} catch (error) {
    console.log("Solo texto por favor")
}


function testWhile(number) {
    console.log(typeof(number));
    if (typeof(number)!='number'){
        console.log("Solo numeros");
    }else{
        while (number<10) {
            number++;
        console.log(number);
       
        }
    }
}

try {
    console.log(testWhile(defaultStatus));
} catch (error) {
    console.log(error+"\nLa variable no esta definida");
}



=======
}

try {
    console.log(question(si,no));
} catch (error) {
    console.log("Solo un parametro por favor")
}
>>>>>>> Commit de Actividad 2
