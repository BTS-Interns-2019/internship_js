module.exports = {jsonTimes,toLazyHuman};


//Retornar objeto que contenga {times://numero de veces que aparece viernes 13 en el calendario,dates://arreglo mmddYYYY de las fechas cuando aparece viernes 13}
function jsonTimes(t){
    let aux;
    let date = new Date(0);
    let res = {};
    let arr;
    if(typeof t.getMonth === 'function'){
        date.setDate(t.getDate());
        date.setMonth(t.getMonth());
        date.setFullYear(t.getFullYear());
        date.setHours(t.getHours());
        date.setMinutes(t.getMinutes());
        date.setSeconds(t.getSeconds());
        date.setMilliseconds(t.getMilliseconds());
        arr = getfriday13(date.getFullYear());
        res = {times:arr.length,dates:arr};
        return res;
    }else{
        if(Number.isInteger(t)==true){
            aux = t.toFixed(0);
            aux = aux.split("-");
        }else{
            if(typeof t === 'string'){
                aux = t.split("-");
            }
        }if(aux.length>1 && aux.length<4){
            date.setFullYear(aux[0]);
            date.setMonth(aux[1]);
            date.setDate(aux[2]);
            arr = getfriday13(date.getFullYear());
            res = {times:arr.length,dates:arr};
            return res;
        }else{
            date.setFullYear(t);
            arr = getfriday13(date.getFullYear());
            res = {times:arr.length,dates:arr};
            return res;
        }
    }
}
function getfriday13(year){
    date = new Date(year+'-01-02');
    //console.log("date = "+date);
    let day= "";
    let month= "";
    dates = []
    for(let i=0;i<12;i++){
        date.setMonth(i);
        //console.log(date.getMonth());
        date.setDate(13);
        //console.log("date = "+date);
        //console.log(date.getDay()+" - "+date.getDate());
        if(date.getDay() == 5){//Es viernes
            //console.log("> date = "+date);
            day=date.getDate();
            month=date.getMonth()+1;
            if(day<10){
                //console.log("-d");
                day="0"+day;
        }
            if(month<10){
                //console.log("-m");
                month="0"+month;
            }
            if(year.length<5){
                for(let i=year.length;i<=4;i++){
                    year="0"+year;
                }
            }
            //console.log(day);
            //console.log(month);
            //console.log(year);
            dates.push(month+"/"+day+"/"+year);
        }
        
    }
    return dates;
}
//console.log(getfriday13('1999'));
let obj = new Date('1999-11-20');
/*console.log(jsonTimes(5));
console.log(jsonTimes('1986'));
console.log(jsonTimes('1972-07-22'));
console.log(jsonTimes(obj));*/
/*console.log(jsonTimes('2019-02-03'));//09/13/2019 12/13/2019
console.log(jsonTimes('2012-02-03'));*/
function toLazyHuman(todate,fromdate){
    let res = "";
    if(fromdate==undefined){fromdate.now()}
    let dif = todate-fromdate;
    let rounded = Math.round(dif/1000);
    let val = Math.abs(rounded);
    let num,rnum,otherrnum;
    //rounded values 1, 2, 5, 10, 20, 30
    //magnitudes minutes, hours, days, months, years
    if(val<60){
        res=res+"less than 1 minute";
    }else if(val>59 && val< 3600){//Minute
        num=val/60;
        rnum = Math.round(num);
        if(rnum==1){
            res=res+rnum+" minute";
        }else{
            if(rnum==2 || rnum==5 || rnum==10 || rnum==20 || rnum==30){
                res=res+rnum+" minutes";
            }else{
                otherrnum=letsroundit60(rnum);
                if(otherrnum.charAt(otherrnum.length-1)=='1'){
                    res=res+otherrnum+" minute";
                }else if(otherrnum.charAt(otherrnum.length-1)=='h'){
                    res=res+otherrnum+"our";
                }else{
                    res=res+otherrnum+" minutes";
                }
            }
        }
    }else if(val>3599 && val<86400){//Hour
        num=val/3600;
        rnum = Math.round(num);
        if(rnum==1){
            res=res+rnum+" hour";
        }else{
            if(rnum==2 || rnum==5 || rnum==10 || rnum==20 || rnum==30){
                res=res+rnum+" hours";
            }else{
                otherrnum=letsroundit24(rnum);
                if(otherrnum.charAt(otherrnum.length-1)=='1'){
                    res=res+otherrnum+" hour";
                }else if(otherrnum.charAt(otherrnum.length-1)=='d'){
                    res=res+otherrnum+"ay";
                }else{
                    res=res+otherrnum+" hours";
                }
            }
        }
    }else if(val>86399 && val<2592000){//Day
        num=val/86400;
        rnum = Math.round(num);
        if(rnum==1){
            res=res+rnum+" day";
        }else{
            if(rnum==2 || rnum==5 || rnum==10 || rnum==20 || rnum==30){
                res=res+rnum+" days";
            }else{
                otherrnum=letsroundit30(rnum);
                if(otherrnum.charAt(otherrnum.length-1)=='1'){
                    res=res+otherrnum+" day";
                }else if(otherrnum.charAt(otherrnum.length-1)=='m'){
                    res=res+otherrnum+"onth";
                }else{
                    res=res+otherrnum+" days";
                }
            }
        }
    }else if(val>2591999 && val<31104000) {//Month
        num=val/2592000;
        rnum = Math.round(num);
        if(rnum==1){
            res=res+rnum+" month";
        }else{
            if(rnum==2 || rnum==5 || rnum==10 || rnum==20 || rnum==30){
                res=res+rnum+" months";
            }else{
                otherrnum=letsroundit12(rnum);
                if(otherrnum.charAt(otherrnum.length-1)=='1'){
                    res=res+otherrnum+" month";
                }else if(otherrnum.charAt(otherrnum.length-1)=='y'){
                    res=res+otherrnum+"ear";
                }else{
                    res=res+otherrnum+" months";
                }
            }
        }
    }else if(val>31103999 && val<933120000){//Year
        num=val/31104000;
        rnum = Math.round(num);
        if(rnum==1){
            res=res+rnum+" year";
        }else{
            if(rnum==2 || rnum==5 || rnum==10 || rnum==20 || rnum==30){
                res=res+rnum+" years";
            }else{
                otherrnum=letsroundit30(rnum);
                if(otherrnum.charAt(otherrnum.length-1)=='1'){
                    res=res+otherrnum+" year";
                }else if(otherrnum.charAt(otherrnum.length-1)=='m'){
                    res=res+"more than 30 years";
                }else{
                    res=res+otherrnum+" years";
                }
            }
        }
    }else{
        res=res+"more than 30 years";
    }
    if(rounded<0){
        res = res +" ago";
    }else{
        res = "in "+res;
    }
    return res;

}
function letsroundit60(val){
    let goup, godown;
    if(val>0 && val<1){
        return "less than 1";
    }else if(val>1 && val<2){
        goup = 2 - val;
        godown = val - 1;
        if(goup<godown){
            return "less than 2";
        }else{
            return "more than 1";
        }
    }else if(val>2 && val<5){
        goup = 5 - val;
        godown = val - 2;
        if(goup<godown){
            return "less than 5";
        }else{
            return "more than 2";
        }
    }else if(val>5 && val<10){
        goup = 10 - val;
        godown = val - 5;
        if(goup<godown){
            return "less than 10";
        }else{
            return "more than 5";
        }
    }else if(val>10 && val<20){
        goup = 20 - val;
        godown = val - 10;
        if(goup<godown){
            return "less than 20";
        }else{
            return "more than 10";
        }
    }else if(val>20 && val<30){
        goup = 30 - val;
        godown = val - 20;
        if(goup<godown){
            return "less than 30";
        }else{
            return "more than 20";
        }
    }else if(val>30 && val<60){
        goup = 60 - val;
        godown = val - 30;
        if(goup<godown){
            return "less than 1 h";
        }else{
            return "more than 30";
        }
    }
}
function letsroundit24(val){
    let goup, godown;
    if(val>0 && val<1){
        return "less than 1";
    }else if(val>1 && val<2){
        goup = 2 - val;
        godown = val - 1;
        if(goup<godown){
            return "less than 2";
        }else{
            return "more than 1";
        }
    }else if(val>2 && val<5){
        goup = 5 - val;
        godown = val - 2;
        if(goup<godown){
            return "less than 5";
        }else{
            return "more than 2";
        }
    }else if(val>5 && val<10){
        goup = 10 - val;
        godown = val - 5;
        if(goup<godown){
            return "less than 10";
        }else{
            return "more than 5";
        }
    }else if(val>10 && val<20){
        goup = 20 - val;
        godown = val - 10;
        if(goup<godown){
            return "less than 20";
        }else{
            return "more than 10";
        }
    }else if(val>20 && val<24){
        goup = 24 - val;
        godown = val - 20;
        if(goup<godown){
            return "less than 1 d";
        }else{
            return "more than 20";
        }
    }
}
function letsroundit30(val){
    let goup, godown;
    if(val>0 && val<1){
        return "less than 1";
    }else if(val>1 && val<2){
        goup = 2 - val;
        godown = val - 1;
        if(goup<godown){
            return "less than 2";
        }else{
            return "more than 1";
        }
    }else if(val>2 && val<5){
        goup = 5 - val;
        godown = val - 2;
        if(goup<godown){
            return "less than 5";
        }else{
            return "more than 2";
        }
    }else if(val>5 && val<10){
        goup = 10 - val;
        godown = val - 5;
        if(goup<godown){
            return "less than 10";
        }else{
            return "more than 5";
        }
    }else if(val>10 && val<20){
        goup = 20 - val;
        godown = val - 10;
        if(goup<godown){
            return "less than 20";
        }else{
            return "more than 10";
        }
    }else if(val>20 && val<30){
        goup = 30 - val;
        godown = val - 20;
        if(goup<godown){
            return "less than 1 m";
        }else{
            return "more than 20";
        }
    }
}
function letsroundit12(val){
    let goup, godown;
    if(val>0 && val<1){
        return "less than 1";
    }else if(val>1 && val<2){
        goup = 2 - val;
        godown = val - 1;
        if(goup<godown){
            return "less than 2";
        }else{
            return "more than 1";
        }
    }else if(val>2 && val<5){
        goup = 5 - val;
        godown = val - 2;
        if(goup<godown){
            return "less than 5";
        }else{
            return "more than 2";
        }
    }else if(val>5 && val<10){
        goup = 10 - val;
        godown = val - 5;
        if(goup<godown){
            return "less than 10";
        }else{
            return "more than 5";
        }
    }else if(val>10 && val<12){
        return "less than 1 y";
    }
}
let date1 = new Date('2015-07-07T15:30:00.04');
let date2 = new Date('2015-07-07T15:31:00.04');
let date3 = new Date('2015-07-07T15:44:02.04');
/*console.log(toLazyHuman(date1,date2));
console.log(toLazyHuman(date1,date3));
console.log(toLazyHuman(date2,date1));
console.log(toLazyHuman(date3,date1));*/