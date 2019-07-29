//Array Iterator Methods

//create your own interator functions for arrays
//map, forEach, filter, reduce, reduceRight

function forEach(arr,fun){
 for(let v of arr){
     fun(v);
 }
}

function map(arr,fun){
 let res = []
 for(let v of arr){
     res.push(fun(v))
 }
 return res;
}

function filter(arr,fun){
    let res=[];
    for(let v of arr){
        if(fun(v)){
            res.push(v);
        }
    }
    return res;
}

function reduce(arr,fun,...acum){
    if(acum.length==0){
        acum=0;
    }else{
        acum=acum[0];
    }
 for(let v of arr){
     acum=fun(v,acum)
 }
 return acum;
}

function reduceRight(arr,fun,...acum){
    if(acum.length==0){
        acum=0;
    }else{
        acum=acum[0];
    }
    for(let i=arr.length-1; i>=0;i--)
    {
        let v = arr[i];
        acum=fun(v,acum)
    }
    return acum;
   }
module.exports={
    forEach,
    map,
    filter,
    reduce,
    reduceRight
}

//create test
// 3 test for each function and name them properly