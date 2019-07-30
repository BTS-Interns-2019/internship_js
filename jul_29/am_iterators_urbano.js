let arr = [2, 4, 6, 8];
let arry = ["sergio","rabanito","urbanus","pere","powers","marlon"]
let arrFalsy=[false,null,0,true,1,"hola"]

function forEach(callback, array) {
    for (let i = 0; i < array.length; i++) {
        // console.log()
         callback(arr[i])
    }
}

function map(callback, array) {
    newArray=[];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));        
        
    }
    return newArray;
}
console.log(map((i)=>{return i.toUpperCase()},arry))


console.log(forEach((i) => { return i+="-" }, arry));

function filter(callback, array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        // console.log(callback(arr[i]))
        if (callback(array[i]) == true) {
            newArray.push(array[i])
        }
    }
    return newArray
}

console.log(filter((i) => { if (i) { return true } }, arrFalsy));
let ac;
function reduce(callback,array) {
    for (let i = 0; i < array.length; i++) {
        callback(ac+=callback(),arr[i]);
    }
    return ac;
}
console.log(reduce((a,c)=>  a + c ),arr);