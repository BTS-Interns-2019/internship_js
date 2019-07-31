function avoidingFire(...arr) {
    console.log(arr);
    if (Array.isArray(arr)) {
        let result;
        arr.sort((a, b) => { b - a })
        result = arr.filter((value, index) => { return value <= arr[0] });
        return result.length
    }else{
        return false
    }
}


console.log(avoidingFire([1,2,2], [1, 2, 3, 4, 5, 6]));