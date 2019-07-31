function jsonTimes(año){
    if(año.length>4){ return apariciones(new Date(año));
    }else if(año.length==4){
        año=parseInt(año);
    }
    if(Number.isInteger(año)){
        return apariciones(new Date(año.toString()))
    }else return apariciones(año)
}
function apariciones(año){    
    año2=año.getUTCFullYear();
    arr=[];
    año.setUTCMonth(0);
    año.setUTCDate(1);
    while(año.getUTCFullYear()==año2){
        if(año.getUTCDay()==5 && año.getUTCDate()==13)arr.push({
            date:año.getUTCFullYear().toString().padStart(4,"0") + '/' + 
            año.getUTCMonth().toString().padStart(2,"0")+ "/" + 
            año.getUTCDate().toString().padStart(2,"0")
        });
        año.setUTCDate(año.getUTCDate()+1);
    }
    return{times:arr.length, dates:arr}    
}
const d = new Date()
jsonTimes(2018);
jsonTimes("2000");
jsonTimes(d);
jsonTimes(d.toISOString());

test("prueba con int",()=>{
    expect(jsonTimes(2018)).toEqual({"times": 2, "dates": [{"date": "2018/03/13"}, {"date": "2018/06/13"}]});
})
test("prueba con string",()=>{
    expect(jsonTimes(d.toISOString())).toEqual({"times": 2, "dates": [{"date": "2020/02/13"}, {"date": "2020/10/13"}]});
})