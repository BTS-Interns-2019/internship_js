function unzipString(data){
    data = data.split("");
    var res ='';
    loop:
    for (let i = 0; i < data.length; i++) {
        if(!isNaN(data[i])){
            var sum = 0;
            for(var x = i+1; x < data.length; x++){
                if(!isNaN(data[i]) == isNaN(data[x]) && typeof data[x] == "string"){
                    res += data[x].repeat(data[i]);
                    sum++;
                }else if(!isNaN(data[i]) == !isNaN(data[x])){
                    i += sum;
                    continue loop;
                }
            }
            i += sum;
        }else{
            res += data[i];
        }
    }
    return res;
}
module.exports = unzipString;