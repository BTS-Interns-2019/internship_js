function flettenArray(multi){
    var arr = [];
    recorrer(multi);
    function recorrer(multi){
        if(Array.isArray(multi)){
            for(ade of multi){
                if(Array.isArray(ade)){
                    recorrer(ade);
                }else if(typeof ade == "object"){
                    arr.push(Object.entries(ade));
                }else{
                    arr.push(ade);
                }
            }
        }else{
            return "No es un arreglo";
        }
    }
    console.log(arr);
    //return arr;
}


flettenArray([1, 2, ["a", "b"], 3, 4]);
flettenArray([1, 2, ["a",["a", "x"]], 3, 4]);
flettenArray([1,2,[{foo:"bar"},["b"]],3,4]);
