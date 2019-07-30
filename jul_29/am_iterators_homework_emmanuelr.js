function charCounter(cadena){
    if(cadena.length==0)return{}
    objeto={a:0, b:0, c:0, d:0, e:0, f:0, g:0, h:0, i:0, j:0, k:0, l:0, m:0, n:0, o:0, p:0, q:0, r:0, s:0, t:0, u:0, v:0, w:0, x:0, y:0, x:0, y:0, z:0}
    otro=cadena.toLowerCase().replace(/[^a-z]/gi, '').split("");
    otro.forEach(element => {
        objeto[element]++;
    });
    objeto=Object.entries(objeto).filter(x => x[1]>0);
    objeto2={}
    objeto.forEach(element => {
        objeto2[element[0]]=element[1];
    });
    return objeto2;
    
}
// charCounter("muchas letras y caracteres");
module.exports=charCounter;