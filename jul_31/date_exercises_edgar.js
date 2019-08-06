function jsonTimes (param) {
       let year;
       switch (typeof (param)){
           case "number":
               year = param;
               break;
            case "string":
                if (param.length == 4){
                    year = parseInt(param);
                } else {
                    let par = param.split("-")
                    year = par[0];
                }
                break;
            case "object":
                    year = param.getFullYear();
                break;
       }
       let month = 0;
       let fecha;
       let cont = 0;
       let date = [];
       do{
           fecha = new Date (year, month);
           fecha.setDate(13);
           if (fecha.getDay() == 5){
               cont ++;
            date.push(fecha.getMonth() + 1 +"/" + fecha.getDate()+"/" + year);
           }
           month ++;
       } while (month < 12)

       var calen = {
           times: cont,
           dates: date
       }

       return calen;


    }
    

param = "2020-15-11";
console.log(jsonTimes (param));


function toLazyHuman (d, e){
    if (!e){
        e = new Date (Date.now());
    }
    //console.log(d)
   
var date1=d.getFullYear()+' '+((d.getMonth()+1)<10?"0"+(d.getMonth()+1):(d.getMonth()+1))+' '+(d.getDate()<10?"0"+d.getDate():d.getDate());
var time1=(d.getHours()<10?"0"+d.getHours():d.getHours())+' '+(d.getMinutes()<10?"0"+d.getMinutes():d.getMinutes())+' '+(d.getSeconds()<10?"0"+d.getSeconds():d.getSeconds())+' '+(d.getMilliseconds()<10?"0"+d.getMilliseconds():d.getMilliseconds());
var date2=e.getFullYear()+' '+((e.getMonth()+1)<10?"0"+(e.getMonth()+1):(e.getMonth()+1))+' '+(e.getDate()<10?"0"+e.getDate():e.getDate());
var time2=(d.getHours()<10?"0"+e.getHours():e.getHours())+' '+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+' '+(e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds())+' '+(e.getMilliseconds()<10?"0"+e.getMilliseconds():e.getMilliseconds());

var fe1 = (date1+' '+time1);
var fe2 = (date2+' '+time2);

console.log(fe1)
console.log(fe2)
//rest = parseInt(fe1.split().join().replace(/ /gi,"")) - parseInt(fe2.split().join().replace(/ /gi,""))
//rest = Math.abs(rest);

fe1 = (fe1.split(" "));
fe2 = (fe2.split(" "));
var rest2 = [];
for (i = 0; i < fe1.length; i ++){
    rest2[i] = fe1[i] - fe2[i];
}

console.log(rest2);
found4 = rest2.find(elemento => elemento != 0);
found = found4;
found3 = rest2.findIndex(elemento =>elemento != 0);
    var frase = "";
    if (found > 0){
       frase ="in"+" "+ moreless(rest2) +" "+ yearmonthday(rest2); 
    } else {
        frase = moreless(rest2) +" "+ yearmonthday(rest2)+" ago";
    } 

    return frase;

function yearmonthday (found1){
  var found1 = rest2.findIndex(elemento => elemento != 0);  
    switch (found1){
        case 0:
            if (Math.abs(found4) > 1){
            return "years"
            } else {
             return "year"   
            }
           // break;
        case 1:
            if (Math.abs(found4) > 1){
            return "months"
            } else {
             return "month"   
            }
           // break;
        case 2:
            if (Math.abs(found4) > 1){
            return "days"
            } else {
             return "day"   
            }
           // break;
        case 3:
            if (Math.abs(found4) > 1){
            return "hours"
            } else {
             return "hour"   
            }
           // break;
        case 4:
            if (Math.abs(found4) > 1){
            return "minutes"
            } else {
             return "minute"   
            }
           // break;
        case 5:
            if (Math.abs(found4) > 1){
            return "Seconds"
            } else {
             return "Second"   
            }
           // break;
        case 6:
            return "minute"

    }

}



function moreless (restar){
  found1 = restar.findIndex(elemento =>elemento != 0); 
   found2 = restar.find (elemento => elemento != 0);
   found3 = (restar.findIndex (elemento => elemento != 0)) + 1;
   console.log(found3)
     switch (found3) {
         case 7:
             return "less than 1"
         case 5: 
             if (restar[found3] == 0){
                 return (Math.abs(found))
             }
             if (restar[found3] > 0) {
                  return "more than "+ (Math.abs(found) - 1);
             } else {
                 return "less than " + (Math.abs(found) + 1);
             }
        case 4:
            if (restar[found3] == 0){
                 return (Math.abs(found))
             }
            if (restar[found3] > 0) {
                  return "more than "+ (Math.abs(found) - 1);
             } else {
                 return "less than " + (Math.abs(found) + 1);
             }
        case 3:
            if (restar[found3] == 0){
                 return (Math.abs(found))
             }
            if (restar[found3] > 0) {
                 return "more than "+ (Math.abs(found) - 1);
             } else {
                 return "less than " + (Math.abs(found) + 1);
             }
        case 2:
            if (restar[found3] == 0){
                 return (Math.abs(found))
             }
            if ((restar[found3]) > 0){
                 return "more than "+ (Math.abs(found)- 1);
             } else {
                 return "less than " + (Math.abs(found) + 1);
             } 
        case 1:  
        if (restar[found3] == 0){
                 return (Math.abs(found))
             }   
        if (restar[found3] > 0){
                 return "more than "+ (Math.abs(found) - 1);
             } else {
                 return "less than " + (Math.abs(found));
             } 
        case 0:
            if (restar[found3] == 0){
                 return (Math.abs(found))
             }  
        if (restar[found3] > 0) {
                return "more than "+ (Math.abs(found));
             } else {
                 return "less than " + (Math.abs(found));
             }
     }


}



//console.log(rest3)



}

var hA = new Date('2008-08-31T12:04:00.000');
var hB = new Date('2019-07-31T12:00:00.000');

console.log(toLazyHuman(hA, hB));

module.exports = {
    jsonTimes,
    toLazyHuman
}
