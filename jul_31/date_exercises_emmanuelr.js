function jsonTimes(año){
    if(año.length>4){ return apariciones(new Date(año));
    }else if(año.length==4){
        año=parseInt(año);
    }
    if(Number.isInteger(año)){
        apariciones(new Date(año.toString()))
    }else apariciones(año)
}
function apariciones(año){
    año.setMonth(0);
    año.setDate(1);
    console.log(año.getDay())
}
const d = new Date()
jsonTimes(2000);
jsonTimes("2000");
jsonTimes(d);
jsonTimes(d.toISOString());