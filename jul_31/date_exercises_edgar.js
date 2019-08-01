function JsonTimes (param) {
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

       return JSON.stringify(calen, null);


    }
    

param = "2020-15-11";
console.log(JsonTimes (param))

function toLazyHuman (d, e){
    if (!e){
        e = new Date (Date.now());
    }
    console.log(d)
   // var d = new Date(tA);
   // var e = new Date(tB);
var date1=d.getFullYear()+' '+((d.getMonth()+1)<10?"0"+(d.getMonth()+1):(d.getMonth()+1))+' '+(d.getDate()<10?"0"+d.getDate():d.getDate());
var time1=(d.getHours()<10?"0"+d.getHours():d.getHours())+' '+(d.getMinutes()<10?"0"+d.getMinutes():d.getMinutes())+' '+(d.getSeconds()<10?"0"+d.getSeconds():d.getSeconds());
var date2=e.getFullYear()+' '+((e.getMonth()+1)<10?"0"+(e.getMonth()+1):(e.getMonth()+1))+' '+(e.getDate()<10?"0"+e.getDate():e.getDate());
var time2=(d.getHours()<10?"0"+e.getHours():e.getHours())+' '+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+' '+(e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds());

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
//console.log(rest)
console.log(rest2);
rest3 = rest2;
found4 = rest2.find(elemento => elemento != 0);
found = found4;
found3 = rest2.findIndex(elemento =>elemento != 0);
//console.log(found3 + "hi")
    var frase = "";
    if (found > 0){
       frase ="in"+" "+ moreless(rest2) +" "+ yearmonthday(rest3); 
    } else {
        frase = moreless(rest3) +" "+ yearmonthday(rest2)+" ago";
    } 

    return frase;

function yearmonthday (found1){
//    rest3 = rest3.fill(found4,found3 - 2, found3 -1)
  //  console.log(rest3 + "be")
  var found1 = rest3.findIndex(elemento => elemento != 0);  
  //console.log(found1+"hola")
    switch (found1){
        case 0:
            if (Math.abs(found4) > 1){
            return "Years"
            } else {
             return "Year"   
            }
           // break;
        case 1:
            if (Math.abs(found4) > 1){
            return "Months"
            } else {
             return "Month"   
            }
           // break;
        case 2:
            if (Math.abs(found4) > 1){
            return "Days"
            } else {
             return "Day"   
            }
           // break;
        case 3:
            if (Math.abs(found4) > 1){
            return "Hours"
            } else {
             return "Hour"   
            }
           // break;
        case 4:
            if (Math.abs(found4) > 1){
            return "Minutes"
            } else {
             return "Minute"   
            }
           // break;
        case 5:
            if (Math.abs(found4) > 1){
            return "Seconds"
            } else {
             return "Second"   
            }
           // break;
    }

}

function moreless (restar){
  found1 = restar.findIndex(elemento =>elemento != 0); 
  //zaz = restar.find(elemento => elemento != 0);
  //restar = restar.fill(0, found1, found1 + 1);
  //console.log(restar); 
   found2 = restar.find (elemento => elemento != 0);
   found3 = (restar.findIndex (elemento => elemento != 0)) + 1;
  // restar = restar.fill (zaz,found1, found1)
   //console.log(found3+"ge")
     switch (found3) {
         case 5:
             if (restar[found3] > 0) {
                  return "More than "+ (Math.abs(found));
             } else {
                 return "Less Than " + (Math.abs(found) + 1);
             }
        case 4:
            if (restar[found3] > 0) {
                  return "More than "+ (Math.abs(found));
             } else {
                 return "Less Than " + (Math.abs(found) + 1);
             }
        case 3:
            if (restar[found3] > 0) {
                 return "More than "+ (Math.abs(found));
             } else {
                 return "Less Than " + (Math.abs(found) + 1);
             }
        case 2:
            if ((restar[found3]) > 0){
                 return "More than "+ (Math.abs(found));
             } else {
                 return "Less Than " + (Math.abs(found) + 1);
             } 
        case 1:     
        if (restar[found3] > 0){
                 return "More than "+ (Math.abs(found));
             } else {
                 return "Less Than " + (Math.abs(found) + 1);
             } 
        case 0:
        if (restar[found3] > 0) {
                return "More than "+ (Math.abs(found));
             } else {
                 return "Less Than " + (Math.abs(found) + 1);
             }
     }


}



//console.log(rest3)



}

var hA = new Date(2012, 3, 21, 14, 00, 00);
var hB = new Date(2012, 6, 20, 13, 59, 00);

console.log(toLazyHuman(hA, hB));
