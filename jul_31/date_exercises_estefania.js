// function jsonTimes(año) {
//     var time = 0;
//     var fecha = new Date();
//     switch (año) {
//         case 'number':
//             año == fecha
//           break;
//         case 'string':
//             año == fecha
//           break;
//         case 'ISO string':
//             año == fecha
//           break;
//         case 'date object':
//             año == fecha
//           break;
//     }
//     if()
//     return new Date('2019');
//     };
    
 
// console.log(jsonTimes(2019));

function toLazyHuman(toDate, fromDate) {
    if(fromDate==null) {
        fromDate == new Date(fromDate)
    }
    date1 = new Date(toDate)
    console.log(date1)
    date2= new Date(fromDate)
    console.log(date2)
    var diferencia = date1 - date2
    
    let segundos = diferencia/1000;
    let minutos = segundos/60;
    let horas = minutos/60;
    let dias = horas/24;
    let meses = dias/30;
    let años = dias/365
    
    var rounded = {
    segundos: {
      total: Math.floor(segundos),
      roundedTop: false,
      rounded: false
    },
    minutos: {
      total: Math.floor(minutos),
      roundedTop: false,
      rounded: false,
    },
    horas: {
      total: Math.floor(horas),
      roundedTop: false,
      rounded: false
    },
    dias: {
      total: Math.floor(dias),
      roundedTop: false,
      rounded: false
    },
    meses: {
      total: Math.floor(meses),
      roundedTop: false,
      rounded: false
    },
    años: {
      total: Math.floor(años),
      roundedTop: false,
      rounded: false
    },
  }
  return diferencia

}
console.log(toLazyHuman("2019-07-31T12:00:00.000", "2019-07-31T12:01:00.000"));
