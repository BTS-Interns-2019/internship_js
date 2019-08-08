function eureka (arr, cad){
    cont = 0;
    for (i = 0; i < arr.length; i++){
        if (arr[i] == cad){
            cont ++;
        } 
}
if (cont >= 1){
    return "True";
} else {
    return "False";
}
}

console.log(eureka([1, 2, 3, undefined, 5, 6], "5"));

function laFilaDeLasTortillas (arr1, arr2){
    l = arr1.length;
    for (i = 0; i < arr2.length; i++){
        arr1[l + i] = arr2[i];
    }
    return arr1
}

console.log(laFilaDeLasTortillas([1,2,3],[1,2,3]));

function ontas (arr, cad){
    for (i = 0; i < arr.length; i++){
        if (arr[i] == cad){
            return arr[i] +" en la posicion "+ (i + 1);
        } 
    }
    return "-1" 
}

console.log(ontas ([1,2,3,4,2], "2"))

function ontasahora (arr, cad){
    cont = [];
    for (i = 0; i < arr.length; i++){
        if (arr[i] == cad){
            for (j = i + 1; j < arr.length; j++){
                if (arr[j] == cad)
                return arr[j] +" en la posicion " +(j +1);
            }
        } 
    }
    return "-1";

}

console.log(ontasahora ([1,2,3,4,2], "2"))

function joinMe (arr, cad){
    arra = "";
    for (i = 0; i < arr.length; i++){
   if (i < arr.length - 1){
        arra += arr [i];
        arra += cad;
     } else if (i == arr.length - 1){
        arra += arr[i];
    } 
    }
    return arra;
}

console.log(joinMe([1,2,3,4,5,6], "-"));

function slicesofBread (arr, n1,n2){
    arra = [];
    for (i = 0; i < arr.length; i++){
         if (arr[i] == n1){
             for (j = i + 1, x = 0; j < arr.length; j++, x++ ){
                 if (arr[j] == n2){
                     break;
                 }
            arra[x] = arr[j]
             }
        }
        }
    return arra;
}

console.log(slicesofBread([1,2,3,4,5,6,7], 2, 6));