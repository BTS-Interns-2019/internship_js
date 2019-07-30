module.exports = sort;

//You must use array methods

//SORT
function sort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i]<arr[j]){
                let aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux;
            }
        }
    }
    return arr;
}
//ENCRIPTAR MENSAJES
function generateSeed(arr){
    console.log(arr);
    let rand; 
    let aux = arr.concat();
    let res = [];
    for(let i=0;i<arr.length;i++){
        //console.log("i = "+i);
        //console.log("total = "+arr.length);
        rand = Math.floor((Math.random() * aux.length));
        res[i] = aux[rand];
        aux.splice(rand,1);
    }
    return res;
}

function encrypt(baseAlphabet,seed,message){
    for(let i =0;i<message.length;i++){
        for(let j=0;j<baseAlphabet.length;j++){
            if(message.charAt(i))
        }
        
    }
}
function decrypt(){

}

//console.log(generateSeed(['a','s','o','l','n','e','r']));
console.log(encrypt(['a','s','o','l','n','e','r'],generateSeed(['a','s','o','l','n','e','r']),"Hola niños y niñas"));

//console.log(sort([6,2,7,4,3,5,1,2,8,0,9,12]));

//La funcion del encriptado no tiene limite de tamaño del arreglo o cadena