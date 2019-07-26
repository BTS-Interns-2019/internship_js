
function unzipString(string) {
    if(string)
    if( typeof string === 'number' ){return false}
    let arr = string.split("");
    let resp = "";
    let num1 = [];
    let letra = [];
    let bandera = false;
    for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i]);
        
        if( arr[i] > 0 ){         
            bandera = true;   
            arr[i] = parseInt(arr[i]); 

            if(arr[i+1] > 0){continue;}
            num1.push(arr[i]);         
        }else{
            letra.push(arr[i])
        }  
    }
    
    for (let j = 0; j < num1.length; j++) {
        resp += agrega(num1[j],letra[j])
        
    }

    return resp;
}
function agrega (n,l){
    let r = "";
    for (let i = 0; i < n; i++) {
        r+=l;
    }
    return r;
}

module.exports = unzipString;