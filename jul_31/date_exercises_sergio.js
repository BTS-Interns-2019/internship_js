function jsonTimes(params) {
    if(typeof params == 'number'){
        params.toString();
    }else if(typeof params == 'object'){

    }
    let times = 0;
     let res = {times:0,dates:[]}
    let dato = params;
    // console.log(dato);
    // console.log(dato.getDay());
    dato.setMonth(0);
    dato.setDate(1);
    dato.setDate(4);
    // console.log(dato);
    for (let i = 0; i < 52; i++) {
        dato.setDate(dato.getDate()+7);
        //console.log(dato);
        
        if(dato.getDate() == 13){
            // console.log("Aqui viene el jason");
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
let obj = new Date("2019-07-31T12:00:00.000");
//31 July 2019 19:30:00



function toLazyHuman(obj,params) {
    if(!params){
        params = Date.now();
    }
    console.log(obj);
    console.log(params);
    
    params = new Date(params);
    console.log(params.getFullYear(),params.getMonth(),params.getDay(),params.getHours(),params.getMinutes());
    let year1 = params.getFullYear();
    let month1 = params.getMonth()
    let day1 = params.getDay();
    let hours1 = params.getHours(); 
    let minutes1 = params.getMinutes();
    
    obj = obj.getTime();
    //console.log(obj);
    params = params.getTime();
    //console.log(params);
    let diferencia = obj-params;
    //console.log(diferencia);
    let unoAño = 31556900000;
    if(diferencia > unoAño){diferencia -= unoAño}
    //console.log(diferencia);
    
    params = params-diferencia;
    params = new Date(params);
  //  console.log(params);
    console.log(params.getFullYear(),params.getMonth(),params.getDay(),params.getHours(),params.getMinutes());
    
    let ymdhm = [];
    ymdhm.push( year1 - params.getFullYear());
    ymdhm.push(month1 - params.getMonth())
    ymdhm.push(day1 -params.getDay());
    ymdhm.push(hours1 = hours1 - params.getHours()); 
    ymdhm.push(minutes1 - params.getMinutes());
    console.log(year1,month1,day1,hours1,minutes1);
    console.log(ymdhm);
    let d = 0;
    let dato = 0;
    for (let i = 0; i < ymdhm.length; i++) {
        if( ymdhm[i] != 0 ){
             dato = ymdhm[i]; 
             d = i;

             break;
            }; 
    }

    let palabra = "";
    if (d == 0) {
        palabra = "year"
    } else if(d == 1) {
        palabra = "month"
    }else if(d == 2 ){
        palabra = "day"
    }else if(d == 3 ){
        palabra = "hours"
    }else if(d == 4 ){
        palabra = "minute"
    }

    // MINUTES 

    if(dato < 0){
      palabra =  ""+dato+" "+palabra+" ago";
    }else if(dato > 0){
      palabra =  "in "+"less than "+dato+" "+palabra;
    }

    
    //console.log(diferencia);
    return palabra;
    

}
let obj2 = new Date('2019-08-31T12:01:00.000')
console.log(toLazyHuman(obj,obj2));