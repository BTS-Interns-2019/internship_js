function jsonTimes(data){
    var obj = {
        time: 0,
        date: ""
    };
    if(typeof data == "number"){
        data = data.toString();
    }else {
        data = data.toString();
    }
    var fecha = new Date(data);
    var año = new Date(fecha.getFullYear());
    while(true){
        año.setDate(año.getDate() + 1);
        if(año.getDate() == 13 && año.getDay() == 5){
            obj.time += 1;
            obj.date += año.getMonth()+"/"+año.getgetDate()+"/"+año.getFullYear()+" ";
        }
        if(año.getMonth() == 11 && año.getDate() == 31){
            break;
        }
    }
}
//---------------------------
function toLazyHuman(hasta, desde){
    if(!desde){
        desde = new Date();
    };
    console.log(hasta);
    console.log(desde);
    var milisegundos = hasta.getMilliseconds()-desde.getMilliseconds();
    var segundos = hasta.getMinutes()-desde.getMinutes();
    var horas = hasta.getSeconds()-desde.getSeconds();
    var minutos = hasta.getHours()-desde.getHours();
    var dias = hasta.getDate()-desde.getDate();
    var mes = hasta.getMonth()-desde.getMonth();
    var año = hasta.getYear()-desde.getYear();
    console.log(año, mes, dias, horas, minutos, segundos, milisegundos);
    var valores = [1,2,5,10,20,30];
    if(año > 0 || año < 0){

    }
    if(mes > 0 || mes < 0){
        var signo = mes < 0 ? "ago" : "in";
        mes = Math.abs(Math.round(mes+"."+(dias * 2)))
        console.log(closeTo(mes,signo, "months"));
        
        
    }
    

}
// funcion recibe el numero date, si es + o - y en que fecha
function closeTo(data,sign,str){
    var valores = [1,2,5,10,20,30];
    for(let i = 0; i < valores.length; i++){
        if(data >= valores[i] && data < valores[i+1]){
            var pos1 = Math.abs((data-valores[i]));
            var pos2 = Math.abs((data-valores[i+1]));
            if(pos1 < pos2){
                return (sign == "in")? sing + " more than "+valores[i]+ " "+str : "more than "+valores[i]+" "+str+" "+sign;
                //valores[i]
            }else{
                return (sign == "in")? sing + " less than "+valores[i+1]+ " "+str : "less than "+valores[i+1]+" "+str+" "+sign;
                //valores[i+1]
            }
        }
    }
}
var toDate = new Date("2019-08-31T12:00:00.000");
var fromDate = new Date("2019-09-31T12:01:00.000")
console.log(toLazyHuman(toDate, fromDate));