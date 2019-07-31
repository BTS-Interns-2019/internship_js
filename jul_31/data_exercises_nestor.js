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