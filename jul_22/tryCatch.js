
function contador(cont){
    try {
            if(isNaN(cont)){
                throw 1;
            }
            if(typeof cont ==  "boolean"){
                throw 2;
            }
            if(Math.sign(cont) == -1 || Math.sign(cont) == -0 ){
                throw 3;
            }
            if( cont % 1 !== 0 ){
                throw 4;
            }
            else {
                for(var i = 0; i < cont; i++){
                    console.log(i);
                    
                }
            }
        }
    catch(err){
        switch (err){
            case 1:
            console.log("No se permite cadena de texto");
            break;
            case 2:
                console.log("No se permite boleano");
                break;
            case 3:
                console.log("Ingrese numero entero positivo");
                break;
            case 4:
                console.log("Ingrese numero entero");
                break;
        }
    }
    finally {
        return "Finally";
    }
}
// console.log(contador("d32ew"));
// console.log(contador(true));
// console.log(contador(-10));
// console.log(contador(10.43));
// console.log(contador(10));

function guardarPeso(peso){
    try{
        while(peso < 0){
            throw "Peso no debe de ser menos que 0";     
        }
        return "Guardando su peso";
    }
    catch(err){
        return err;
        
    }
}
// console.log(guardarPeso(-1));
// console.log(guardarPeso(10));
function revicion(data){
    var vocal = /a/gi;
    var text = data.match(vocal);        
    try{
        if(text == null){
            return "Exito!";
            
        }
        if( text.length> 0 ){
            throw "No se permite la vocal 'a' ";
        }
        
    }
    catch(error){
        return error;
    }
}
// console.log(revicion("deAascaerff"));
// console.log(revicion("ssdfbg"));
// console.log(revicion("dascrff"));
