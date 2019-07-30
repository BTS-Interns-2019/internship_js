function reduce(callback, array)
{
    var venga;
    for (let i = 0; i < array.length; i++) {
        venga += callback(array[i]);
    }
    return venga;
}
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(reduce( function(accumulator, currentValue) {return accumulator + currentValue}, 123, 0) );


//map
function map(callback, arr){
    var newarr = []
    for (let i = 0; i < arr.length; i++) {
        newarr.push(callback(arr[i]));
    }
    return newarr;
}
arr = [1,2,3,4];
console.log(map(function(a){return a/2}, arr));


//filtter
function filter(callback, array){
    var newarr=[];
    for (let i = 0; i < array.length; i++)
    {
        if(!!array[i])
        {
            newarr.push(array[i]);
        }
    }
    //console.log(newarr);
    return newarr;
}

a= [false,null,true,1,"hola",,];
console.log(filter((i)=>{ if(i!=false){return true} }, a));
console.log(filter((i)=>{ if(i){return true} }, a));

//forEach
function forEach(callback, arr){
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
//*/