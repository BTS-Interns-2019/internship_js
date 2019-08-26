function charcounter (cad){
    cad = Array.from(cad.replace(/ /g,'').toLowerCase().split('').sort().join(''));
    var char = cad.reduce((val, ind)=>{ 
    val[ind] = (val[ind] | 0) + 1;
    return val;
    }, {});

    return char;

}

console.log(charcounter("hOla a TOdos Mis AMiGOs"));

module.exports = charcounter;