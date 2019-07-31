function avoidingFire(...arra){
    /*console.log(...arra)
    arra = arra.sort((a,b)=> b-a);
    result = arra.filter( (val, i)=> { Math.max.apply(val) });
    console.log(result + "gt")
    return result.length;*/
    var result = arra
    .reduce( (acc, item) => acc.concat(item), [])
    .filter( (item,i,array) => item === Math.max(...array))
    .length;//*/
    return result;
}

console.log(avoidingFire( [1,2,3,4],[2,6],[6] ) );