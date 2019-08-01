str = "Blue Trail SoftWare";
console.log(charCounter(str));

function charCounter(str) {
    str = str.toLowerCase().match(/[a-z]/g);

    let set = new Set(str);
    let iterable = Array.from(set);
    let sum = iterable.slice().fill(0); 
    var obj = new Object();

    for (let i = 0; i < iterable.length; i++) {
        for (let element of str) {
            if (iterable[i] == element) {
                sum[i]++;            
            }   
        }    
        obj[iterable[i]] = sum[i];
    }
    return obj;
}

module.exports = charCounter;

// array = array.filter(filtro);    
// function filtro(e) {
//     return e>='a' && e<='z'; 
// }