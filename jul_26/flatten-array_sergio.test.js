function flattenArray(array) {
    if( array.length < 1){return []}
    let res = [];
    function sacar(array){

        for (let i = 0; i < array.length; i++) {
            if(Array.isArray(array[i])){ 
                console.log(res);
                return sacar(array[i]);
                
            }
            try {
                if(typeof array[i] == "object"){
                    throw 'esto no es un arreglo es un objeto';
                }
                res.push(array[i])
                console.log(res);
            } catch (error) { 
                res.push(array[i])
                console.log(error); 
                console.log(res);    
            }
        }
        
        console.log(res);
        return res;
        
    }
    return sacar(array)
}

console.log(flattenArray([1,2,[{foo:'bar'},['b']],3,4]));
