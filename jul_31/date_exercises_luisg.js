/***
 * numero - año a buscar
 * 4 caracteres string - año a buscar
 * timeString in ISO 8601 - representa una fecha
 * date object
 * 
 * regresa objeto con
 * times: numero de viernes 13 en ese año
 * dates: [] fechas viernes 13 mm/dd/yyyy stgring
 */
function jsonTimes(param) {
    function format(n) {
        let out = "";
        if (n < 10) {
            out += "0"
        }
        out += n;
        return out;
    }
    let anio
    switch (typeof (param)) {
        case "number":
            anio = param;
            break;
        case "string":
            if (param.length == 4) {
                anio = parseInt(param)
            } else {
                let p = param.split("-");
                anio = p[0];
            }
            break;
        case "object":
            anio = param.getFullYear();
            break;

    }
    let nvie = 0
    let mes = 0
    let d
    let fechas = []
    do {
        d = new Date(anio, mes)
        d.setDate(13)
        if (d.getDay() == 5) {
            nvie++;
            fechas.push(format(d.getMonth() + 1) + "/" + format(d.getDate()) + "/" + anio)
        }
        mes++
    } while (mes < 12)
    let obj = {
        times: nvie,
        dates: fechas
    }
    return obj;

}

function toLazyHuman(date1, date2) {
    let enes = [1, 2, 5, 10, 20, 30]
    let n
    let res
    if (!date2) {
        date2 = new Date(Date.now());
    }

    let difmls = Math.abs(date2.getTime() - date1.getTime());
    let dif_segundos = difmls / 1000;
    let dif_min = dif_segundos / 60;
    let dif_hor = dif_min / 60;
    let dif_dias = dif_hor / 24;
    let dif_meses = dif_dias / 30
    let dif_anios = dif_dias / 365

    function redondeo(arr, valor) {
        let val = 1
        let i = 1
        for (; i < arr.length; i++) {
            val = arr[i]
            if (valor <= val) {
                break;
            }
        }
        if (valor == arr[i-1]) {
            return [valor, 0]
        }
        return valor - arr[i - 1] < arr[i] - valor ? [arr[i - 1], 1] : [arr[i], -1] //5-3>3-2?2:5
    }
    function texto(arr, unidad) {
        let num = arr[0]
        let p = arr[1]
        if (num != 1) {
            unidad += 's'
        }
        let comp = ""
        switch (p) {
            case 1:
                comp = "more than ";
                break;
            case -1:
                comp = "less than "
                break;
        }
        comp = comp + num + " " + unidad
        if(date2-date1>0){
            comp+= " ago"
        }else{
            comp = "in "+comp
        }
        return comp
    }
    if (dif_anios >= 1) {
        enes = [1, 2, 5, 10, 20, 30]
        n = redondeo(enes, dif_anios)
        res = texto(n, "year")
        return res;
    }
    if (dif_meses >= 1) {
        enes = [1, 2, 5, 10, 12, 20, 30]
        n = redondeo(enes, dif_meses)
        if (n[0] == 12) {
            n[0] = 1
            res = texto(n, "year")
        } else {
            res = texto(n, "month")
        }
        return res;
    }
    if (dif_dias >= 1) {
        enes = [1, 2, 5, 10, 20, 30]
        n = redondeo(enes, dif_dias)
        if (n[0] == 30) {
            n[0] = 1
            res = texto(n, "month")
        } else {
            res = texto(n, "day")
        }
        return res;
    }
    if (dif_hor >= 1) {
        enes = [1, 2, 5, 10, 20, 24, 30]
        n = redondeo(enes, dif_hor)
        if (n[0] == 24) {
            n[0] = 1
            res = texto(n, "day")
        } else {
            res = texto(n, "hour")
        }
        return res;
    }
    if (dif_min >= 1) {
        enes = [1, 2, 5, 10, 20, 30,60]
        n = redondeo(enes, dif_min)
        if (n[0] == 60) {
            n[0] = 1
            res = texto(n, "hour")
        } else {
            res = texto(n, "minute")
        }
        return res;
    }
    return res

}
//console.log(toLazyHuman(new Date("2019-07-31T12:00:00.000"),new Date("2019-07-31T12:01:00.000")))
module.exports = {jsonTimes,toLazyHuman};
