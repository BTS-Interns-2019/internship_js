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
    var segundos = hasta.getSeconds()-desde.getSeconds();
    var minutos = hasta.getMinutes()-desde.getMinutes();
    var horas = hasta.getHours()-desde.getHours();
    var dias = hasta.getDate()-desde.getDate();
    var mes = hasta.getMonth()-desde.getMonth();
    var año = hasta.getYear()-desde.getYear();
    console.log(año, mes, dias, horas, minutos, segundos, milisegundos);
    var valores = [1,2,5,10,20,30];
    if(año > 0 || año < 0){
        //condicional resultado de (mes*8) si es menor de 10 agregar un 0
        var signo = año < 0 ? "ago" : "in";
        mes = mes * 8;
        mes = (mes < 10) ? "0"+ mes : mes;
        año = Math.abs(Math.round(año+"."+(mes)))
        console.log(closeTo(año,signo, "years"));
    }
    if(mes > 0 || mes < 0){
        //condicional resultado de (dias*8) si es menor de 50 agregar un 0
        var signo = mes < 0 ? "ago" : "in";
        dias = dias * 3;
        dias = (dias < 50) ? "0"+ dias : dias;
        mes = Math.abs(Math.round(mes+"."+(dias)))
        console.log(closeTo(mes,signo, "months"));    
    }
    if(dias > 0 || dias < 0){
        //condicional resultado de (horas*4) si es menor de 10 agregar un 0
        var signo = dias < 0 ? "ago" : "in";
        horas = horas * 4;
        horas = (horas < 10) ? "0"+ horas : horas;
        dias = Math.abs(Math.round(dias+"."+(horas)))
        console.log(closeTo(dias,signo, "days"));
    }
    if(horas > 0 || horas < 0){
        // sin terminar, condicional si es menos de 10 agregale un 0
        var signo = horas < 0 ? "ago" : "in";
        minutos = Math.trunc(minutos * 1.6);
        minutos = (minutos < 10) ? "0"+ minutos : minutos;
        horas = Math.abs(Math.round(horas+"."+(minutos * 3)))
        console.log(closeTo(horas,signo, "hours"));
    }
    if(minutos > 0 || minutos < 0){
        // sin terminar, condicional si es menos de 10 agregale un 0 y quitar decimales
        var signo = minutos < 0 ? "ago" : "in";
        minutos = Math.abs(Math.round(minutos+"."+(segundos * 1.6)))
        console.log(closeTo(minutos,signo, "minutes"));
    }
    if(segundos > 0 || segundos < 0){
        // sin terminar
        var signo = segundos < 0 ? "ago" : "in";
        segundos = Math.abs(Math.round(segundos+"."+(milisegundos)))
        console.log(closeTo(segundos,signo, "seconds"));
    }
    

}
// funcion recibe el numero date, si es + o - y en que fecha
function closeTo(data,sign,str){
    var valores = [1,2,5,10,20,30];
    for(let i = 0; i < valores.length; i++){
        if(data >= valores[i] && data < valores[i+1]){
            if(data == valores[i]){
                // valor is igual al primero
                return (sign == "in")? sing + " "+valores[i]+ " "+str : valores[i]+" "+str+" "+sign;
            }
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