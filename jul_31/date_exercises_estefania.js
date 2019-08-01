function jsonTimes(dateTime) {
    if(dateTime.toString().length <= 4) {
        date = new Date(dateTime, 0);
    } else if (typeof dateTime === 'string') {
        date = new Date(dateTime);
    } else {
        date = new Date(+dateTime);
    }
    const result = {
        dates: []
    };

    for(month = 0; month < 12; month++) {
        date.setMonth(month);
        if(date.getDay() == 5) {
            result.dates.push(
                (month.toString().padStart(2, "0") + "/" + date.getDate() + "/" + date.getFullYear()
                )
            )
        }
    }
    result.times = result.dates.length;
    return result
}
console.log(jsonTimes(2019))

function toLazyHuman(toDate, fromDate) {
    fromDate = new Date(Date.now())
    console.log(fromDate)

    date1 = toDate
    date2= fromDate
    var diferencia = date1 - date2
    console.log(diferencia)
    let difSegundos = diferencia/1000;
    console.log(difSegundos)
    let difMinutos = difSegundos/60;
    let difHoras = difMinutos/60;
    let difDias = difHoras/24;
    let difMeses = difDias/30;
    let difAños = difMeses/365
    console.log(difAños)
    
    var rounded = {
    segundos: {
      total: Math.floor(difSegundos),
      roundedTop: false,
      rounded: false
    },
    minutos: {
      total: Math.floor(difMinutos),
      roundedTop: false,
      rounded: false,
    },
    horas: {
      total: Math.floor(difHoras),
      roundedTop: false,
      rounded: false
    },
    dias: {
      total: Math.floor(difDias),
      roundedTop: false,
      rounded: false
    },
    meses: {
      total: Math.floor(difMeses),
      roundedTop: false,
      rounded: false
    },
    años: {
      total: Math.floor(difAños),
      roundedTop: false,
      rounded: false
    },
  }

//   if(diferencia==)

}
console.log(toLazyHuman("2019-07-31T12:00:00.000",));
