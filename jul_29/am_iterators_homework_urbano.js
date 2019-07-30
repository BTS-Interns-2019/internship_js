function charCounter(str) {
    let origin = str
    let letters = str.toLowerCase().replace(/[&\s/#,+()$~%'":*?<>!{}|]/g, "").split("");
    let obj1={};

    console.log(letters.forEach((i) => {
        obj1[i]=obj1.hasOwnProperty(i)? obj1[i]+=1:1;
    }))
    return  obj1
}

console.log(charCounter("AAbcdee"))

module.exports = charCounter;

