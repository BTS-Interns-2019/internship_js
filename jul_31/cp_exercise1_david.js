// array = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];
// array = [1,2,3,4,5,6];
// array = [6,5,4,3,2,1,2,3,4,5,6]
// array = [2,2,2,1];
// array = [[2,2,2,1], [6,9,2], [7,7,1,2], [8,8,1,7,3]];


// console.log(avoidingFire(array));

function avoidingFire(array) {
    if(array.every(elemento => Array.isArray(elemento))) {
        array = array.reduce(function(acc, item) { 
            return acc.concat(item);
         });    
    }
    maximo = Math.max(...array);
    sum = 0;
    for (i = 0; i < array.length; i++) {
        if (maximo == array[i]) {
            sum++;            
        }      
    }
    return sum;
}

module.exports = {
    avoidingFire
};