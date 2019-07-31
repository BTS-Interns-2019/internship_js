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
    let rounded = Math.round(dif);
    let val = Math.abs(rounded);
    let num,rnum;
    if(val>1000 && val<60000){
        num=val/1000;
        console.log(num);
        rnum = Math.round(num);
        console.log(rnum);
        res=res+rnum+" seconds";
    }else if(val>59999 && val< 3600000){
        num=val/60000;
        console.log(num);
        rnum = Math.round(num);
        console.log(rnum);
        res=res+rnum+" minutes";
    }
    if(rounded<0){
        res = res +" ago";
    }
    return res;
    //return diferencia entre dos fechas

}
let date1 = new Date('2015-07-07T15:30:00.04');
let date2 = new Date('2015-07-07T15:31:00.04');
console.log(toLazyHuman(date1,date2));