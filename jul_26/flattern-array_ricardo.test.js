function flattenArray(arr){
    let arreglo = [];

    try {
        if(Array.isArray(arr)){
        resultado(arr);
        return arreglo;
        }else throw new Error(message = "Debes enviar un arreglo");
    } catch (error) {
    console.log(error.message);
    }

    
    function resultado(arr){

        for(i = 0 ; i < arr.length ; i++ ){
            if(Array.isArray(arr[i])){
              let array = [];
              //console.log(arr[i]+"array");
              for(j = 0 ; j < arr[i].length ; j++){
                //console.log("Aqui hay item de array");
                array = arr[i];
                arreglo.push(array[j]);
            }
            }else{
                //console.log(arr[i]);
                arreglo.push(arr[i]);
            }
        }
        return arreglo;

    }


}
console.log(flattenArray(["hola", 2, ["Hola ", "Adios "],"b", {foo : "bar"}]));
console.log(flattenArray(["adios", 32, ["Hello ", "bye "],"bool", {bar : "foo"}, true]));
console.log("hola");
