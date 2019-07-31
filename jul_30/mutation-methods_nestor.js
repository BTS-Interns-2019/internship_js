function sort(arr, callback){
    let arrunde = []; 
    arr.forEach((cv, i, array)=>{if(typeof cv == "undefined"){ arrunde.push(...array.splice(i, 1))}});
    if(!Array.isArray(arr)){
        return "Its not Array"
    }else if(typeof callback == "function"){
        for(let i = 0, z = 0; z < arr.length; z++){
            var temp = i;
            for(let x =temp+1; x < arr.length; x++){
                if( callback(arr[temp], arr[x]) > 0){
                    arr.splice(temp, 0, arr[x]);
                    delete arr[x+1];
                    arr.splice(x+1, 1);
                    temp++
                }else{temp++}
            }
        }
        arr.push(...arrunde)
        return arr;
    }else{
        for(let i = 0, z = 0; z < arr.length; z++){
            var temp = i;
            for(let x =temp+1; x < arr.length; x++){
                if(arr[temp].toString() > arr[x].toString()){
                    arr.splice(temp, 0, arr[x]);
                    delete arr[x+1];
                    arr.splice(x+1, 1);
                    temp++
                }else if(arr[temp].toString() === arr[x].toString()){ 
                    temp++;
                }else{temp++}
            }
        }
        arr.push(...arrunde)
        return arr;
    }
}
//-----------------------------------------------------------------
function generateSeed(data){
    let res = []
    for(let i = 0; i < data.length; i++){
        var num = Math.floor(Math.random() * data.length);       
        if(res.indexOf(data[num]) == -1){
            res.push(data[num]);
        }else{
            i--;
        }
    }
    return res
}
function encrypt(baseAlphabet,seed,message){
    let res = "";
    message = message.toLowerCase();
    for(let i = 0; i < message.length; i++){
        let num =message[i]
        let pos = baseAlphabet.indexOf(num);
        if(pos == -1){
            res += num;
        }else{
            res += seed[pos];
        }
    }
    return res
}
function decrypt(baseAlphabet,seed,encryptedMessage){
    let res = "";
    for(let i = 0; i < encryptedMessage.length; i++){
        let num = encryptedMessage[i];
        let pos = seed.indexOf(num);
        if(pos == -1){
            res += num;
        }else{
            res += baseAlphabet[pos];
        }
    }
    return res
}
module.exports = { sort, generateSeed, encrypt, decrypt };