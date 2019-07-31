function sort(arr, callback){
    if(!Array.isArray(arr)){
        return "Its not Array"
    }
    for(let i = 0; i < arr.length; i++){
        var temp = i;
        for(let x =temp+1; x < arr.length; x++){
            if(arr[temp].toString() > arr[x].toString()){
                arr.splice(temp, 0, arr[x]);
                delete arr[x+1];
                arr.splice(x+1, 1)
                temp++
            }
        }
    }
    return arr
}
console.log([756,34,5,65,34,23,342,1,35,24,45].sort());

console.log(sort([756,34,5,65,34,23,342,1,35,24,45]));
// var x = [756,34,5,65,34,23,342,1,35,24,45];
// x.splice(0, 0, x[1]);
// delete x[2];
// x.splice(2, 1)
// console.log(x);
