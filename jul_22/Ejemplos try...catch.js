function amargado(dato) {
    try {
        switch (typeof (dato)) {
            case "boolean":
                throw new Error(message = "Odio el extremismo");
                break;
            case "number":
                throw new Error(message = "Otro maldito número");
                break;
            case "string":
                throw new Error(message = "M revienta leer");
                break;
            default:
                for (let i=0; i<3; i++)console.log("Hola número: "+i);
                break;
        }
    }catch(e){
        console.log("Error: "+e.message);        
    }finally{
        return "Esto "+dato+" no es un buen dato";
    }
}
//amargado (true);

function whileError(dato){
    try{
        if (typeof(dato) != "number"){
            throw ErrorTipo(message = "Tipo de dato invalido");
        }else {
            while (dato>0){
                console.log(dato);
                dato--;                
            }
        }
    }catch(e){
        console.log("Error: "+e.message);        
    }
}
//whileError(3);

function laQueFalta(dato){
    try {
        if(dato.toLowerCase()=="error")
            throw new Error(message="Esto no sirve");
        else console.log("chido");
    } catch (e) {
        console.log(e.message);                
    }
}
laQueFalta("Error1");