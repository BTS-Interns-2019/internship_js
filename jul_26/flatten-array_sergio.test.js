function flattenArray(array) {
    if( array.length < 1){return []}
    let res = [];
    for (let k = 0; k < array.length; k++) {
        if( Array.isArray(array[k]) ){
            res.push(sacar(array[k]))
        }else if(typeof array[i] == "object"){
            res.push(sacar(array[k]));

        }else{
            res.push(array[k]);
        }
    }
    function sacar(array){

        for (let i = 0; i < array.length; i++) {
            if(Array.isArray(array[i])){ sacar(array[i])
            }else if(typeof array[i] == "object"){
                res.push(array[i])
                   throw 'esto no es un arreglo es un objeto';
            }
            res.push(array[i])
        }
        return res;
    }

    return sacar(array)
}

console.log(flattenArray([1,2,[{foo: 'bar'},['b']],3,4]));
