function eureka(arr, cadena){
    for (const x of arr) {
        if (x==cadena)return true;
    }
    return false;
}
function laFilaDeLasTortillas(arr1,arr2){
    let arr=[]
    for (const x of arr1) {
        arr[arr.length]=x;
    }
    for (const x of arr2) {
        arr[arr.length]=x;
    }
    return arr;
}
function ontas(arr, cadena) {
    for (const x in arr) {
        if(arr[x]==cadena)return x;
    }
    return -1;
}
function ontasAhora(arr, cadena) {
    let num=-1
    for (const x in arr) {
        if(arr[x]==cadena)num=x;
    }
    return num;
}
function joinMe(arr, joined){
    let cadena=arr[0];
    for(let i = 1; i < arr.length; i++){
        cadena+=(joined+arr[i]);
    }
    return cadena;
}
function sliceOfBread(arr, inicio, fin){
    if(inicio<0)inicio=0;
    arreglito=[];
    for(let i = inicio; i < arr.length && i<fin; i++){
        arreglito[arreglito.length]=arr[i];
    }
    return arreglito;
}

var fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
var vegetables = ["Carrot", "Potatoe", "Tomato"];
// console.log(eureka(fruits,"Mango"));
// console.log(laFilaDeLasTortillas(fruits,vegetables));
// console.log(ontas(fruits, "Apple"));
// console.log(ontasAhora(fruits, "Apple"));
// console.log(joinMe(fruits,"//"));
console.log(sliceOfBread(fruits, 4, 7));



