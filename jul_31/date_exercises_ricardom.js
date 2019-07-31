function jsonTimes(tiempo) {


    if (!isNaN(tiempo) && tiempo.toString().length == 4) {
        console.log("es un año");
        year = parseInt(tiempo,10);
        
    } else if (!isNaN(tiempo)) {
        var date1 = new Date(tiempo);
        year = date1.getFullYear();
    } else {
        console.log("es un objeto de fecha");
        year = tiempo.getFullYear();
    }

    // console.log(year);

    var cuenta = 0;
    for (var month=0; month<12; month++) {
        var d = new Date(year,month,13);
        if(d.getDay() == 5){
          cuenta++;
       }
    }
    return cuenta;


}

console.log(jsonTimes(1234));



