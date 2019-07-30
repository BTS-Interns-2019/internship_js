function eureka(arr, str) {
    let answ;
    for (const iterator of arr) {
        if (iterator == str) {
            return true
        } else {
            answ = false
        }
    }
    return answ;
}
console.log(eureka([1, 2, 3], "2"));

function laFilaDeLasTortillas(arr1, arr2) {
    // newArr = [...arr1, ...arr2]
    // console.log(arr2)
    // return newArr

    let newArr = [];
    let container;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !==undefined){
            
        }else{

        }
        
    }
}
console.log(laFilaDeLasTortillas([1, 2, 3,undefined], [4, 5, 6]));

function ontas(arr, str) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == str) {
            return i
        }

    }
    return -1
}
console.log(ontas([1, 3, 2, 3], "3"));

function ontasAhora(arr, str) {
    for (let i = arr.length; i >= 0; i--) {
        // console.log(arr[i]);
        if (arr[i] == str) {
            return i
        }

    }
    return -1

}
console.log(ontasAhora([1, 3, 2, 3], "3"));

function joinMe(arr, str) {
    let result = "";
    for (let i = 0; i <= arr.length; i++) {
        result += arr[i];
        if (i < arr.length - 1) {
            result += str;
        }

    }
    return result;
}
console.log(joinMe([1, 3, 2, 3], "-"));

function slicesOfBread(arr, start, end) {
    let container;
    let nuevo = "";
    let result = [];
    if (end > arr.length) {
        end = arr.length;
    }
    console.log("end", end);
    for (let i = start; i < end; i++) {
        if (arr[i] !== undefined) {
            nuevo += arr[i];
        } else {
            trash = arr[i]
            end++
        }
    }

    container = nuevo.split("");
    for (let i = 0; i < container.length; i++) {
        result[i] = container[i] * 1;

    }

    return result;
}
console.log(slicesOfBread([1, 3, undefined, undefined, 2, 3], 1, 3));

