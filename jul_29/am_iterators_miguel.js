module.exports = {
    porCada,
    mapa,
    filtro,
    reducir,
    reducirADerecha
}
/* create your own iterator fuctions for arrays

    forEach
    map
    filter
    reduce
    reduceRight

you cannot use the array method that you are trying to replicate
reduce cannot use reduceRigth and viceversa */

function porCada(arreglo,funcion){
    for(let i=0;i<arreglo.length;i++){
        funcion(arreglo[i],i,arreglo);
    }
}
/*var arreglo = [1,2,3,4,5];
porCada(arreglo,function(element,i,a){
    console.log(element+" "+i+" "+a);
});*/
function mapa(arreglo,funcion){
    let aux = [];
    for(let i=0;i<arreglo.length;i++){
        aux[i] = funcion(arreglo[i],i,arreglo);
    }
    return aux;
}
/*var arreglo = [1,2,3,4,5];
mapa(arreglo,function(element){
    element+1;
});*/
function filtro(arreglo,funcion){
    let aux = arreglo;
    for(let i=0;i<arreglo.length;i++){
        if(funcion(arreglo[i],i,arreglo)==false){
            aux.splice(i,1);
        }
    }
    return aux;
}
function reducir(arreglo,funcion){
    let aux = arreglo;
    let primer;
    for(let i=0;i<arreglo.length;i++){
        aux[i]=funcion(primer,arreglo[i],i,arreglo);
        primer=aux[i];
        aux.shift();
    }
    return aux;
}
arreglo = [50,20,10,5,4,3,2,1];
function restar(total,num){return total-num;}
console.log(reducir(arreglo, restar))
function reducirADerecha(){

}