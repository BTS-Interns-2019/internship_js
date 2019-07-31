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
console.log(jsonTimes("2018-01-01"))