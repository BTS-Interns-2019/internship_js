function jsonTimes(tiempo) {


    if (!isNaN(tiempo) && tiempo.toString().length == 4) {
        year = parseInt(tiempo, 10);

    } else if (!isNaN(tiempo)) {
        var date1 = new Date(tiempo);
        year = date1.getFullYear();
    } else {
        year = tiempo.getFullYear();
    }

    // console.log(year);

    var cuenta = 0;
    var days = [];
    for (var month = 0; month < 12; month++) {
        var d = new Date(year, month, 13);
        if (d.getDay() == 5) {
            cuenta++;
            days.push(d.toDateString());
        }
    }
    obj = {}
    obj.visitas = cuenta;
    obj.dias = days

    return obj;


}

console.log(jsonTimes(1234));



