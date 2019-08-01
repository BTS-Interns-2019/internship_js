function jsonTimes(parameter){
    a = typeof(parameter);
    //console.log(a);
    var d;
    switch (a){
        case "number":
                a= parameter;
            break;

        case "object":
            a = parameter.getFullYear();
            break;

        case "string":
            if(parameter.lenght ==4){
                a = parseInt(parameter);
            }else{
                c = parameter.split("-");
                a = c[0];
            }
            break;
    }
    var dates =[];
    var friday=0;
    month = 0;
    do{
        d = new Date(a, month);
        d.setDate(13);
        if(d.getDay()==5){
            friday++;
            //data = d.getY
            dates.push((d.getMonth()+1).toString().padStart(2, 0) + "/" + d.getDay() + "/" + a);
        }
        month++;
    }while(month<12);
    var obj = {friday13:friday,
                viernes:dates};
    return obj;
}   
//console.log(jsonTimes(2019));




function toLazyHuman(ob1, ob2){
    if(ob2==undefined){
        ob2 = new Date();
    }
    //milisegundos
    var diferencia = ob1 - ob2;
    //true, false es negativo?
    var diffNegative = diferencia<0;
    //Convertir a positivo...
    diferencia = Math.abs(diferencia);
    //console.log(diferencia);
    //segundos
    var diffSeg = diferencia / 1000;
    //console.log(diffSeg);
    //minutos
    var diffMins = diffSeg / 60;
    //console.log(diffMins);
    //horas
    var diffHour = diffMins / 60;
    console.log(diffHour);
    //dias
    var diffDay = diffHour / 24;
    console.log(diffDay);
    //meses
    var diffMes = diffDay / 30;
    console.log(diffMes);
    //años
    var diffYear = diffMes / 12;
    console.log(diffYear);
    msj ="";
    if(diffYear > 30){
        msj += "more than 30 years";
    } else if(diffYear == 30){
        msj += "30 años";
    } else if(diffYear < 30 && diffYear > 25){
        msj += "less than 30 años";
    } else if(diffYear <25 && diffYear > 20){
        msj += "more than 20 years";
    }else if(diffYear == 20){
        msj += "20 Years"
    }else if(diffYear < 20 && diffYear > 15){
        msj += "less than 20 years";
    }else if(diffYear <=15 && diffYear>10){
        msj = "more than 10 years";
    }else if(diffYear ==10){
        msj = "10 years";
    }else if(diffYear<10 && diffYear >7.5){
        msj = "less than 10 years";
    }else if(diffYear <=7.5 && diffYear >5){
        msj = "more than 5 years";
    }else if(diffYear==5){
        msj = "5 years";
    }else if(diffYear <5 && diffYear >3.5){
        msj = "less than 5 years";
    }else if(diffYear <3.5 && diffYear>2){
        msj = "more than 2 years";
    }else if(diffYear == 2){
        msj = "2 years";
    }else if(diffYear <2 && diffYear > 1.5){
        msj = "less than 2 years";
    }else if(diffYear >1 && diffYear<=1.5){
        msj = "more than 1 years";
    } else if(diffYear == 1){
        msj += "1 year";
    } else if(diffYear<1 && diffYear > 0.75){
        msj+= "less than 1 year";
    } else if(diffMes < 9 && diffMes > 5){
        msj +="more than 5 monts";
    } else if(diffMes == 5 ){
        msj +="5 months";
    } else if(diffMes < 5 && diffMes > 3.75){
        msj +="less than 5 months";
    } else if(diffMes <=3.75 && diffMes >2){
        msj = "more than 2 months";
    }else if(diffMes == 2){
        msj = "2 months";
    }else if(diffMes <2 && diffMes >1.5){
        msj = "less than 2 months";
    }else if(diffMes >1 && diffMes <=1.5){
        msj = "more than 1 month"
    }else if(diffMes ==1){
        msj = "1 month";
    }else if(diffMes <1 && diffMes >0.8){
        msj = "less than 1 month";
    }else if(diffDay>20 && diffMes <=0.8){
        msj = "more than 20 days";
    }else if(diffDay == 20){
        msj = "20 days";
    }else if(diffDay <20 && diffDay>15){
        msj = "less than 20 days";
    }else if(diffDay <=15 && diffDay >10){
        msj = "more than 10 days";
    }else if(diffDay==10){
        msj = "10 days";
    }else if(diffDay<10 && diffDay >7.5){
        msj = "less than 10 days";
    }else if(diffDay<=7.5 && diffDay>5){
        msj ="more than 5 years";
    }else if(diffDay ==5){
        msj ="5 days";
    }else if(diffDay<5 && diffDay>3.5){
        msj ="less than 5 days";
    }else if(diffDay <=3.5 && diffDay>2){
        msj ="more than 2 days";
    }else if(diffDay==2){
        msj ="2 days";
    }else if(diffDay <2 && diffDay >1.5){
        msj = "less than 2 days";
    }else if(diffDay <=1.5 && diffDay>1){
        msj = "more than 1 day";
    }else if(diffDay==1){
        msj = "1 day";
    }else if(diffDay<1 && diffDay >0.95){
        msj = "less than 1 day";
    }else if(diffDay<=0.95 && diffHour>20){
        msj = "more than 20 hours";
    }else if(diffHour==20){
        msj = "20 hours";
    }else if(diffHour<20 && diffHour >15){
        msj = "less than 20 hours";
    }else if(diffHour>10 && diffHour<=15){
        msj = "more than 10 hours";
    }else if(diffHour==10){
        msj = "10 hours";
    }else if(diffHour<10 && diffHour >7.5){
        msj = "less than 10 hours";
    }else if(diffHour <=7.5 && diffHour >5){
        msj = "more than 5 hours";
    }else if(diffHour ==5){
        msj = "5 hours";
    }else if(diffHour<5 && diffHour>3.5){
        msj = "less than 5 hours";
    }else if(diffHour <=3.5 && diffHour>2){
        msj = "more than 2 hours";
    }else if(diffHour == 2){
        msj = "2 hours";
    }else if(diffHour <2 && diffHour >1.5){
        msj = "less than 2 hours";
    }else if(diffHour <=1.5 && diffHour >1){
        msj = "more than 1 hour";
    }else if(diffHour ==1){
        msj = "1 hour";
    }else if(diffHour<1 && diffHour>0.75){
        msj = "less than 1 hour";
    }else if(diffHour<=0.75 && diffMins >30){
        msj = "more than 30 minutes";
    }else if(diffMins==30){
        msj = "30 minutes";
    }else if(diffMins<30 && diffMins>25){
        msj = "less than 30 minutes";
    }else if(diffMins<=25 && diffMins>20){
        msj = "more than 20 minutes";
    }else if(diffMins==20){
        msj = "20 minutes";
    }else if(diffMins<20 && diffMins>15){
        msj = "less than 20 minutes";
    }else if(diffMins<=15 && diffMins <10){
        msj = "more than 10 minutes";
    }else if(diffMins==10){
        msj = "10 minutes";
    }else if(diffMins<10 && diffMins>7.5){
        msj = "less than 10 minutes";
    }else if(diffMins<=7.5 && diffMins>5){
        msj = "more than 5 minutes";
    }else if(diffMins==5){
        msj = "5 minutes";
    }else if(diffMins<5 && diffMins >3.5){
        msj = "less than 5 minutes";
    }else if(diffMins<=3.5 && diffMins>2){
        msj = "more than 2 minutes";
    }else if(diffMins==2){
        msj = "2 minutes";
    }else if(diffMins<2 && diffMins>1.5){
        msj = "less than 2 minutes";
    }else if(diffMins <=1.5 && diffMins>1){
        msj = "more than 1 minutes";
    }else if(diffMins==1){
        msj = "1 minute";
    }else if(diffMins<1 && diffMins>0.75){
        msj = "less than 1 minute";
    }else if(diffMins<=0.75 && diffSeg >30){
        msj = "more than 30 seconds";
    }else if(diffSeg==30){
        msj = "30 seconds";
    }else if(diffSeg<30 && diffSeg>25){
        msj = "less than 30 seconds";
    }else if(diffSeg<=25 && diffSeg>20){
        msj = "more than 20 seconds";
    }else if(diffSeg==20){
        msj = "20 seconds";
    }else if(diffSeg<20 && diffSeg>15){
        msj = "less than 20 seconds";
    }else if(diffSeg<=15 && diffSeg <10){
        msj = "more than 10 seconds";
    }else if(diffSeg==10){
        msj = "10 seconds";
    }else if(diffSeg<10 && diffSeg>7.5){
        msj = "less than 10 seconds";
    }else if(diffSeg<=7.5 && diffSeg>5){
        msj = "more than 5 seconds";
    }else if(diffSeg==5){
        msj = "5 seconds";
    }else if(diffSeg<5 && diffSeg >3.5){
        msj = "less than 5 seconds";
    }else if(diffSeg<=3.5 && diffSeg>2){
        msj = "more than 2 seconds";
    }else if(diffSeg==2){
        msj = "2 seconds";
    }else if(diffSeg<2 && diffSeg>1.5){
        msj = "less than 2 seconds";
    }else if(diffSeg <=1.5 && diffSeg>1){
        msj = "more than 1 seconds";
    }else if(diffSeg==1){
        msj = "1 second";
    }else if(diffSeg<1){
        msj = "less than 1 second";
    }
    if(diffNegative){
        msj += " ago";
    }else{
        msj = "in " + msj;
    }
    return msj;

    //var contdias = Math.round(diferencia/(1000*60*60*24));
    //var secondsToTime = as(diferencia);
    //return secondsToTime;
}
a = new Date(2019,00,00,00);
b = new Date(2019,00,00,23);
console.log(toLazyHuman(a,b));





function as(s) {
   /* function addZ(n) {
        return (n<10? '0':'') + n;
    }//*/
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    return  addZ(hrs) + ':' + addZ(mins) + ':' + addZ(secs)+ '.' + addZ(ms);
}