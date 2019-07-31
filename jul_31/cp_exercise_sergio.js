function avoidngFire(arrays) {
    let temp = 0;
    let cont = 1;
    function sacar(params) {
        for (let i = 0; i < params.length; i++) {
            if(params[i] == temp){
                cont++;
            }
            if(params[i] > temp ){
                temp = params[i];
            }
            
            
        }
        return temp;
    }

    for (let k = 0; k < arrays.length; k++) {
        console.log(arrays[k]);
        
        if(Array.isArray(arrays[k])){ 
            sacar(arrays[k]);
        }else {
            arrays.forEach(element => {
                if(temp === element){cont++;}
                if(element > temp){
                    temp = element;
                }
            });
            break;
        }
    }

    // falta

    
    

return cont;
}

console.log(avoidngFire([[1,2,3,1,2,1,3,3,3,2,3],[,2,1,1,2,1,2,1,3],[,3,2,2,1,2,3,1,3,2]]));


