/***
 * numero - año a buscar
 * 4 caracteres string - año a buscar
 * timeString in ISO 8601 - representa una fecha
 * date object
 * 
 * regresa objeto con
 * times: numero de viernes 13 en ese año
 * dates: [] fechas viernes 13 mm/dd/yyyy stgring
 */
function jsonTimes(param){
    function format(n){
        let out = "";
        if(n<10){
            out+="0"
        }
        out+=n;
        return out;
    }
    let anio
    switch(typeof(param)){
        case "number":
            anio=param;
            break;
            case "string":
                if(param.length==4){
                    anio=parseInt(param)
                }else{
                    let p = param.split("-");
                    anio = p[0];
                }
                break;
                case "object":
                    anio=param.getFullYear();
                    break;

    }
    let nvie = 0
    let mes = 0
    let d
    let fechas = []
    do{
        d = new Date(anio,mes)
        d.setDate(13)
        if(d.getDay()==5){
            nvie++;
            fechas.push(format(d.getMonth()+1)+"/"+format(d.getDate())+"/"+anio)
        }
        mes++
    }while(mes<12)
    let obj = {
        times:nvie,
        dates:fechas
    }
return obj;
 
}

function toLazyHuman(date1,date2){
 if(!date2){
     date2 = new Date(Date.now());
 }
 
 let difmls = date2.getTime() - date1.getTime();
 let dif_segundos = difmls/1000;
 let dif_min = dif_segundos/60;
 let dif_hor = dif_min/60;
 let dif_dias = dif_hor/24;
 let dif_anios = dif_dias/365
 
}
let date1 = new Date(2019,06,30)
console.log(toLazyHuman(date1))
module.exports=jsonTimes;