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

function toLazyHuman (TimeA, TimeB){
    if (TimeB == undefined){
        TimeB = Date.now();

        var milisecA = TimeA.getTime();
        var milisecB = TimeB;

        var milisectotal = milisecA - milisecB;
        
    } else {
        var milisecA = TimeA.getTime();
        var milisecB = TimeB.getTime();
        
    
        var milisectotal = milisecA - milisecB;
    }
    console.log(milisectotal);
}

var horaA = new Date(2012, 3, 21, 14, 00, 00);
var horaB = new Date(2012, 3, 21, 18, 26, 35);

console.log(toLazyHuman(horaA, horaB));
