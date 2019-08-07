function kSum (strNum1, strNum2) {
    strNum1 = strNum1.split("").reverse();
    strNum2 = strNum2.split("").reverse();
    let mayor, menor;
    if(strNum1.length>strNum2.length){
        mayor = strNum1;
        menor = strNum2;
    } else {
        mayor = strNum2;
        menor = strNum1;
    }        
    let suma = new Array(mayor.length+1);
    suma.fill(0);
    for (let i = 0; i < menor.length; i++) {
        suma[i] += parseInt(menor[i]) + parseInt(mayor[i]);
        if (suma[i]>=10){
            suma[i+1]+=1;
            suma[i]=suma[i]%10;
        }    
    }
    for (let i = menor.length; i < mayor.length; i++) {
        suma[i]+=parseInt(mayor[i]);
    }
    if(suma[suma.length-1]===0)suma.splice(suma.length-1,1);
    return suma.reverse().join("");
}

module.exports=kSum;