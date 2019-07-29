function eureka(arry,n) {
    let verdad = false;
    for (let i = 0; i < arry.length; i++) {
        if(arry[i] !== undefined){
        if(arry[i] == n){
            verdad = true;
        }
        }

    return verdad;
}
}

console.log(eureka([1, 2, 3], "2"));


function laFilaDeLasTortillas(arry1, arry2) {
    let newArry = [];
    for (let i = 0; i < arry1.length; i++) {
        if(arry1[i] !== undefined){
            newArry[newArry.length] = arry1[i];
            }
    }
    for (let j = 0; j < arry2.length; j++) {
        if(arry2[j] !== undefined){
        newArry[newArry.length] = arry2[j];
        }
    }

    return newArry;
}

console.log(laFilaDeLasTortillas([1, 2, 3], [4, , 6]));


function ontas(arry, pos) {
    let noEncontrado = -1;
    for (let l = 0; l < arry.length; l++) {
       if(arry[l] == pos){
           return pos = l
        }
        
    }
    return noEncontrado;
}
console.log(ontas([1, 3, 2, 3], '3'));

function ontasAhora(arry, pos) {
    let noEncontrado = -1;
    for (let l = arry.length; l > 0; l--) {
       if(arry[l] == pos){
           return pos = l
        }
        
    }
    return noEncontrado;
}


console.log(ontasAhora([1, 3, 2, 3], '3'));

function joinMe(arry,string) {
    let res = "";
    for (let i = 0; i < arry.length; i++) {
        res+= arry[i];
        if(i<arry.length-1){
            res+=string
        }
        
    }
    
    return res;
}

console.log(joinMe([1, 3, 2, 3], '-'));


function slicesOfBread(arry, pos1, pos2) {
    let newArry = [];
    for (let i = 0; i < arry.length; i++) {
        if(i == pos1){
            for (let j = i; j < pos2; j++) {
                newArry[newArry.length] = arry[j];
            }

        }
        
    }
    return newArry;
}
console.log(slicesOfBread([1, 3, 2, 3], 1, 3));
// slicesOfBread([1, 3, 2, 3], 1, 3);  // [3, 2]





