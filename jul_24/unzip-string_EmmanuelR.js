function unzipString(cadena){
    let cadena2="";
    if (cadena=="")return "";
    if(!parseInt(cadena.charAt(0)))cadena2+=cadena.charAt(0);
    for (let i = 1; i < cadena.length; i++) {
        const element = cadena.charAt(i);
        const elementAnterior = cadena.charAt(i-1);
        if(!parseInt(element)){ //si actual no es un  número
            if(parseInt(elementAnterior)){ //si el anterior era número y el actual letra
                for(let j=0; j<parseInt(elementAnterior); j++){
                    cadena2+=element;
                }
            }else{ //si el anterior era letra y este tambien
                cadena2+=element;
            }
        }
        
    }
    return cadena2;
}

console.log(unzipString("3D2a5d2f"));

module.exports = unzipString;