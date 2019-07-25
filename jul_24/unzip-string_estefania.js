function  unzipString(str) {
    var result = ""
    var x = 1;
     for(let y of str){
        if(y >= 0 && y <=9){
            x = y;
        }else{
            result+= y.repeat(x);
        }
    }
    return result;
}

// console.log(unzipString('a2bc'));
// console.log(unzipString('3D2a5d2f'));
// console.log(unzipString('3d332f2a'));
// console.log(unzipString('abcd'));
// console.log(unzipString(''));


module.exports = unzipString;
