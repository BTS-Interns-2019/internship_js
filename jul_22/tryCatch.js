try {
    var cont = prompt("inserta un numero");
    if(typeof cont ==  "string"){
        throw 1;
    }
    if(typeof cont ==  "boolean"){
        throw 2;
    }
    if(Math.sign(cont) == -1 || Math.sign(cont) == -0 ){
        throw 3;
    }
    
    
    function contador(cont){
        for(var i = 0; i < cont; i++){
        console.log(i);
        return 
        }
    }
}
catch(err){
    switch (err){
        case 1:
           console.log("No se permite cadena de texto");
           break;
        case 2:
            console.log("No se permite cadena de texto");
            break;
        case 3:
            console.log("Debe ser numero entero n.n");
            break;    
    }

}
finally {
    console.log("Finally");
}