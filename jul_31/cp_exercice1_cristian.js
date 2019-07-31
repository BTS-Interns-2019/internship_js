function avoidingFire(...arra){
    arra = arra.sort((a,b)=> b-a);
    result = arra.filter( (val, i)=> {return val <=arra[0] });
    return result.length;
}

console.log(avoidingFire([1,2,3,4,5,6]));