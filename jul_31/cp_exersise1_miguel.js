function avoidingFire(arr){
    let aux = arr.sort((a,b)=>a-b);
    let primero = arr.indexOf(aux[aux.length - 1]);
    let j=0;
    for(let i=primero;i<aux.length;i++){
        arr.splice(arr.indexOf(aux.length-1),1);
        j++;
    }
    return j;
}
console.log(avoidingFire([1,2,3,4,5,6]));
console.log(avoidingFire([6,5,4,3,2,1,2,3,4,5,6]));