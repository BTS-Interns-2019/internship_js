function unzipString(cadena){
    let cadena2="";
    let numero=1;
    if (cadena=="")return "";
    for (let i = 0; i < cadena.length; i++) {
        const caracter=cadena.charAt(i);
        if (!parseInt(caracter)){
            for (let j = 0; j < numero; j++) {
                cadena2+=cadena.charAt(i);
            }            
        }else numero=parseInt(caracter);
    }
    return cadena2;
}
-//console.log(unzipString("abcd"));--

module.exports = unzipString;