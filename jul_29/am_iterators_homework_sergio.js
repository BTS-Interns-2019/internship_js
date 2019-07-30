function charCounter(params) {
    let array = params.split('');
    console.log(array);
    let obj = {};
    array.forEach(element => {
        element = element.toLowerCase();
       // element.match()
        if(element.match(/[a-z]/g)){
        
        
        console.log(element);
        
        obj[element] = obj.hasOwnProperty(element) ? obj[element] + 1 : 1;
        console.log(obj);
        }
    });
    return obj;
}

console.log(charCounter("abAracAdaBra"));
