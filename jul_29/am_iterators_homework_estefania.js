function charCounter(str) {
    str = str.split('')
    str = str.map(element => element.toLowerCase())
    str = str.filter(element => element >= 'a' && element <= 'z')
    //console.log(str)
    var elObjeto = {};
    str.forEach(element => {
        if(!elObjeto[element] && elObjeto[element] !==0) {
            elObjeto[element] = 1
        } else {
            elObjeto[element]++
        }
    });
    return elObjeto
}
//console.log(charCounter("Hi Every body!"))


module.exports= charCounter;