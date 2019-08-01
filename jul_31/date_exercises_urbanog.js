function jsonTimes(year) {
    let jason;

    switch (typeof (year)) {
        case "number":
            jason = year
            break;
        case "object":
            jason = year.getFullYear();
            break;
        case "string":
            if (year.length == 4) {
                jason = parseInt(year)
            } else {
                c = year.split("-");
                jason = c[0];
            }
            break;

        default:
            break;
    }

    let counter = 0;
    let mes = 0;
    let frydays = [];
    let happyFryday= {
        times:0,
    }
    while (mes < 12) {

        // date.getDay()
        // date.getDate()
        date = new Date(jason, mes);
        date.setDate(13);

        if (/*date.getDate() === 13 &&*/ date.getDay() === 5) {
            counter++
            frydays.push((date.getMonth() + 1).toString().padStart(2, 0) + "/" + date.getDate() + "/"+jason)
        }
        mes++;
    }
    happyFryday.times=counter;
    happyFryday.dates=frydays;
    return happyFryday;
}

console.log(jsonTimes("2019"))

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
    
    date1= new Date(date1)
    // newD1= date1.filter((value,index)=> {parseInt(})
    console.log(newD1)
    // let a= newD1.replace(/[&\s/#,.+()$~%'":*?<>!{}|A-Z]/g, "-")
    console.log (date1);
    dateA = new Date(/*newD1[0], newD1[1], newD1[2], newD1[3], newD1[4], newD1[5], newD1[6]*/);

    if (date2 === undefined) {
        date2 = new Date()
        milis = date1 - date2;
        // console.log(milis / minutos)
    } else {
        // newD2 = date2.replace(/[&\s/#,.+()$~%'":*?<>!{}|A-Z]/g, "-").split("-");
        // console.log(newD2)
        // dateB = new Date(newD2[0], newD2[1], newD2[2], newD2[3], newD2[4], newD2[5], newD2[6]);
        date2= new Date(date2)
        milis = date1 - date2;

    }
    

    let time;
    let mensaje
    let round;
    if (Math.abs(milis) < 1000) {
        time = milis;
        round= roundTime(milis/minutos," minute")
    } else if (Math.abs(milis) > 1000 && Math.abs(milis) < 60000) {
        time = milis / segundos;
        round = roundTime(time, " second")
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
    } else if (Math.abs(milis) / mes > 0 && Math.abs(milis) / mes < 5) {
        time = milis / mes;
        round = roundTime(time, " month")
    } else if (Math.abs(milis) / año > 0.5 || Math.abs(milis) === año) {
        time = milis / año;
        round = roundTime(time, " year")
    }
    console.log(time)
    return round;

}

// console.log(time, mensaje)


// let dateFuck = new Date(2019, 06, 13, 6);
// let dateFuck2 = new Date(2012, 03, 24, 13);
// let today = Date.now()
// let test = new Date(2012, 03, 21, 14, 00, 000)

console.log(toLazyHuman('2019-07-31T12:00:00.100', '2019-07-31T12:00:00.000'))


//Round time, funcion para redonder e imprimir mensajes
function roundTime(time, div) {
    let past;
    let future;
    let less = "less than ";
    let more = "more than ";
    let msj;
    let absTime = Math.abs(time);
    console.log(time)
    let numbers = ["1", "2", "5", "10", "20", "30"];
    if (time < 0) {
        past = " ago";
        future = "";
    } else {
        past = "";
        future = "in ";
    }
    // if (absTime !== 1) {
    //     div += "s"
    // }

    if (absTime > 0.0001 && 0.9999 > absTime) {
        msj = future + less + numbers[0]+div + past
    } else if (absTime === 1.00) {
        msj = future + numbers[0] + div + past
    } else if (absTime > 1.1000 && absTime < 1.4999) {
        msj = future + more + numbers[0] + div + past;
    } else if (absTime > 1.5 && absTime < 1.9999) {
        msj = less + numbers[1] + div+"s" + past; //less 2
    } else if (absTime === 2) {
        msj = future + numbers[1] + div+"s" + past;//2 ago
    } else if (absTime > 2.1000 && absTime < 3.4999) {
        msj = future + more + numbers[1] + div+"s" + past; //more 2
    } else if (absTime > 3.5 && absTime < 4.9999) {
        msj = future+less + numbers[2] + div+"s" + past;//less 5
    } else if (absTime === 5) {
        msj = future + numbers[2] + div+"s" + past;// 5 ago
    } else if (absTime > 5.1000 && absTime < 7.4999) {
        msj = future + more + numbers[2] + div+"s" + past;// more 5
    } else if (absTime > 7.5 && absTime < 9.9999) {//less 10
        msj = future + less + numbers[3] + div+"s" + past;
    } else if (absTime === 10) {
        msj = future + numbers[3] + div+"s" + past;//10 ago
    } else if (absTime > 10.1000 && absTime < 14.4999) {
        msj = future + more + numbers[3] + div+"s" + past; // more 10
    } else if (absTime > 14.5 && absTime < 19.9999) {
        msj = future + less + numbers[4] + div+"s" + past;//less 20
    } else if (absTime === 20) {
        msj = future + numbers[4] + div+"s" + past//20 ago
    } else if (absTime > 20.1000 && absTime < 24.4999) {
        msj = future + more + numbers[4] + div+"s" + past;//more 20
    } else if (absTime > 25 && absTime < 29.9999) {
        msj = future + numbers[5] + div+"s" + past; //less 30
    } else if (absTime === 30) {
        msj = future + numbers[5] + div+"s" + past;//30 ago
    } else if (absTime > 30.1000) {
        msj = future + more + numbers[5] + div+"s" + past;//more 30
    }
    return msj;
}

module.exports ={
    jsonTimes,
    toLazyHuman
};