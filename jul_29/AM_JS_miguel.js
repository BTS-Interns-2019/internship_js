// 1. Write a function `eureka` that takes an array and a string as an argument and returns
//   *true* if the string is in the array. *false* if it is not in.

// eureka([1, 2, 3], "2"); //true

function eureka(arreglo, cadena){
    let tamaño = arreglo.length;
    let valor = parseInt(cadena);
    for(let i=0;i<tamaño;i++){
        if(arreglo[i]==valor){
            return true;
        }
    }
    return false;
}
console.log(eureka([1,2,3],"2"));//true
console.log(eureka([1,2,3],"4"));//false

// 2. Write a function `laFilaDeLasTortillas` that takes 2 array as an argument and returns an
//   *Array* with all the elements in the 2 arrays.
//   **Hint:** the original arrays must not be modified

// laFilaDeLasTortillas([1, 2, 3, 4], [4, 5, 6]); // [1,2,3,4,4,5,6]
function laFilaDeLasTortillas(arr1,arr2){
    let arr1long = arr1.length;
    for(let i = 0;i<arr2.length;i++){
        arr1[arr1long+i] = arr2[i];
    }
    return arr1;
}
console.log(laFilaDeLasTortillas([1,2,3,4],[4,5,6]));//[1,2,3,4,4,5,6]

// 3. Write a function `ontas` that takes an array and a string as arguments and returns the
//   *first* index of the element if the element was found, if not then return -1


// ontas([1, 3, 2, 3], '3');
function ontas(arreglo,cadena){
    let tamaño = arreglo.length;
    let valor = parseInt(cadena);
    for(let i=0;i<tamaño;i++){
        if(arreglo[i]==valor){
            return i;
        }
    }
    return -1;
}
console.log(ontas([1,3,2,3],'3'));//1

// 3. Write a function `ontasAhora` that takes an array and a string as arguments and returns the
//   *last* index of the element if the element was found, if not then return -1


// ontasAhora([1, 3, 2, 3], '3');
function ontasAhora(arreglo,cadena){
    let tamaño = arreglo.length;
    let valor = parseInt(cadena);
    for(let i=tamaño;i!=0;i--){
        if(arreglo[i]==valor){
            return i;
        }
    }
    return -1;
}
console.log(ontasAhora([1,3,2,3],'3'));//3


// 4. Write a function `joinMe` that takes an array and a string as an argument and returns a
//   string with all the elements of the array separated by the string


// joinMe([1, 3, 2, 3], '-'); // "1-3-2-3"

function joinMe(arreglo, comodin){
    let longitud = arreglo.length;
    let res="";
    for(let i = 0;i<longitud;i++){
        if(i==longitud-1){
            res=res+arreglo[i];
        }else{
            res=res+arreglo[i]+comodin;
        }
    }
    return res;
}
console.log(joinMe([1, 3, 2, 3], '-'));//"1-3-2-3"

// 5. Write a function `slicesOfBread` that takes an array and 2 numbers as an argument and returns
//   an array with the elements between the 2 numbers


// slicesOfBread([1, 3, 2, 3], 1, 3);  // [3, 2]

function slicesOfBread(arreglo, inicio, fin){
    let nuevo = [];
    let primero = ontas(arreglo,inicio);
    let ultimo = ontasAhora(arreglo,fin);
    for(let i = primero+1, j=0;i<ultimo;i++,j++){
        nuevo[j] = arreglo[i];
    }
    return nuevo;
}
console.log(slicesOfBread([1,3,2,3], 1, 3));//[3,2]