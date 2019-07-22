/* 3 ejemplos de utilizacion de try catch que incluyan switch, finally, for, while, return, typeof*/

function f1(numero){
    switch(numero){
        case 1: x = 'A';break;
        case 2: x= 'B';break;
        case 3: x= 'C';break;
    }
    try{
    return x;
    }catch{
        return "No se puede";
    }
}

function f2(arr){
    for(let i=0;i<arr.length;i++){
       z= arr[i];
    }
    try{
        console.log(z);
    }catch{
        console.log(typeof(arr))
    }finally{
        console.log("FIN");
    }
}


function f3(arr){
    let i=0;
    while(i<arr.length){
        try{
            s+=arr[i];
        }catch{
            s=arr[i];
        }finally{
            i++;
        }
    }
    console.log(s);
}


console.log(f1(4));
f2([]);
f3(["4","22","155",""]);