function avoidingfire (arr){
    max = Math.max.apply(null,arr);
    var char = arr.reduce((val, ind)=>{ 
    val[ind] = (val[ind] | 0) + 1;
    return val;
    },{});
    return char;

}

console.log(avoidingfire([1,2,3,4,5,6,6]));