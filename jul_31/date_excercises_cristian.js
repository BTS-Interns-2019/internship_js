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
    var diferencia = ob2 - ob1;
    //var contdias = Math.round(diferencia/(1000*60*60*24));
    var secondsToTime = as(diferencia);
    console.log(diferencia);
    return secondsToTime;
}
a = new Date(1980,00);
b = new Date(1981,00);
console.log(toLazyHuman(a,b))

function as(s) {

    function addZ(n) {
      return (n<10? '0':'') + n;
    }

    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    return  addZ(hrs) + ':' + addZ(mins) + ':' + addZ(secs)+ '.' + addZ(ms);
  }