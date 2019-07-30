//6.-
function slicesOfBread(arr, pos1,pos2)
{
    let dev = []
    for (let i = 0; i < arr.length; i++) {
        if(i >= pos1 && i < pos2){
            if(arr[i] != undefined){
                dev[dev.length] = arr[i];
            }
        }
    }
    return dev;
}
console.log(slicesOfBread([1,3,2,3],1,3));
//5.-
function joinMe(arr, car){
    var ret = "";
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] != undefined){
            if(i==arr.length-1){
                ret+=arr[i];
            }else{
                ret +=arr[i] + car
            }
        }
    }
    return ret;
}
console.log(joinMe([1,3,2,3,4,5,7],"-"));

//4.-
function ontasAhora(arr, pos){
    pos = parseInt(pos);
    for (let i = arr.length; i > 0; i--)
    {
        if(arr[i]==pos){
            return i;
        }
    }
    return -1;
}
console.log(ontasAhora( [2,3,2,3], '2') );
//3.-

function ontas(arr, pos){
    pos = parseInt(pos);
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==pos){
            return i;
        }
    }
    return -1;
}
console.log(ontas( [1,3,2,3], '3') );

//2.-
function laFilaDeLasTortillas(arr1, arr2){
    let arr = [];
    for (let i = 0; i < arr1.length; i++) {
        if(arr1[i] != undefined){
            var a = arr.length;
            arr[a]=arr1[i]
        }else{
            continue;
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if(arr2[i] != undefined){
            var a = arr.length;
            arr[a]=arr2[i]
        }else{
            continue;
        }
    }
    return arr;
}
console.log(laFilaDeLasTortillas([1,2,,4],[4,5,6]));

//1.-
function eureka(arr, str){
    str = parseInt(str);
    for (ar of arr)
    {
        if (ar == str)
        {
            return true;
        }else{
            ds= false;
        }
    }
    return ds;
}

console.log(eureka( [1,2,3], "2" ));//*/