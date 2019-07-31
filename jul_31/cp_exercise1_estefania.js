function avoidingFire(arrays) {
    arr2=Array.from(arrays)
    console.log(arr2)
    // arr2 = arr2.flat()
    max = Math.max.apply(null,arr2)
    console.log(max)
    arrays.forEach(element => {
        if(max === element) {
        }
    });
}

avoidingFire([2,2,2,1], [6,9,2], [7,7,1,2], [8,8,1,7,3])