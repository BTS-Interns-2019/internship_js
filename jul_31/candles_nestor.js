function avoidingFire(...arrays) {
    let arr = []
    let int = 0;
    arr = arr.concat(...arrays).sort((a,b)=>b - a)
    for (let i = 0; i < arr.length; i++) {
        if(arr[0] == arr[i]){
            int++;
        }        
    }
    return int
}
console.log(avoidingFire([2,2,2,1]));
