function foreach (cad){
for (i = 0; i < cad.length; i++){
  // console.log(cad[i]+" " + i + " "+"["+cad+"]");
}
return cad
}

//module.exports = foreach;

console.log(foreach([1,2,3,4,5,]));

function maps (cad, cont){
    res =[];
    for (i = 0; i < cad.length; i++){
            res[i] = cad[i] + cont;
        
    }
    return res;
}

console.log(maps(["hjj","cmn","jdf"], 4));

//module.exports = maps;

function filters (cad, cont){
    res = [];
    for (i = 0, j = 0; i < cad.length; i++, j++){
        if (cad[i] === cont){
            if (i < cad.length - 1){
            res[j] = cad[i];
        } else if (i == cad.length - 1){
            res[j] = cad[i];
        }
    } else if (cad [i]){
            if (i < cad.length - 1){
            res[j] = cad[i];
        } else if (i == cad.length - 1){
            res[j] = cad[i];
        }
}
    }
    return res;
}

console.log(filters([2,11,2,21,2,98], 2));

//module.exports = filters;

module.exports = filters;

function reduces (cad, acu){
    for (i = 0; i < cad.length; i++){
            acu = acu + cad[i];
    }
    return acu
}

console.log(reduces(["hey", 2, 5, "lol"], 2))

//module.exports = reduces;


function reducesright (cad, acu){
    for (i = cad.length - 1; i >= 0; i --){
            acu = acu + cad[i];
    }
    return acu
}

console.log(reducesright(["hjj","cmn","jdf"], "hjj"))

module.exports = {
    foreach,
    maps,
    filters,
    reduces,
    reducesright
};


