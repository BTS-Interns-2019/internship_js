function charCounter(params) {
    let array = params.split('');
    let obj = {};
    array.forEach(element => {
        element = element.toLowerCase();
       // element.match()
        if(element.match(/[a-z]/g)){

        
        obj[element] = obj.hasOwnProperty(element) ? obj[element] + 1 : 1;
        }
    });
    return obj;
}

console.log(charCounter("abracadAbra"));

module.exports = charCounter;
