function unzipString(str) {
    str.split("");
    let counter= 0;
    let letras;
    
    for (let i = 0; i < str.length; i++) {
        if(parseInt(str[i]) !== NaN){
            counter=str[i]
            for (let j = 0; j < counter; j++) {
                if(parseInt(str[i]) !== NaN){
                    console.log(str[i+1])
                }else if(parseInt(str[i+1]) !== NaN){
                    counter= str[i];
                }
                
            }
        }
        
    }
}
unzipString("3D2a25d2f");

module.exports = unzipString;

