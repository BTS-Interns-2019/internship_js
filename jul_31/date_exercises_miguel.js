function jsonTimes(t){
    let aux;
    if(Number.isInteger(t)==true){
        aux = t.toFixed(0);
    }
    aux = aux.split("-");
    if(aux.length>1){
        console.log("b");
    }else{
        console.log("a");
        let date = new Date(0);
        date.setFullYear(t);
        return date;
    }
    
}
console.log(jsonTimes(5));
console.log(jsonTimes('1986'));
console.log(jsonTimes('1972-07-22'));
console.log(jsonTimes({year:1999,month:11,day:20}));