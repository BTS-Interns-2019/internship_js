function unzipString(cadena){
    //cadena ="2ab";
    var sep = cadena.split("");
    var fin = "";
    var multiplicador = 0;
    for(var i = 0; i< sep.length; i++)
    {
        var ent = parseInt(sep[i]);
        if(!isNaN(ent)){
            multiplicador = ent; 
        }else{
            if(multiplicador>0){
                for(var r =0; r<multiplicador;r++){
                    fin+=sep[i];
                }
            }else{
                fin+=sep[i];
            }
        }
    }
    return fin;
}
module.exports = unzipString;