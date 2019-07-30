let arry = ["Sergio","Rabanito","Urbanus","Pere","Powers","Marlon"];

// FOR EACH
function forEach(f,arry) {
    let res = "+";
    for (let i of arry) {
        f(i,res);
        //solo para probarla
        console.log(f(i,res));
        
    }
    
}

console.log(forEach(function(uno,dos) {
    console.log(typeof uno);
    return uno + dos;
},arry));



///// MAP
function map(f, arry) {
    let ary1 = [];
    for (let j of arry) {
        ary1[ary1.length] =f(j);
    }

    return ary1;
}
console.log(map(function(uno) {
        return uno.toLowerCase();
    },arry));


/// Filter
function filter(f, names) {
    for (let k of names) {
        if(k.length == 4){
            return f(k);
        }
        
        
    }

}
console.log(filter(function(uno) {return uno+" *";},arry));


function reduce(f,arry) {
    let i = 0;
        for (const key in arry) {
         return   f(arry[i-1],arry[i], i, arry );
        }
}
console.log(reduce(function (vAnt,vAct,i,names) {let res = "";for (i = 0; i < names.length; i++) {vAnt = names[i-1];vAct = names[i]; i = i;console.log(vAnt);
 res += vAct;}return res;  },arry));

 module.exports = {forEach,map,filter,reduce};
 //module.exports =

