let arr = [2, 4, 6, 8];
let arry = ["sergio", "rabanito", "urbanus", "pere", "powers", "marlon"]
let arrFalsy = [false, null, 0, true, 1, "hola"]
let arr2 = [1, 2, 3, 4];


function forEach(callback, array) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i])
    }

}


// console.log(forEach((i) => {  console.log(i+="-") }, arry));


function map(callback, array) {
    newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));

    }
    return newArray;
}

console.log(map((i) => {
    return i.toUpperCase()
}, arry))


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


console.log(filter((i) => {
    if (i) {
        return true
    }
}, arrFalsy));


function reduce(callback, array, initial) {
    let result;
    let ac;
    if (initial === undefined) {
        ac = array[1]
    } else {
        ac = initial
    }
    for (let i = 0; i < array.length; i++) {
        ac = callback(ac, array[i]);
        result = ac
    }
    return ac;
}

console.log(reduce(((acumulate, c) => {
    return acumulate + c
}), arr2, 0));


function reduceRight(callback, array, initial) {
    let result;
    let ac;
    if (initial === undefined) {
        ac = array[1]
    } else {
        ac = initial
    }
    for (let i = array.length - 1; i >= 0; i--) {
        ac = callback(ac, array[i]);
        result = ac
    }
    return ac;
}


console.log(reduceRight(((a, c) => {
    return (a + c)
}), arr, "2"));

module.exports = {
    forEach,
    map,
    filter,
    reduce,
    reduceRight
};