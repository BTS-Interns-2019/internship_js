function avoidngFire(arrays) {
    let temp = 0;
    let int = 0;
    function sacar(params) {
        for (let i = 0; i < params.length; i++) {
            if(params[i] > temp ){
                temp = params[i];
            }
            
        }
        return temp;
    }

    if(arrays[0] === Array.isArray()){ 
        Sacar();
    }else {
        arrays.forEach(element => {
            if(element > temp){
                temp = element;
            }
        });
    }

    // falta
    

return int;
}

console.log(avoidngFire([1,2,3,1,2,1,2,3]));


