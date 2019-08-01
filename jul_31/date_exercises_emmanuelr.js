function jsonTimes(date){
    let d;
    switch(typeof(date)){
        case "string":
            if (date.length > 4) d = new Date(date);
            else d = new Date(parseInt(date), 0);
            break;
        case "number":
            d = new Date(date, 0)
            break;
        case "object":
            d=date;
            break;
    }
    return apariciones(d);
}
function apariciones(d){
    count=0;
    arr=[];
    for (let i = 0; i < 12; i++) {
        d.setMonth(i);
        d.setDate(13);
        if (d.getDay()==5) {
            arr.push(
                (d.getMonth()+1).toString().padStart(2,"0") + "/" + 
                d.getDate().toString().padStart(2,"0") + '/' +
                d.getFullYear().toString().padStart(4,"0")
            )
        }
    }
    return{times:arr.length, dates:arr}
}
/*
const d = new Date(2019, 9)
console.log(d);

console.log(jsonTimes(2019));
console.log(jsonTimes(d));
console.log(jsonTimes("2000"));
console.log(jsonTimes(d));
console.log(jsonTimes(d.toISOString()));//*/

function toLazyHuman(d1, d2){
    numeros=[1,2,5,10,20,30];
    let cadena="",moreLess="", magnitud, numero; //redondeo=-1=more redondeo=1=less
    if(d2==undefined)d2=new Date();
    let rest=Math.abs(d1-d2);//ya que el signo solo afecta el ago o in, no es necesario para el resto
    const dif=new Date(rest);
    //console.log(dif);
    
    let años=dif.getUTCFullYear()-1970;
    let meses=dif.getUTCMonth();
    let dias=dif.getUTCDate()-1;
    let horas=dif.getUTCHours();
    let minutos=dif.getUTCMinutes();
    let milis=dif.getUTCSeconds()*1000+dif.getUTCMilliseconds();    
    let maxDias=new Date((d1.getTime()+d2.getTime())/2);
    maxDias.setMonth(maxDias.getMonth()+1);
    let diasMes=maxDias.setDate(0);
    

    if(años===0){  //si la diferencia es menor a un año, continua con meses, dias, etc
        if (meses===0){
            if(dias===0){
                if(horas===0){
                    if(minutos===0){
                        magnitud="minute";
                        numero=1;
                        moreLess=1;
                    }else if(masMitad([[minutos,29],[milis,29999]])){
                        magnitud="hour"
                        numero=1
                        moreLess=1
                    }else{
                        magnitud="minute"
                        let r=round(minutos, [[milis,29999]])
                        moreLess=r.red;
                        numero=r.num;
                    }
                }else if(masMitad([[horas,11],[minutos,29],[milis,29999]])){
                    magnitud="day"
                    numero=1
                    moreLess=1
                }else{
                    magnitud="hour"
                    let r=round(horas, [[minutos,29],[milis,29999]])
                    moreLess=r.red;
                    numero=r.num;
                }
            }else if(masMitad([[dias, diasMes/2],[horas,11],[minutos,29],[milis,29999]])){
                magnitud="month"
                numero=1
                moreLess=1
            }else{
                magnitud="day"
                let r=round(days, [[horas,11],[minutos,29],[milis,29999]])
                moreLess=r.red;
                numero=r.num;
            }
        }else if(masMitad([[meses,5],[dias, diasMes/2],[horas,11],[minutos,29],[milis,29999]])){
            magnitud="year"
            numero=1
            moreLess=1
        }else{
            magnitud="month"
            let r=round(meses, [[dias, diasMes/2],[horas,11],[minutos,29],[milis,29999]])
            moreLess=r.red;
            numero=r.num;
        }
    }else{
        magnitud="year"
            let r=round(años,[[meses,5],[dias, diasMes/2],[horas,11],[minutos,29],[milis,29999]])
            moreLess=r.red;
            numero=r.num;
    }
    


    //console.log(d1,d2);
    //console.log(moreLess, numero, magnitud,);
    
    if(moreLess==1)cadena+="less";
    else if(moreLess==-1)cadena+="more";
    if(moreLess) cadena+=" than ";
    cadena+=numero+" "+magnitud;
    if(numero>1)cadena+="s"
    if(d1-d2<0)return cadena + " ago";
    return ("in "+cadena);
}

// const d0= new Date(2000,07,28, 12,40,1,000);
// const d2= new Date(2000,10,28, 13,3,0,000);
// const d4=new Date (2000,0)
// console.log(toLazyHuman(d0, d4))
// console.log(toLazyHuman(d0))
//console.log(toLazyHuman(d0,d2))

function masMitad(num){
    let act=num[0][0];
    let mitad=num[0][1];
    if(act>mitad)return true;
    else if(act<mitad)return false;
    else if (num.length==1) return 0;
    else{
        num.shift();
        return masMitad(num);
    }
}
function sube(num){
    let act=num[0][0];
    if(act>0)return true;
    if (num.length==1) return false;
    else{
        num.shift();
        return sube(num);
    }
}

function round(num, mitades){ //retorna {num:redondeado, red:redondeo}    
    let numeros=[1,2,5,10,20,30];
    let redondeo;
    let redondeado=check(num);
    if(numeros.indexOf(num)!=-1){
        mitad=sube(mitades);
        if(mitad){
            redondeo=-1
        }else redondeo=undefined;
    }else if(redondeado<num){
        redondeo=-1;
    }else{
         redondeo=+1;
    }
    return {num:redondeado, red:redondeo}
    function check(num, a,b){
        if(a==undefined){
            a=1;
            b=2;
        }
        let numeros=[1,2,5,10,20,30];
        if(Math.abs(a-num)<Math.abs(b-num)){
            return a;
        }else if(b==30){
            return 30;
        }else{
            i=numeros.indexOf(b);
            return check(num, numeros[i], numeros[i+1]);
        }
    }
}
module.exports={
    jsonTimes,
    toLazyHuman
}