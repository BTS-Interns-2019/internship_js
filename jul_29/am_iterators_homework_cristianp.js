function charCounter(str){
    str = str.toLowerCase();
    str = str.split("");
    var fin = {};
    str.forEach(letra => {
        if(letra >= "a" && letra <= "z")
        {
            if(fin.hasOwnProperty(letra)){
                fin[letra]++;
            }else{
                fin[letra] = 1;
            }
        }
    });
    return fin;
}
//console.log(charCounter("CriStIaN"));
//console.log(charCounter("Hi every body"));
module.exports = charCounter;
