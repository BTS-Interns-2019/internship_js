function unzipString(zip){
    let unzip="";
    let n = 1;
    for(let car of zip){
        if(car>=0&&car<=9){
            n = car;
        }else{
            unzip+= car.repeat(n);
        }
    }
    return unzip;
}

/*console.log(unzipString('a2bc'));
console.log(unzipString('3D2a5d2f'));
console.log(unzipString('3d332f2a'));
console.log(unzipString('abcd'));
console.log(unzipString(''));
*/
module.exports = unzipString;