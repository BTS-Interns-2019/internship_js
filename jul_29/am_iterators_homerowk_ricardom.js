function charCounter(str){
    res={};
    obj = {a:0, b:0, c:0, d:0, e:0, f:0, g:0, h:0, i:0, j:0, k:0, l:0, m:0, n:0, ñ:0, o:0, p:0, q:0, r:0, s:0, t:0, u:0, v:0, w:0, x:0, y:0, z:0 }
    if(str.length == 0)return {};
    str = str.toLowerCase().replace(/[^a-z]/gi, '').split('');
    str.forEach(elemento => {
        obj[elemento]++;
    });

    obj = Object.entries(obj).filter(x => x[1] > 0);
    obj.forEach(element => {
    res[element[0]] = element[1];
    });
    return res;

}


// console.log(charCounter("Yo Queria Dormir :("));

module.exports = charCounter;

// declarar todas las letras
// cabiar a minusculas
// dividir las palabras
