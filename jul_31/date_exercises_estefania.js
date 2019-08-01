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
    return diferencia
}
console.log(toLazyHuman("2019-07-31T12:00:00.000", "2019-07-31T12:01:00.000"))


