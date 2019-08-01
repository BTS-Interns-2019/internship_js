function jsonTimes(year) {
    let mes = 0
    let flag = true;
    date = new Date(year, mes);
    console.log(date.getDate(), date.getMonth())
    date = new Date(year, mes);
    viernes13 = new Date(date.getFullYear(), date.getMonth(), 13,)

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

function toLazyHuman(date1, date2) {
    let newD1;
    let newD2;
    let dateA;
    let dateB;
    let milis;
    let segundos = 1000;
    let minutos = 1000 * 60;
    let hors = 1000 * 60 * 60;
    let dias = 1000 * 60 * 60 * 24;
    let semana = 1000 * 60 * 60 * 24 * 7;
    let mes = 1000 * 60 * 60 * 24 * 7 * 4;
    let año = 1000 * 60 * 60 * 24 * 7 * 4 * 12;

    newD1= date1.replace(/[&\s/#,.+()$~%'":*?<>!{}|A-Z]/g, "-").split("-");
    dateA= new Date(newD1[0],newD1[1],newD1[2],newD1[3],newD1[4],newD1[5],newD1[6]);

    if (date2 === undefined) {
        date2 = Date.now()
        milis = dateA - date2;
        // console.log(milis / minutos)
    }else {
        newD2= date2.replace(/[&\s/#,.+()$~%'":*?<>!{}|A-Z]/g, "-").split("-");
        console.log(newD2)
        dateB= new Date(newD2[0],newD2[1],newD2[2],newD2[3],newD2[4],newD2[5],newD2[6]);
        milis = dateA - dateB;
    }



    let time;
    let mensaje
    let round;
    if (Math.abs(milis) < 1000) {
        time = milis;
    } else if (Math.abs(milis) > 1000 && Math.abs(milis) < 60000) {
        time = milis / segundos;
        round = roundTime(time, " seconds")
    } else if (Math.abs(milis) > 60000 && Math.abs(milis) < 3600000) {
        time = milis / minutos;
        round = roundTime(time, " minute")
    } else if (Math.abs(milis) > 3600000 && Math.abs(milis) < dias) {
        time = milis / hors;
        round = roundTime(time, " hour")
    } else if (Math.abs(milis) / dias > 0 && Math.abs(milis) < semana) {
        time = milis / dias;
        round = roundTime(time, " day")
    } else if (Math.abs(milis) / semana > 0 && Math.abs(milis) < mes) {
        time = milis / semana;
        round = roundTime(time, " week")
    } else if (Math.abs(milis) / mes > 0 && Math.abs(milis) < año) {
        time = milis / mes;
        round = roundTime(time, " month")
    } else if (Math.abs(milis) / año > 0 || Math.abs(milis)=== año) {
        time = milis / año;
        round = roundTime(time, " year")
    }
    console.log(time)
    return round;

}

// console.log(time, mensaje)


let dateFuck = new Date(2019, 06, 13, 6);
let dateFuck2 = new Date(2012, 03, 24, 13);
let today = Date.now()
let test = new Date(2012, 03, 21, 14, 00, 000)

console.log(toLazyHuman("2019-07-31T12:00:00.000",'2019-07-31T12:04:00.100'))


//Round time, funcion para redonder e imprimir mensajes
function roundTime(time, div) {
    let past;
    let future;
    let less = "less than ";
    let more = "more than ";
    let msj;
    let absTime = Math.abs(Math.round(time));
    let numbers = ["1", "2", "5", "10", "20", "30"];
    if (time < 0) {
        past = " ago";
        future="";
    } else {
        past = "";
        future="in ";
    }
    if (absTime!==1){
        div+="s"
    }

    if (absTime < 0.5) {
        msj = future+less + numbers[0]+past
    } else if (absTime === 1) {
        msj = future+numbers[0] + div + past
    } else if (absTime > 1.1000 && absTime < 1.4999) {
        msj = future+more + numbers[0] + div + past;
    } else if (absTime > 1.5 && absTime < 1.9999) {
        msj = less + numbers[1] + div + past; //less 2
    } else if (absTime === 2) {
        msj = future+numbers[1] + div + past;//2 ago
    } else if (absTime > 2.1000 && absTime < 3.4999) {
        msj = future+less + numbers[1] + div + past; //more 2
    } else if (absTime > 3.5 && absTime < 4.9999) {
        msj = future+numbers[2] + div + past;//less 5
    } else if (absTime === 5) {
        msj = future+numbers[2] + div + past;// 5 ago
    } else if (absTime > 5.1000 && absTime < 7.4999) {
        msj = future+more + numbers[2] + div + past;// more 5
    } else if (absTime > 7.5 && absTime < 9.9999) {//less 10
        msj = future+less + numbers[3] + div + past;
    } else if (absTime === 10) {
        msj = future+numbers[3] + div + past;//10 ago
    } else if (absTime > 10.1000 && absTime < 14.4999) {
        msj = future+more + numbers[3] + div + past; // more 10
    } else if (absTime > 14.5 && absTime < 19.9999) {
        msj = future+less + numbers[4] + div + past;//less 20
    } else if (absTime === 20) {
        msj = future+ numbers[4] + div + past//20 ago
    } else if (absTime > 20.1000 && absTime < 24.4999) {
        msj = future+more + numbers[4] + div + past;//more 20
    } else if (absTime > 25 && absTime < 29.9999) {
        msj = future+numbers[5] + div + past; //less 30
    } else if (absTime === 30) {
        msj = future+numbers[5] + div + past;//30 ago
    } else if (absTime > 30.1000) {
        msj = future+more + numbers[5] + div + past;//more 30
    }
    return msj;
}