function charCounter(data){
    const obj = {};
    data = data.toLowerCase().match(/[a-z]/g);
    data.forEach(function(x) {
        !obj[x] ? obj[x] = 1 : obj[x]++;
     });
     return obj;
}
module.exports= charCounter;
console.log(charCounter("Con-tra-rre-vo-lu-cio-na-rios"));
console.log(charCounter("Ciclopentanoperhidrofenantreno"));
console.log(charCounter("´!}+<Tran  ,subs . tan - cia_cion+}-+"));

