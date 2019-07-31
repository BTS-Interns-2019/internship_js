function jsonTimes(params) {
    if(typeof params == 'number'){
        params.toString();
    }else if(typeof params == 'object'){

    }
    let dato = params;
    console.log(dato);
    console.log(dato.getDay());
    dato.setMonth(0);
    dato.setDate(4);
    console.log(dato);
    for (let i = 0; i < 52; i++) {
        dato.setDate(dato.getDate()+7);
        console.log(dato);
        
        if(dato.getDate() == 13){
            console.log("Aqui viene el jason");
            
        }
        
    }
    
    
    
    
    


}

console.log(jsonTimes(new Date()));
