function jsonTimes(parameter){
    a = typeof(parameter);
    console.log(a);
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
            dates.push();
        }
        month++;
    }while(month<12);
    var obj = {friday13:friday}
    return obj;
}   

jsonTimes(1);