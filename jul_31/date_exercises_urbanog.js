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

console.log(jsonTimes(2019))