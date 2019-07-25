function unzipString(data){
    data = data.split("");
    var res ='';
    for(let i = 0; i < data.length; i++){        
        if(!isNaN(data[i])){
            if(!isNaN(data[i]) == isNaN(data[i+1])){
                res += data[i+1].repeat(data[i]);                    
            }
        }
    }
    return res;
}
console.log(unzipString("2a3v5bl"));

module.exports = unzipString;    