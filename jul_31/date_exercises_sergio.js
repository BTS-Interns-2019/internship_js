function jsonTimes(params) {
    if(typeof params == 'number'){
        params.toString();
    }else if(typeof params == 'object'){

    }
    let times = 0;
     let res = {times:0,dates:[]}
    let dato = params;
    console.log(dato);
    console.log(dato.getDay());
    dato.setMonth(0);
    dato.setDate(1);
    dato.setDate(4);
    console.log(dato);
    for (let i = 0; i < 52; i++) {
        dato.setDate(dato.getDate()+7);
        //console.log(dato);
        
        if(dato.getDate() == 13){
            console.log("Aqui viene el jason");
            times++;
            let dia = dato.getMonth()+1;
            if((dato.getMonth()+1)<10){dia = '0'+dia}
            res['dates'].push(dia+'/'+13+'/'+(dato.getFullYear()).toString());
        }
        
    }
    res['times'] = times;
    return res;
}
console.log(jsonTimes(new Date()));
let obj = new Date("27 July 2018 13:30:00");



function toLazyHuman(obj,params) {
    if(!params){
        params = Date.now();
    }
    // console.log(params);
    params = new Date(params);
    // console.log(params);
    console.log(params.getFullYear(),params.getMonth(),params.getDay(),params.getHours(),params.getMinutes());
    
    
    obj = obj.getTime();
    console.log(obj);
    params = params.getTime();
    // console.log(params);
    let diferencia = params-obj;
    console.log(diferencia);
    let unoAño = 31556900000;
    if(diferencia > unoAño){diferencia -= unoAño}
    params = params-diferencia;
    params = new Date(params);
    // console.log(params);
    console.log(params.getFullYear(),params.getMonth(),params.getDay(),params.getHours(),params.getMinutes());
    

    
    
    
    console.log(diferencia);
    

}

console.log(toLazyHuman(obj));

