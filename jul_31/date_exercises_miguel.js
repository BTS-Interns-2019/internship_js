module.exports = toLazyHuman;

function jsonTimes(t){
    let aux;
    let date = new Date(0);
    if(Number.isInteger(t)==true){
        aux = t.toFixed(0);
        aux = aux.split("-");
    }else{
        aux = t.split("-");
    }
    if(aux.length>1 && aux.length<4){
        console.log("b");
        
    }else{
        console.log("a");
        date.setFullYear(t);
        return date;
    }
    
}
//console.log(jsonTimes(5));
//console.log(jsonTimes('1986'));
//console.log(jsonTimes('1972-07-22'));
//console.log(jsonTimes({year:1999,month:11,day:20}));}
function toLazyHuman(todate,fromdate){
    let res = "";
    if(fromdate==undefined){fromdate.now()}
    let dif = todate-fromdate;
    let rounded = Math.round(dif/1000);
    let val = Math.abs(rounded);
    let num,rnum,otherrnum;
    //rounded values 1, 2, 5, 10, 20, 30
    //magnitudes minutes, hours, days, months, years
    /* letsroundit 60,
    hours 24
    days 30
    months 12
    years ** */
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
    //Positive or negative
    if(rounded<0){
        res = res +" ago";
    }else{
        res = "in "+res;
    }
    return res;
    //return diferencia entre dos fechas

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
        goup = 12 - val;
        godown = val - 10;
        if(goup<godown){
            return "less than 1 y";
        }else{
            return "more than 10";
        }
    }
}
let date1 = new Date('2015-07-07T15:30:00.04');
let date2 = new Date('2015-07-07T15:31:00.04');
let date3 = new Date('2015-07-07T15:44:02.04');
console.log(toLazyHuman(date1,date2));
console.log(toLazyHuman(date1,date3));
console.log(toLazyHuman(date2,date1));
console.log(toLazyHuman(date3,date1));