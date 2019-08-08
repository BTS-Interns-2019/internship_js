function avoidingfire (fires){
    num = 0;
    var cont = 0;
    function flatten(fires) {
     return light = fires.reduce((acc, val) => typeof val =="object" ? acc.concat(flatten(val)) : acc.concat(val), []);
    
    }
    light = flatten (fires);
    num = Math.max(...light);   

    for (i = 0; i < light.length; i++){
           if (num === light[i]){
                cont ++;
            }      
    }
     return cont;

}

console.log(avoidingfire([1,6,3,6,5,6,6]));
console.log(avoidingfire([[1,[6],3],6,[5,6],6]));

