function jsonTimes(params) {
    if(typeof params == 'number'){
        params.toString();
    }else if(typeof params == 'object'){

    }
    let dato = params;
 //   console.log(dato);
 //   console.log(dato.getDay());
    dato.setMonth(0);
    dato.setDate(1);
    dato.setDate(4);
 //   console.log(dato);
    for (let i = 0; i < 52; i++) {
        dato.setDate(dato.getDate()+7);
 //       console.log(dato);
        
        if(dato.getDate() == 13){
  //          console.log("Aqui viene el jason");

            
        }
        
    }
    
    
    
    
    


}

// console.log(jsonTimes(new Date()));


let obj = new Date("27 July 2018 13:30:00");


function toLazyHuman(obj,params) {
    if(!params){
        params = Date.now();
    }
    console.log(params);
    params = new Date(params);
    console.log(params);
    obj = obj.getTime();
    console.log(obj);
    params = params.getTime();
    console.log(params);
    let diferencia = params-obj;
    console.log(diferencia);
    let unoAño = 31556900000;
    if(diferencia > unoAño){diferencia -= unoAño}
    console.log(diferencia);
    
    
    

    

}

console.log(toLazyHuman(obj));

