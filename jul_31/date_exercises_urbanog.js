function jsonTimes(year) {
    let mes = 0
    let flag = true;
    date = new Date(year, mes);
    console.log(date.getDate(), date.getMonth())
    date= new Date(year,mes);
    viernes13= new Date(date.getFullYear(),date.getMonth(),13,)

    let times = 0;
    while (flag) {

        date.getDay()
        date.getDate()
        if (date.getDate() === 13 && date.getDay() === 5) {
            times++
        }
    }
}
// console.log(jsonTimes(2019))

function toLazyHuman(date1,date2) {
    let dias= 1000*60*60*24;
    let hors= 1000*60*60;
    let semana= 1000*60*60*24*7
    let mes= 1000*60*60*24*7*4
    if (date2===undefined){
        date2=Date.now()
        let milis=date1-date2;
        console.log(Math.round(milis/dias))
    }
}

let dateFuck= new Date(2019,06,13,6);
let dateFuck2= new Date(2019,05 ,13);
console.log(toLazyHuman(dateFuck))