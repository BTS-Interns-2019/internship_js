function foreach (cad){
for (i = 0; i < cad.length; i++){
   console.log(cad[i]+" " + i + " "+"["+cad+"]");
}
return undefined
}

module.exports = foreach;

console.log(foreach([1,2,3,4,5,]));

function maps (cad, cont){
    res =[];
    for (i = 0; i < cad.length; i++){
            res[i] = cad[i] + cont;
        
    }
    return "["+res+"]";
}

console.log(maps(["hey", 2,5,"lol"], 2));

module.exports = maps;

function filters (cad, cont){
    res = [];
    for (i = 0; i < cad.length; i++){
        if (cad[i] || cad[i] == cont){
            if (i < cad.length - 1){
            res += cad[i]+",";
        } else if (cad[i] && i == cad.length - 1){
            res += cad[i];
        }
    }
}
    return "["+res+"]";
}

console.log(filters([NaN,null,"",4,"hola",6], true));

module.exports = filters;

function reduces (cad, acu){
    for (i = 0; i < cad.length; i++){
            acu = acu + cad[i];
    }
    return acu
}

console.log(reduces(["hey", 2, 5, "lol"], 2))

module.exports = filters;


function reducesright (cad, acu){
    for (i = cad.length - 1; i >= 0; i --){
            acu = acu + cad[i];
    }
    return acu
}

console.log(reducesright(["hey", 2, 5, "lol"], 2))





