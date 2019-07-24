function  unzipString(str) {
    var result = ""
    var x = 1;
     for(let y of str){
        if(y === /^[0-9]+$/){
            x = y;
        }else{
            result+= y.repeat(x);
        }
    }
    console.log(result);
}

unzipString('a2bc')
unzipString('3D2a5d2f')
unzipString('3d332f2a')
unzipString('abcd')
unzipString('')


